import BSwiper from '../packages/swiper';

const components = [
  BSwiper
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  BSwiper
}