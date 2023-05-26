import { nanoid } from "nanoid"

export default {
    namespaced: true,
    actions: {
        //加入購物車，先處理直接加入
        addCart(context,obj)
        {
            //console.log(context,obj)
            const cart = {
                cart_id: nanoid(),
                id: obj.product.id,
                name: obj.product.name,
                price: parseInt(obj.product.price),
                amount: parseInt(obj.amount),
                subtotal: parseInt(obj.product.price)*parseInt(obj.amount)
            }
            //console.log(cart)
            context.commit('ADD_CART',cart)
        }
    },
    mutations: {
        //加入至購物車
        ADD_CART(state,value)
        {
            state.cartList.push(value)
            this.commit('Cart/RELOAD_CART')
        },
        //從購物車中移除
        REMOVE_CART(state,value)
        {
            state.cartList = state.cartList.filter((c)=> c.cart_id!==value)
            this.commit('Cart/RELOAD_CART')
        },
        //更新金額及筆數
        RELOAD_CART(state)
        {
            //console.log('更新')
            //更新筆數及計算總額
            state.cartCount = state.cartList.length
            state.cartPriceTotal = state.cartList.reduce(((x,y) => x += y.subtotal),0)
        }
    },
    state: {
        //購物車內容
        cartList: [],
        //目前數量
        cartCount: 0,
        //目前總金額
        cartPriceTotal: 0
    },
    getters: {
        //取得目前總額
        showCartTotal(state){
            //console.log(state)
            return `總共：${state.cartPriceTotal} 元`
        },
        //取得目前總筆數
        showCartCount(state){
            //console.log(state)
            return `總共：${state.cartCount} 筆`
        }
    }
}