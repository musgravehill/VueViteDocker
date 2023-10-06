<script setup>
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
    id: String,
    name: String,
    productOptionColors: Array,
})

const productOptionColor = ref(props.productOptionColors[0].optionId)

</script>

<template>
    <h1>
        {{ name }}
    </h1>

    {{ productOptionColor }}

    <span v-for="({ optionId, colorName }, idx) in productOptionColors" :key="optionId">
        <input type="radio" :id="optionId" :value="optionId" v-model="productOptionColor" />
        <label :for="optionId">{{ colorName }}</label>
    </span>

    <!-- 
    v-for="({ optionId, colorName }, idx) in productOptionColors"
    :checked="idx === 0 ? true : false"
    -->
</template>

<style scoped>
.product-img {}
</style>
