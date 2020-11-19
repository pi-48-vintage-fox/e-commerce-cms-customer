import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, IconsPlugin, BToast } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.component('b-toast', BToast)
Vue.config.productionTip = false

Vue.filter('toCurrency', function (value) {
  if (typeof value !== 'number') {
    return value
  }
  const formatter = new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    minimumFractionDigits: 0
  })
  return formatter.format(value)
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
