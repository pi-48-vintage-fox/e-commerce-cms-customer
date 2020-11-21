import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import VTooltip from 'v-tooltip'
import VueToastify from 'vue-toastify'
import Vuelidate from 'vuelidate'

import './css/tooltips.css'
import './css/auth.css'
import './css/style.css'

Vue.config.productionTip = false

Vue.use(Vuelidate)
Vue.use(VTooltip)
Vue.use(VueCarousel)
Vue.use(VueToastify, {
  theme: 'light',
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
