import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueCarousel from 'vue-carousel'
import VTooltip from 'v-tooltip'

import './css/tooltips.css'
import './css/auth.css'
import './css/style.css'

Vue.use(VTooltip)

Vue.use(VueCarousel)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
