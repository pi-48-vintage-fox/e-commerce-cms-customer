import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import tippy, { TippyComponent } from 'vue-tippy'
import 'tippy.js/themes/light.css'
import { SweetModal } from 'sweet-modal-vue'
import VueEvents from 'vue-plugin-events'

Vue.use(VueEvents)
Vue.use(tippy)
Vue.config.productionTip = false
Vue.component('tippy', TippyComponent)
Vue.component('SweetModal', SweetModal)
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
