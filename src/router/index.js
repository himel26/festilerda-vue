import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MoviesView from '../views/MoviesView.vue'
import AboutView from '../views/AboutView.vue'

const routes = [
  { path: '/', name: 'Inici', component: HomeView },
  { path: '/movies', name: 'Programacio', component: MoviesView },
  { path: '/about', name: 'ElFestival', component: AboutView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

