<template>
    <PreLoader v-if="isLoading" />
    <main class="space-y-8 md:space-y-0 md:p-2" v-else>
        <div class="w-full my-4">
            <h1 class="text-[2rem] font-bold capitalize text-center text-[#463333]">Some of our Products</h1>
        </div>
        <!-- search box -->
        <div class="flex flex-col md:flex-row gap-4 justify-center items-center md:justify-between md:px-8">
            <!-- filter -->
            <div class="flex items-center gap-4">
                <h3 class="font-bold">Filter By</h3>
                <ProductFilter @optionSelected="updateOption"/>
            </div>
            <!-- input -->
            <div class="flex items-center md:justify-end gap-2">
                <Input v-model="searchProduct" type="text"
                    class="border-2 border-red-400 p-2 md:p-4 outline-none placeholder:text-black"
                    :placeholder="searchPlaceholder"></Input>
            </div>
        </div>

        <!-- products -->
        <CartProduct :filteredProducts="filteredProducts"/>
    </main>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue'
import PreLoader from '../components/fixed/PreLoader.vue';
import CartProduct from '../components/product/CartProduct.vue';
import Input from '../components/fixed/Input.vue';
import { useProductStore } from '../store/productStore';
import ProductFilter from '../components/product/ProductFilter.vue';


const productStore = useProductStore()

const isLoading = ref(true)

const searchProduct = ref('')
const searchPlaceholder = ref("Search Products...")
const selectOption = ref('all')

const updateOption = (option) => {
    selectOption.value = option
}

const filteredProducts = computed(() => {
    if (searchProduct.value || selectOption.value == 'all') {
        return productStore.products.filter((d) => d.name.toLowerCase().includes(searchProduct.value.toLowerCase()))
    }
    if (selectOption.value !== 'all') {
        return productStore.products.filter((d) => d.product_type.toLowerCase() == selectOption.value.toLowerCase())
    }
})


onMounted(() => {
    setTimeout(() => isLoading.value = false, 2000)
})
</script>

<style scoped>
</style>
  