<template>
  <div class="page-container">
    <section class="hero-full-width">
      <div class="hero-content">
        <h2>Benvinguts a FESTILERDA 2026</h2>
        <p>El festival de referència de cinema d'autor, independent i noves mirades audiovisuals.</p>
        <RouterLink to="/movies" class="btn-primary">Veure la Programació</RouterLink>
      </div>
    </section>

    <section class="highlights">
      <h3>Seccions Destacades</h3>
      <div class="grid-sections">
        <div class="card-section">
          <h4>Secció Oficial</h4>
          <p>Els millors llargmetratges internacionals de ficció de la temporada.</p>
        </div>
        <div class="card-section">
          <h4>Cinema Experimental</h4>
          <p>Noves formes de narració visual, format curts i obres d'avantguarda.</p>
        </div>
        <div class="card-section">
          <h4>Talents Emergents</h4>
          <p>Primeres i segones obres de nous directors i directores emergents.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped>
.page-container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 1rem 2rem 1rem;
  color: #ffffff;
}

.hero-full-width {
  position: relative;
  width: 100vw;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  margin-bottom: 2.5rem;
  overflow: hidden;
  min-height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
}

.hero-full-width::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(18, 18, 18, 0.6) 0%, rgba(12, 12, 12, 0.95) 100%), 
              url('https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=1600&auto=format&fit=crop') no-repeat center center;
  background-size: cover;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  text-align: center;
  max-width: 800px;
}

.hero-content h2 {
  font-size: 2.8rem;
  color: #e50914;
  margin-bottom: 1rem;
  text-shadow: 0 3px 6px rgba(0,0,0,0.7);
}

.hero-content p {
  font-size: 1.2rem;
  color: #dddddd;
  max-width: 650px;
  margin: 0 auto 1.8rem auto;
}

.btn-primary {
  display: inline-block;
  background-color: #e50914;
  color: #ffffff;
  padding: 0.9rem 1.8rem;
  border-radius: 6px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1rem;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-primary:hover {
  background-color: #b80710;
  transform: translateY(-2px);
}

.highlights h3 {
  font-size: 1.5rem;
  border-left: 4px solid #e50914;
  padding-left: 0.8rem;
  margin-bottom: 1.5rem;
}

.grid-sections {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.card-section {
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 8px;
  border: 1px solid #2a2a2a;
}

.card-section h4 {
  margin-top: 0;
  color: #ffffff;
}

.card-section p {
  color: #a0a0a0;
  font-size: 0.9rem;
}
</style>