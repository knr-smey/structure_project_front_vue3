import { createRouter, createWebHistory } from 'vue-router'
import DashboardPage from '@/pages/dashboard/DashboardPage.vue'
import Login from '@/pages/auth/Login.vue'
import Register from '@/pages/auth/Register.vue'
import HomePage from '@/pages/home/HomePage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/dashboard', component: DashboardPage },
  // Auth pages
  { path: '/login', component: Login },
  { path: '/register', component: Register },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
