import Vue from 'vue'
import App from './App.vue'
import Test from '../packages'
Vue.use(Test)
Vue.config.productionTip = false

new Vue({
  render: function (h) { return h(App) },
}).$mount('#app')
