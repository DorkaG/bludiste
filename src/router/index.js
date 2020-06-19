import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bludiste from '../views/Bludiste.vue'
import Hra1 from '../components/Hra1.vue' //TOHLE VE FINALE SMAZAT
import Hra2 from '../components/Hra2.vue' //TOHLE VE FINALE SMAZAT


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

  {                               //TOHLE VE FINALE SMAZAT
    path: '/hra1',
    name: 'Hra1',
    component: Hra1
    
  },

  {                               //TOHLE VE FINALE SMAZAT
    path: '/hra2',
    name: 'Hra2',
    component: Hra2
    
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
