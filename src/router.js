import { createRouter, createWebHistory } from 'vue-router'
import Homepage from './pages/Homepage.vue'
import Dashboard from './pages/Dashboard.vue'
import Projects from './pages/Projects.vue'
import Settings from './pages/Settings.vue'
import Help from './pages/Help.vue'
const routes = [
  { path: '/', component: Homepage },
  { path: '/dashboard', component: Dashboard },
  { path: '/projects', component: Projects },
  { path: '/settings', component: Settings },
  { path: '/help', component: Help }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 