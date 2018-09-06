# spaclient

> A vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Demo01的说明
--1、找到index.html 然后找到下面这个标签
``` bash
<div id="app"></div>
```
这里就是vue渲染内容的地方。
--2、然后打开 build\webpack.base.conf.js 文件，找到entry 节点，会发现上边id为app的被指向了./src/main.js文件。【注意：将rule中第一个包含有loader: 'eslint-loader'的节点注释掉，然后重新npm run dev。就会解决多余空格回车会报错的问题】
``` bash
module.exports = {
  entry: {
    app: './src/main.js'
  },
  output: {
    path: config.build.assetsRoot,
    filename: '[name].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src')
    }
  },
  module: {
    rules: [
      /*{
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },*/
      ......此处省略代码
    ]
  }
}
```
--3、打开 src/main.js 
``` bash
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
```
这段代码首先导入vue的包。new Vue({})是创建一个vue实例。el表示元素，route表示启用vue路由，templete是模板内容：<App />就是App.vue，template就是选择vue实例要加载哪个模板。最新的vue-cli脚手架模板现在是这个形式。App.vue是主程序，其他所有的.vue都是放在App.vue中，所以只需要加载App.vue就完全可以把其他的东西加载出来。

---打开app.vue文件：
主要组成：
```
<template>
  <div id="app">
    <header>
      <span>Hello world</span>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
....
</script>

<style>
.....
</style>

```
在template标签中，```<router-view></router-view>```就是根据路由加载其他内容的地方，者整个文件就是个模板。

----现在template中的内容就可以自己动手改变了，然后回到浏览器就会看到内容自动刷新了。

