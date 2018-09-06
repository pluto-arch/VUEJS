// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-chalk/index.css'
var VueMaterial = require('vue-material')
require('vue-material/dist/vue-material.css')
import App from './App'
import router from './router'
import axios from 'axios'//引入axios

Vue.prototype.$ajax = axios;//修改Vue的原型属性
Vue.use(ElementUI);
Vue.use(VueMaterial.MdCore); //Required to boot vue material
Vue.use(VueMaterial.MdButton);
Vue.use(VueMaterial.MdIcon);
Vue.use(VueMaterial.MdSidenav);
Vue.use(VueMaterial.MdToolbar);
Vue.config.productionTip = false;

/* eslint-disable no-new */
//模板是在渲染组件时打印到视图的模板
new Vue({
  el: '#app',
  router,
  components: { App },    //您可以在template属性中定义组件HTML模板。 它可以是我们自己创建的自定义组件，如上例所示，也可以是传统的HTML
  template: '<App/>'
})
