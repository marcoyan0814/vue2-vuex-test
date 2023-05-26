import {nanoid} from 'nanoid'
import axios from 'axios'
import { setTimeout } from 'core-js'
export default {
    namespaced: true,
    actions: {
        addAuto(context){
            //console.log(context)
            //自動產生
            //API: https://v1.hitokoto.cn/?c=a
            //停2秒再取避免都是同樣資料
            setTimeout(function(){
                axios.get('https://v1.hitokoto.cn').then(
                    response => {
                        const data = response.data
                        //console.log(data)
                        const obj = {
                            id: nanoid(),
                            name: data.from,
                            price: data.id
                        }
                        //新增商品及檢查
                        context.dispatch('addProduct',obj)
                    },
                    error => {
                        console.log(error.message)
                    }
                )
            },2000)
        },
        //新增商品
        addProduct(context,obj)
        {
            //console.log(context,obj)
            //檢查商品名是否重覆，返回是promise所以這樣處理
            context.dispatch('checkProduct',obj.name).then(response => {
                if(response)
                {
                    alert('商品已存在')
                    return
                }
                //新增商品
                context.commit('ADD_PRODUCT_TO_LIST',obj)

            }, error => {
                console.log(error)
            })
        },
        //檢查商品是否存在
        checkProduct(context,value)
        {
            let ct = context.state.productList.filter((p) => p.name===value).length
            return (ct > 0)?true:false
        }
    },
    //mutations 可以直接作state
    //裡面func使用大寫
    mutations: {
        ADD_PRODUCT_TO_LIST(state,obj)
        {
            //console.log('加入商品',state,obj)
            state.productList.push(obj)
        },
        //建立預設商品資料()
        ADD_PRODUCT_EXAMPLE(state)
        {
            //先清空
            state.productList = []

            const obj = [
                {id:'001',name:"鬧鐘",price:100},
                {id:'002',name:"番茄",price:30},
                {id:'003',name:"香焦",price:80}
            ]
            
            this.commit('Product/ADD_PRODUCT_TO_LIST',obj[0])
            this.commit('Product/ADD_PRODUCT_TO_LIST',obj[1])
            this.commit('Product/ADD_PRODUCT_TO_LIST',obj[2])
        }
    },
    state: {
        //商品列表
        productList: []
    },
    getters: {}
}