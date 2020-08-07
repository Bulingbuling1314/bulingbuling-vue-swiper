import Vue from 'vue'
import App from './App.vue'
import BSwiper from '../packages'
Vue.use(BSwiper)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
