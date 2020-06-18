import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VModal from 'vue-js-modal'

Vue.config.productionTip = false
Vue.use(VModal, { dynamic: true, dynamicDefaults: { clickToClose: false, height: "auto", width: 800 } })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
