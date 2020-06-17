import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bludiste from '../views/Bludiste.vue'
import Hra1 from '../components/Hra1.vue'


Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/bludiste',
    name: 'Bludiste',
    component: Bludiste
    
  },

  {
    path: '/hra1',
    name: 'Hra1',
    component: Hra1
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
