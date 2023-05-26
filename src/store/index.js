// 引入lib
import Vue from 'vue'
import Vuex from 'vuex'
// 載入module
import Product from './module/product'
import Cart from './module/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    modules:{
        Product,
        Cart
    }
})