<template>
  <header class="navbar">
    <div class="logo">
      <h1>FESTILERDA</h1>
      <p class="tagline">Festival de Cinema d'Autor i Independent</p>
    </div>
    <nav class="nav-links">
      <RouterLink to="/" class="nav-link">Inici</RouterLink>
      <RouterLink to="/movies" class="nav-link">Programació</RouterLink>
      <RouterLink to="/about" class="nav-link">El Festival</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 2rem;
  background-color: #121212;
  color: #ffffff;
  border-bottom: 2px solid #e50914;
}

.logo h1 {
  margin: 0;
  font-size: 1.8rem;
  letter-spacing: 2px;
  color: #e50914;
}

.tagline {
  margin: 0;
  font-size: 0.8rem;
  color: #a0a0a0;
}

.nav-links {
  display: flex;
  gap: 1.5rem;
}

.nav-link {
  color: #ffffff;
  text-decoration: none;
  font-weight: 600;
  transition: color 0.3s;
}

.nav-link:hover,
.nav-link.router-link-exact-active {
  color: #e50914;
}
</style>
