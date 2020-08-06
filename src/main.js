import Vue from 'vue'
import App from './App.vue'
import Swiper from '../packages'
Vue.use(Swiper)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
