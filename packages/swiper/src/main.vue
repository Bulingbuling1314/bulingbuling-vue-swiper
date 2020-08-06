<template>
  <div class="swiper">
    <div class="swiper-container" ref="container">
      <div :class="[{'swiper-stack': stack}, 'swiper-wrapper']" ref="wrapper">
        <!-- 通过slot传入内容 -->
        <slot></slot>
      </div>
    </div>
    <!-- 分页器 -->
    <div class="swiper-pagination" ref="pagination"></div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'

export default {
  name: 'Swiper',
  props: {
    // 切换样式
    effect: {
      type: String,
      default: 'slide'
    },
    // 层叠轮播
    stack: {
      type: Boolean,
      default: false
    },
    // 显示分页器
    showPagination: {
      type: Boolean,
      default: false
    },
    // 显示slide数量
    // 可选值: 数字 或 'auto'
    slidesPerView: {
      type: [Number, String],
      default: 0
    },
    // slide间隔
    spaceBetween: {
      type: Number,
      default: 0
    },
    // 循环
    loop: {
      type: Boolean,
      default: true
    },
    // 自动居中
    centeredSlides: {
      type: Boolean,
      default: true
    },
    // 自动播放
    autoplay: {
      type: Boolean,
      default: false
    },
    // 时间间隔
    delay: {
      type: Number,
      default: 3000
    },
    // 用户操作后, 是否禁止自动播放
    disableOnInteraction: {
      type: Boolean,
      default: true
    }
  },
  mounted () {
    this.create()
  },
  beforeDestroy () {
    this.destroy()
  },
  methods: {
    create () {
      // 如果已经有swiper实例了,就先销毁
      this.destroy()

      // 轮播内容的class必须为swiper-slide
      const slides = this.$refs.wrapper.children
      Array.from(slides).forEach(el => {
        el.classList.add('swiper-slide')
      })
      // swiper参数
      const param = {
        spaceBetween: this.spaceBetween,
        loop: this.loop,
        effect: this.effect,
        centeredSlides: this.centeredSlides,
        pagination: {}
      }
      // 层叠
      if (this.stack) {
        param.slidesPerView = this.slidesPerView || 1.5
      }
      // 自动播放
      if (this.autoplay) {
        param.autoplay = {
          delay: this.delay,
          disableOnInteraction: this.disableOnInteraction
        }
      }
      // 显示分页器
      if (this.showPagination) {
        param.pagination = {
          el: this.$refs.pagination
        }
      }
      // 创建swiper
      this.swiper = new Swiper(this.$refs.container, param)
    },
    destroy () {
      // 销毁swiper
      if (this.swiper) {
        this.swiper.destroy()
        this.swiper = null
      }
    },
    update () {
      this.create()
    }
  }
}
</script>

<style lang="sass" scoped>
.swiper
  width: 100%
  position: relative
  .swiper-pagination
    position: absolute
    bottom: 10%
    left: 50%
    transform: translateX(-50%)
  .swiper-pagination-bullet
    margin: 0 4px

  .swiper-stack
    .swiper-slide
      transform: scale(0.8)
      transition: all 0.3s
    .swiper-slide-active
      box-shadow: 0 0 8px rgba(0, 0, 0, 0.3)
      transform: scale(1)
</style>