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
                <!-- <p><span class="text-[1.5rem] uppercase leading-8 font-semibold">In Stock</span> {{ productData.quantity }}
                </p> -->
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
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g fill="#ff9494">
                                <path
                                    d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.037.136l.002.007l.874 3.324l.012-.017c.042.045.082.093.121.143c.901 1.154.472 2.87-.386 6.301c-.078.313-.15.603-.22.873l-2.477-2.973l1.83-2.685l-.505-1.922l-2.324 3.409L12.976 9h1.34c1.893 0 3.28 0 4.298.177l-.549-2.088c-.29-1.064-.393-1.395-.57-1.632a1.75 1.75 0 0 0-.767-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.279.568-.57 1.632l-.548 2.088C6.404 9 7.791 9 9.685 9h1.339L7.56 13.157L5.236 9.748L4.73 11.67l1.83 2.685l-2.477 2.973c-.07-.27-.142-.56-.22-.873c-.858-3.431-1.287-5.147-.386-6.301c.039-.05.08-.098.121-.143l.012.017l.874-3.324l.002-.007l.037-.136c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222Z" />
                                <path
                                    d="M4.602 19.05c.233.593.5 1.007.894 1.315C6.31 21 7.435 21 9.685 21h1.407L7.44 15.644l-2.838 3.405ZM12.908 21h1.407c2.25 0 3.375 0 4.189-.635c.394-.308.661-.722.894-1.316l-2.838-3.405L12.908 21ZM12 19.669l-3.561-5.224L12 10.172l3.561 4.273L12 19.67Z" />
                            </g>
                        </svg>
                        <Button @click="addToCart(count)" class="whitespace-nowrap">Add To
                            Basket</Button>
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