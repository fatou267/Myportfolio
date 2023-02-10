const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.NODE_ENV === 'production'
    ? 'https://fatouniang.000webhostapp.com/'
    : '/'

  //resolve(__dirname, 'node_modules/vue/dist/vue.runtime.esm.js')
})
