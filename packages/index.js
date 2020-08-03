import Test from '../packages/test';
import Swiper from '../packages/swiper';

const components = [
  Test,
  Swiper
]

const install = (Vue, opts = {}) => {
  components.map(component => {
    Vue.component(component.name, component)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export {
  install,
  Test,
  Swiper
}
export default {
  install,
  ...components
}