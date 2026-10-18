<template>
  <div class="page-container">
    <h2>Programació</h2>
    <p class="subtitle">Descobreix les pel·lícules seleccionades per a l'edició d'enguany.</p>

    <!-- Indicador de càrrega -->
    <div v-if="loading" class="loading">
      <p>Carregant la programació des de la base de dades...</p>
    </div>

    <!-- Missatge d'error si falla la connexió -->
    <div v-else-if="errorMsg" class="error">
      <p>{{ errorMsg }}</p>
    </div>

    <!-- Si no hi ha pel·lícules -->
    <div v-else-if="movies.length === 0" class="empty">
      <p>Pendent d'afegir pel·lícules a la col·lecció 'movies' de Firestore.</p>
    </div>

    <!-- Graella de pel·lícules (Comunicació Pare -> Fill mitjançant props) -->
    <div v-else class="movies-grid">
      <MovieCard 
        v-for="item in movies" 
        :key="item.id" 
        :movie="item" 
      />
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { collection, getDocs } from 'firebase/firestore'
import { db } from '../firebase'
import MovieCard from '../components/MovieCard.vue'

const movies = ref([])
const loading = ref(true)
const errorMsg = ref(null) // <-- Nova variable per desar l'error

// Funció per carregar les pel·lícules des de Cloud Firestore
const fetchMovies = async () => {
  try {
    const querySnapshot = await getDocs(collection(db, 'movies'))
    const moviesData = []
    querySnapshot.forEach((doc) => {
      moviesData.push({
        id: doc.id,
        ...doc.data()
      })
    })
    movies.value = moviesData
  } catch (error) {
    console.error("Error carregant les pel·lícules des de Firestore:", error)
    errorMsg.value = "No s'ha pogut carregar la programació. Comprova la connexió." // <-- Missatge visual per a l'usuari
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  fetchMovies()
})
</script>

<style scoped>
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 2rem 1rem;
  color: #ffffff;
}

h2 {
  font-size: 2rem;
  color: #e50914;
  margin-bottom: 0.3rem;
}

.subtitle {
  color: #aaaaaa;
  margin-bottom: 2rem;
}

.loading, .empty, .error {
  text-align: center;
  padding: 3rem;
  color: #888888;
  font-style: italic;
}

.error {
  color: #ff5252; /* Color vermell per destacar l'error */
}

.movies-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 2rem;
}
</style>

