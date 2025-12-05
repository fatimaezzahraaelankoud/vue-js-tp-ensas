
import { createRouter, createWebHistory } from 'vue-router'

import Landing from './views/Landing.vue'
import Login from './views/Login.vue'
import Register from './views/Register.vue'
import Home from './views/Home.vue'

const routes = [
  { path: '/', component: Landing },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/home', component: Home },
]

export default createRouter({
  history: createWebHistory(),
  routes
})
