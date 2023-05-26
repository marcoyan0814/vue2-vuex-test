# Vue2 + Vuex 練習題  

## 官方文件  (這裡使用 Vuex 3.x)
https://v3.vuex.vuejs.org/zh/

## 練習內容  
- 使用商品及購物車兩個模組
- 商品組件內功能：列出所有商品，可新增商品(商品名稱、價格)，可顯示是否已加入至購物車
- 購物車組件功能：可選擇商品及數量加入購物車，計算購物車內總額，可將商品移出購物車

### 建立專案  
```
vue create vue2-vuex-test
```

### 安裝套件  
```
vue create vue2-vuex-test
// 隨機產生uuid輕量版
npm install nanoid
// 安裝 vuex
npm install vuex
```

### Vuex 初始設定
```
//在src下建立 store 資料夾及建立檔案
mkdir store/

// store/module/product.js
export default {
    actions: {},
    mutations: {},
    state: {
        productList: []
    },
    getters: {}
}

// store/module/cart.js
export default {
    actions: {},
    mutations: {},
    state: {
        cartList: []
    },
    getters: {}
}

// index.js  
import Vue from 'vue'
import Vuex from 'vuex'
// 載入module
import Product from './module/product'
import Cart from './module/cart'

Vue.use(Vuex)

export default new Vuex.Store({
    Product,
    Cart
})
```

### 啟動開發測試  
```
npm run serve
```
