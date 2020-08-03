import Swiper from './src/main.vue'

Swiper.install = Vue => {
  Vue.component(Swiper.name, Swiper);
}

export default Swiper;