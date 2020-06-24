import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Bludiste from '../views/Bludiste.vue'
import Hra1 from '../components/Hra1.vue' //pro vyvoj
import Hra2 from '../components/Hra2.vue' //pro vyvoj
import Zavod from '../components/Zavod.vue' //pro vyvoj
import Kostka from '../components/Kostka.vue' //pro vyvoj
import Pohadka from '../components/Pohadka.vue' //pro vyvoj


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

    {                               //pro vyvoj
        path: '/hra1',
        name: 'Hra1',
        component: Hra1
    },

    {                               //pro vyvoj
        path: '/hra2',
        name: 'Hra2',
        component: Hra2
    },
    {                               //pro vyvoj
        path: '/zavod',
        name: 'Zavod',
        component: Zavod
    },
    {                               //pro vyvoj
        path: '/kostka',
        name: 'Kostka',
        component: Kostka
    },
    {                               //pro vyvoj
        path: '/pohadka',
        name: 'Pohadka',
        component: Pohadka
    },
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router
