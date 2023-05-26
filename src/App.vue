<template>
  <div id="app">
    <ProductList/>
    <CartList/>
  </div>
</template>

<script>
//載入components
import ProductList from './components/ProductList'
import CartList from './components/CartList'

export default {
  name: 'App',
  components: {
    ProductList,
    CartList
  }
}
</script>

<style>

</style>
