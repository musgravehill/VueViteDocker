<script setup>
import { ref, onMounted } from 'vue'
import { useFetch } from './components/fetch.js'
import Product from './components/Product.vue'

//===composable, reusability=== 
//const url = ref('/products.json')
//const { data, error } = await useFetch(url)
//const { data, error } = useFetch(() => `/posts/${someId}`)
const { data: products, error } = useFetch('/products.json')

function onEventAddToCart(payload) {
  console.log(payload)
}

</script>

<template>
  12345
  <div class="products">
    <div v-for="product in products">
      <Product @event-add-to-cart="onEventAddToCart" :id="product.productId" :name="product.productName" :options="product.options"></Product>
    </div>
  </div>
</template>

<style scoped>
.products {
  display: flex;
}
</style>
