<script setup>
import { ref, onMounted } from 'vue'
import Product from './components/Product.vue'

const products = ref([])
async function fetchProducts() {
  products.value = []
  const responce = await fetch('/products.json')
  products.value = await responce.json()
}

onMounted(() => { 
  fetchProducts() 
})

function onEventAddToCart(payload){
 console.log(payload)
}

</script>

<template>
  <div class="products">
    <div v-for="product in products">
      <Product @EventAddToCart="onEventAddToCart" :id="product.productId" :name="product.productName" :options="product.options"></Product>
    </div>
  </div>
</template>

<style scoped>
.products{
  display:flex;
}
</style>
