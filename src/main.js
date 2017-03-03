// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    api: 'http://tm.hw.sunday.so/api'
  },
  mutations: {
    change (state, value) {
      state.api = value
    }
  }
})

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.http.options.emulateJSON = true

import './common/stylus/index.styl'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
