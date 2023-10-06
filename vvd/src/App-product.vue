<script setup>
import { ref, onMounted } from 'vue'
import Product from './components/Product.vue'

const products = ref([])
async function fetchProducts() {
  products.value = []
  const responce = await fetch('/products.json')
  products.value = await responce.json()
}

onMounted(() => { fetchProducts() })

</script>

<template>
  <div style="display:flex">
    <div v-for="product in products">
      <Product :id="product.productId" :name="product.productName" :options="product.options"></Product>
    </div>
  </div>
</template>

<style scoped></style>
