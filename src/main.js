import Vue from 'vue'
import App from './app/App'
import router from './router'
import FastClick from 'fastclick';



new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
