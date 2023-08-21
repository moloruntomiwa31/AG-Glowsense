<template>
    <main class="min-h-[80vh] md:min-h-[50vh]">
        <div class="py-2 px-6 md:p-6 md:py-4">
            <Button class="bg-red-300 p-2 shadow" @click="router.push('/products')">Go back</Button>
        </div>
        <div v-if="productData" class="flex flex-col-reverse  gap-6 md:flex-row items-center p-6 justify-around">
            <!-- image -->
            <div class="md:w-1/4 lg:w-[20%]">
                <img :src="productData.image" alt="">
            </div>
            <!-- details -->
            <div class="space-y-2 md:w-[60%]">
                <h1 class="capitalize font-bold text-[2rem] text-[#463333]">{{ productData.name }}</h1>
                <p class="text-xl">{{ productData.desc }}</p>
                <h4 class="capitalize font-bold text-2xl">Ingredients</h4>
                <p class="text-xl">{{ productData.ingredients }}</p>
                <h4 class="capitalize font-bold text-2xl">How to use</h4>
                <p class="text-xl">{{ productData.usage }}</p>
                <h4 class="capitalize font-bold text-2xl">Size</h4>
                <p class="text-xl">{{ productData.size }}</p>
                <h4 class="capitalize font-bold text-2xl">Price per bottle</h4>
                <p class="text-xl">₦{{ productData.price }}</p>

                <!-- order -->
                <div class="flex items-center gap-4 text-white">
                    <div class="bg-[#463333] p-2 flex items-center justify-around md:w-[50%]">
                        <Button @click="decreaseQty"
                            class="text-xl bg-gray-500 w-[30px] h-[30px] flex justify-center items-center p-2 rounded-full shadow-sm">-</Button>
                        <input v-model="count" type="number" min="0" class="bg-transparent outline-none text-center w-1/4"
                            readonly>
                            <Button @click="increaseQty"
                            class="text-xl bg-gray-500 w-[30px] h-[30px] flex justify-center items-center p-2 rounded-full shadow-sm">+</Button>
                    </div>

                    <!-- addtocart -->
                    <div class="flex items-center p-[0.7rem] bg-[#463333]">
                        <img src="../assets/cart.svg" alt="">
                        <Button @click="addToCart(count)" class="whitespace-nowrap">Add To
                            Cart</Button>
                    </div>

                </div>

            </div>
        </div>
        <div v-else class="min-h-[80vh] flex justify-center items-center">
            <h1 class="capitalize text-[3rem] text-[#463333]">No Data</h1>
        </div>
    </main>
</template>

<script setup>
import Button from '../components/fixed/Button.vue';
import { useRoute, useRouter } from 'vue-router'
import { onMounted, ref } from 'vue'
import { useStore } from '../store/cart'
const store = useStore()

const route = useRoute()
const router = useRouter()
const count = ref(0)
const increaseQty = () => { count.value++ }
const decreaseQty = () => { count.value > 0 ? count.value-- : null }

const { id } = route.params
import data from '../../data/db';
const productData = ref(null)

onMounted(() => {
    productData.value = data.find(d => d.id == parseInt(id))
    store.idOfPreviousProductPage = id
})

import { usePush } from 'notivue'

const push = usePush()

const addToCart = (count) => {
    if (count < 1) {
        push.error("Add Item Quantity!")
        return
    }
    store.addToCart(productData.value.id, count)
    push.success('Successfully added to cart!')
};
</script>

<style scoped></style>