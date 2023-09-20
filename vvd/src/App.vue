<script setup>
import { ref,onMounted } from 'vue'

import HelloWorld from './components/HelloWorld.vue'
import GridBooks from './components/Grid.vue'

const searchQuery = ref('')
const gridColumns = ['name', 'power']
const gridData = ref([])

async function fetchGridData() {
  gridData.value = []
  const responce = await fetch('http://vvd.ru/grid-data.json')
  gridData.value = await responce.json()
}

onMounted(() => { fetchGridData() })


</script>

<template>
  <form id="search">
    Search <input name="query" v-model="searchQuery">
  </form>
  <GridBooks :data="gridData" :columns="gridColumns" :filter-key="searchQuery"></GridBooks>

  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>

</style>
