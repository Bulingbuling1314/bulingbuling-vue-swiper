import Test from './src/main.vue'

Test.install = Vue => {
  Vue.component(Test.name, Test);
}

export default Test;