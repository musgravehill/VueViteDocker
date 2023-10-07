<script setup>
import { ref, onMounted, computed } from 'vue'
import { useFetch } from './components/fetch.js'
import Product from './components/Product.vue'

//===composable, reusability=== 
//const url = ref('/products.json')
//const { data, error } = await useFetch(url)
//const { data, error } = useFetch(() => `/posts/${someId}`)
const { data: products, error } = useFetch('/products.json')



function onEventAddToCart(payload) {
  addToCart(payload.id, payload.optionId)
}

const cartProducts = ref([])

const cartTotalQty = computed(() => {
  return cartProducts.value.reduce((totalQty, item) => (totalQty + item.quantity), 0)
})

function addToCart(id, optionId) {
  let productInCart = cartProducts.value.find((item) => {
    return (item.id === id && item.optionId === optionId)
  });
  if (productInCart) {
    productInCart.quantity += 1;
    return;
  }
  cartProducts.value.push({ id: id, optionId: optionId, quantity: 1 });
}

</script>

<template>
  <div class="cart-total-qty">
    Cart qty: {{ cartTotalQty }}
  </div>
  <div class="cart-data">
    {{ cartProducts }}
  </div>
  <div class="products">
    <div v-for="product in products">
      <Product @event-add-to-cart="onEventAddToCart" :id="product.productId" :name="product.productName" :options="product.options"></Product>
    </div>
  </div>
</template>

<style scoped>
.cart-total-qty {
  font-size: 22px;
  color: blueviolet;
  font-weight: bold;
}

.cart-data {
  font-size: 10px;
}

.products {
  display: flex;
}
</style>
