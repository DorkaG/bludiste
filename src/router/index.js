import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bludiste from '../views/Bludiste.vue'
import Hra1 from '../components/Hra1.vue' //TOHLE VE FINALE SMAZAT
import Hra2 from '../components/Hra2.vue' //TOHLE VE FINALE SMAZAT
import Zavod from '../components/Zavod.vue'
import Kostka from '../components/Kostka.vue'


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
    
  },
  {
    path: '/zavod',
    name: 'Zavod',
    component: Zavod
    
  },
  {
    path: '/kostka',
    name: 'Kostka',
    component: Kostka
    
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
