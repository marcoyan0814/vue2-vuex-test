# Vue2 + Vuex 練習題  

## 官方文件  (這裡使用 Vuex 3.x)
https://v3.vuex.vuejs.org/zh/

## 練習內容  
- 使用商品及購物車兩個模組
- 商品組件內功能：  
1.列出商品  
2.新增商品(商品名稱、價格)  
3.隨機新增商品(使用axios取API)  
4.頁面載入時填入預設資料
- 購物車組件功能：  
1.列出購物車項目  
2.將商品及數量加入購物車  
3.計算購物車內總額  
4.計算購物車內筆數  
5.將商品移出購物車  
- 主要練習基本語法及map語法
  
## 建立專案  
```
vue create vue2-vuex-test
```

## 安裝套件  
```
vue create vue2-vuex-test
// 隨機產生uuid輕量版
npm install nanoid
// 安裝 vuex 這邊注意要安裝vuex 3的版本不然會抓不到store
npm install vuex@3
// 安裝axios
npm install axios
```

## Vuex 初始設定
#### 在src下建立 store 資料夾及建立檔案
```
mkdir store/module/ -p
```
#### store/index.js 檔案內容
```
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
```
#### store/module/product.js 檔案內容
```
export default {
    namespaced: true,
    actions: {},
    mutations: {},
    state: {
        //商品列表
        productList: []
    },
    getters: {}
}
```
#### store/module/cart.js 檔案內容
```
export default {
    namespaced: true,
    actions: {},
    mutations: {},
    state: {
        //購物車內容
        cartList: [],
        //目前數量
        cartCount: 0,
        //目前總金額
        cartPriceTotal: 0
    },
    getters: {}
}

```

### 啟動開發測試  
```
npm run serve
```
