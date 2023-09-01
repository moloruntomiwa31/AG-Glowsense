<template>
    <main class="min-h-[80vh] md:min-h-[50vh]">
        <div class="py-2 px-4 md:p-6 md:py-4">
            <button @click="router.back()"><svg xmlns="http://www.w3.org/2000/svg"
                    width="32" height="32" viewBox="0 0 48 48">
                    <mask id="ipSBack0">
                        <path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" stroke-width="4"
                            d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
                            clip-rule="evenodd" />
                    </mask>
                    <path fill="#ff9494" d="M0 0h48v48H0z" mask="url(#ipSBack0)" />
                </svg></button>
        </div>
        <div v-if="productData" class="flex flex-col-reverse  gap-6 md:flex-row items-center p-4 justify-around">
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
                            class="text-xl border-2 p-1 border-red-300">-</Button>
                        <input v-model="quantity" type="number" min="0" class="bg-transparent outline-none text-center w-1/4"
                            readonly>
                        <Button @click="increaseQty"
                            class="text-xl border-2 p-1 border-red-300">+</Button>
                    </div>

                    <!-- addtocart -->
                    <div @click="addToCart(quantity)" class="flex items-center p-[0.7rem] bg-[#463333]">
                        <img src="../assets/cart.svg" alt="Product Image" class="w-[20%]">
                        <Button class="whitespace-nowrap">Add To Cart</Button>
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
const quantity = ref(0)
const increaseQty = () => { quantity.value++ }
const decreaseQty = () => { quantity.value > 0 ? quantity.value-- : null }

const { id } = route.params
import data from '../../data/db';
const productData = ref(null)

onMounted(() => {
    productData.value = data.find(d => d.id == parseInt(id))
    store.idOfPreviousProductPage = id
})

import { usePush } from 'notivue'

const push = usePush()

const addToCart = async (quantity) => {
    if (quantity < 1) {
        push.error("Add Item Quantity!")
        return
    }
    await store.addToCart(productData.value.id, quantity)
    push.success('Successfully added to cart!')
};
</script>

<style scoped></style>