<script setup>
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
    id: String,
    name: String,
    productOptions: Array,
})

const modelProductOption = ref(props.productOptions[0].optionId)
const imgUrl = computed(() =>
    props.productOptions.find((option) => option.optionId == modelProductOption.value).imgUrl
)

</script>

<template>
    <h1>
        {{ name }}
    </h1>

    <img :src="imgUrl" :alt="name" class="product-img">

    <span v-for="productOption in productOptions" :key="productOption.optionId" class="product-radio">
        <input type="radio" :id="productOption.optionId" :value="productOption.optionId" v-model="modelProductOption" />
        <label :for="productOption.optionId">{{ productOption.colorName }}</label>
    </span>

    <br><br><br>
    Selected optionId: {{ modelProductOption }}

    <!-- 
    v-for="({ optionId, colorName }, idx) in productOptionColors"
    :checked="idx === 0 ? true : false"
    -->
</template>

<style scoped>
.product-img {
    max-height: 256px;
    max-width: 256px;
}

.product-radio {
    margin-right: 20px;
}
</style>
