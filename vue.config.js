const path = require('path')
// const webpack = require('webpack')
module.exports = {
  publicPath: '/',
  css: {
    extract: false
  },
  productionSourceMap: false,
  outputDir: path.resolve(__dirname, './dist'),
  configureWebpack: {
    output: {
      filename: 'bulingbuling-vue-swiper.min.js',
      library: 'bulingbuling-vue-swiper',
      libraryTarget: 'umd',
      umdNamedDefine: true
    }
  }
}
