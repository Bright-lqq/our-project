import Vue from 'vue'
import App from './app/App'
import router from './router'
import store from './vuex'
import FastClick from 'fastclick'

window.bus = new Vue();


new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
