import Vue from 'vue'
import App from './App.vue'
import Mint from 'mint-ui';
import '../node_modules/mint-ui/lib/style.css';

//路由
import VueRouter from 'vue-router'
import router from './js/router.js'
//ajax

import VueResource from 'vue-resource'
//定义vue可以使用VueResource
Vue.use(VueResource)

Vue.use(VueRouter)

Vue.use(Mint)

new Vue({
  el: '#app',
  render: h => h(App),
  router
})
 