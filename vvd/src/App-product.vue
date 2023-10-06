<script setup>
import { ref, onMounted } from 'vue'
import Product from './components/Product.vue'

// TODO fetch this data 
const productOptionColors = ref(
  [
    { optionId: '8c6de7c9-542d-4ada-ab10-68a4446f9548', colorName: 'red' },
    { optionId: 'dc50f6d1-9c5a-4542-a92a-5686eb6c7a11', colorName: 'green' },
  ]
)

const productId = ref('fe4d67b5-3ccb-4bb1-9b85-634c8badaa15')

const productName = ref('Fishing reel for big game')

</script>

<template>
  <Product :id="productId" :name="productName" :productOptionColors="productOptionColors"></Product>
</template>

<style scoped></style>
