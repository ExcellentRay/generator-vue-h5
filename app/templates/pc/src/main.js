import babelpolyfill from 'babel-polyfill'
import Vue from 'vue'
import App from './App'
import ElementUI from 'element-ui'
import VueRouter from 'vue-router'
import store from './store/index'
import Vuex from 'vuex'
import axios from 'axios'

import routes from './routes'

import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'

Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.use(axios)


const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  if (to.path == '/home') {
    sessionStorage.removeItem('user');
  }
  let user = JSON.parse(sessionStorage.getItem('user'));
  if (!user && to.path != '/home') {
    next({ path: '/home' })
    // next()
  } else {
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
