<template>
  <div id="app">
    <b-swiper effect="fade">
      <div class="swiper-item">
        <img src="../public/1.png" alt />
      </div>
      <div class="swiper-item">
        <img src="../public/2.png" alt />
      </div>
      <div class="swiper-item">
        <img src="../public/3.png" alt />
      </div>
      <div class="swiper-item">
        <img src="../public/4.png" alt />
      </div>
    </b-swiper>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {
  }
}
</script>

<style lang="sass">
#app
  font-family: Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing: antialiased
  -moz-osx-font-smoothing: grayscale
  text-align: center
  color: #2c3e50
  margin-top: 60px
  .swiper-item
    width: 100%
    img
      width: 100%
</style>
