<template>
  <article class="movie-card">
    <div class="poster-container">
      <img :src="movie.poster" :alt="movie.title" class="poster" />
      <span class="section-tag">{{ movie.section }}</span>
    </div>
    <div class="movie-info">
      <h3>{{ movie.title }}</h3>
      <p class="director"><strong>Director:</strong> {{ movie.director }}</p>
      <p class="details">
        <span>{{ movie.year }}</span> • <span>{{ movie.duration }} min</span> • <span>{{ movie.country }}</span>
      </p>
      <p class="synopsis">{{ movie.synopsis }}</p>
    </div>
  </article>
</template>

<script setup>
// Declaració formal de les props que rep des del pare
defineProps({
  movie: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.movie-card {
  background-color: #1e1e1e;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  display: flex;
  flex-direction: column;
  color: #ffffff;
}

.poster-container {
  position: relative;
  width: 100%;
  height: 320px;
  overflow: hidden;
}

.poster {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.section-tag {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #e50914;
  color: #ffffff;
  padding: 0.3rem 0.6rem;
  font-size: 0.75rem;
  font-weight: bold;
  border-radius: 4px;
  text-transform: uppercase;
}

.movie-info {
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.movie-info h3 {
  margin: 0;
  font-size: 1.3rem;
  color: #ffffff;
}

.director {
  margin: 0;
  font-size: 0.9rem;
  color: #d1d1d1;
}

.details {
  margin: 0;
  font-size: 0.8rem;
  color: #888888;
}

.synopsis {
  margin-top: 0.5rem;
  font-size: 0.85rem;
  color: #b3b3b3;
  line-height: 1.4;
}
</style>
