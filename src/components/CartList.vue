<template>
    <div>
        <div>
            <h2>目前購物車訊息</h2>
            <h3>{{showCartCount}}</h3>
            <h3>{{showCartTotal}}</h3>
            <ul>
                <li v-for="cart in cartList" :key="cart.cart_id">
                    {{ cart.name }} * {{ cart.amount }} = 小計 {{ cart.subtotal }} 元
                    <button type="button" @click="remove(cart)">刪除</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {mapState,mapGetters} from 'vuex'
    export default {
        name:"CartList",
        methods: {
            remove(obj){
                //這邊不經過action直接commit刪除
                this.$store.commit('Cart/REMOVE_CART',obj.cart_id)
            }
        },
        computed:{
            ...mapState('Cart',['cartList']),
            ...mapGetters('Cart',['showCartTotal','showCartCount'])
        }
    }
</script>

<style scoped>

</style>