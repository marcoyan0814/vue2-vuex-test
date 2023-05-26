import Vue from 'vue'
import App from './App.vue'
//引入vuex
import Vuex from 'vuex'
//預設會自己取 index.js
import store from './store'

Vue.config.productionTip = false
Vue.use(Vuex)

new Vue({
  render: h => h(App),
  store,
  mounted(){
  }
}).$mount("#app")
