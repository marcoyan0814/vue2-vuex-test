<template>
    <div>
        <div>
            <input type="text" ref="name" value="鬧鐘" placeholder="商品名稱">
            <input type="number" ref="price" value="100" placeholder="商品價格">
            <button type="button" @click="add">新增商品</button>
            <button type="button" @click="addAuto">隨機新增(2秒)</button>
        </div>
        <div>
            <h2>目前商品</h2>
            數量：
            <select v-model="amount">
                <option :value="num" v-for="num in 10" :key="num">{{ num }}</option>
            </select>
            <ul>
                <li v-for="p in productList" :key="p.id">
                    {{ p.name }} / ${{ p.price }}
                    <button @click="addCart(p)">加入購物車</button>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {nanoid} from 'nanoid'
    import {mapState,mapActions,mapMutations} from 'vuex'
    export default {
        name:"ProductList",
        data() {
            return {
                amount: 1
            }
        },
        computed: {
            //基本方式
            // productList(){
            //     return this.$store.state.Product.productList
            // }
            //使用map方式 ...為es6語法
            ...mapState('Product',['productList'])
        },
        methods: {
            //使用map方式
            ...mapMutations('Product',['ADD_PRODUCT_EXAMPLE']),
            //基本方式
            // add_product_example(){
            //     this.$store.commit('Product/ADD_PRODUCT_EXAMPLE')
            // },
            //使用map方式則無法帶入參數，若要帶入需在templete裡一起帶入
            //隨機新增，這邊測試mapActions
            ...mapActions('Product',['addAuto']),
            //新增商品
            add(){
                const pObj = {
                    id: nanoid(),
                    name: this.$refs.name.value,
                    price: this.$refs.price.value
                }
                //基本方式
                this.$store.dispatch('Product/addProduct',pObj);
            },
            //加入至購物車
            addCart(p){
                const cartObj = {
                    product: p,
                    amount:this.amount
                }
                this.$store.dispatch('Cart/addCart',cartObj)
            }
        },
        mounted(){
            //載入完畢產生範例資料
            this.ADD_PRODUCT_EXAMPLE()
        }
    }
</script>

<style scoped>

</style>