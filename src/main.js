import Vue from 'vue'
import App from './App.vue'

import Vant from 'vant'
import 'vant/lib/index.css'
import 'amfe-flexible/index.min.js'
import router from './router.js'

Vue.use(Vant)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
