<script setup>
import { ref, computed, defineProps } from 'vue'

const props = defineProps({
    id: String,
    name: String,
    options: Array,
})

const modelOptionId = ref(props.options[0].optionId)
const imgUrl = computed(() =>
    props.options.find((option) => option.optionId == modelOptionId.value).imgUrl
)

</script>

<template>
    <div class="product-wrapper">
        <h1>
            {{ name }}
        </h1>

        <img :src="imgUrl" :alt="name" class="product-img">

        <span v-for="option in options" :key="option.optionId" class="product-radio">
            <input type="radio" :id="option.optionId" :value="option.optionId" v-model="modelOptionId" />
            <label :for="option.optionId">{{ option.colorName }}</label>
        </span>

        <br><br><br>
        Selected optionId: {{ modelOptionId }}

        <!-- 
    v-for="({ optionId, colorName }, idx) in optionColors"
    :checked="idx === 0 ? true : false"
    -->
    </div>
</template>

<style scoped>
.product-wrapper {
    box-shadow: 6px 4px 5px 0px rgba(0, 0, 0, 0.2);
    -webkit-box-shadow: 6px 4px 5px 0px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 6px 4px 5px 0px rgba(0, 0, 0, 0.2);
    padding: 10px;
    margin: 5px;
}

.product-img {
    height: 256px;
    max-width: 256px;
}

.product-radio {
    margin-right: 20px;
}
</style>
