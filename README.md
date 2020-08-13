# bulingbuling-ui
1. 安装
`npm install bulingbuling-vue-swiper -S`
2. 引入
```
// main.js
import BSwiper from '../packages'
Vue.use(BSwiper)
```
3. 页面中使用
```
<b-swiper>
  <div>slide1</div>
  <div>slide2</div>
  <div>slide3</div>
  <div>slide4</div>
</b-swiper>
```
4. 其他属性
- | effect | 轮播效果 | 'slide','cube','coverflow','flip' |
- | stack | 开启层叠效果 | true\|\false, 默认false |
- | showPagination | 显示分页器 | true\|\false, 默认false |
- | spaceBetween | slide间隔 | Number\|\String |
- | loop | 循环播放 | true\|\false, 默认true |
- | centeredSlides | 自动居中 | true\|\false, 默认true |
- | autoplay | 自动播放 | true\|\false, 默认true |
- | delay | 时间间隔 | Number, 默认3000 |
- | disableOnInteraction | 用户操作后, 是否禁止自动播放 | true\|\false, 默认true |
