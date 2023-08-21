<template>
    <main class="p-8" v-if="store.cartLength">
        <div>
            <Button class="bg-red-300 p-2 shadow" @click="router.push(`/products/${store.idOfPreviousProductPage}`)">Go
                Back</Button>
        </div>
        <h1 class="text-[2rem] font-bold text-center my-4 text-[#463333]">AG Glowsense Basket</h1>
        <div class="grid space-y-6 place-items-center" v-if="store.cart">
            <CartTable />
            <div class="flex gap-4">
                <a href="https://wa.me/+2348113005790?text=I%20want%20to%20purchase%20some%20products" target="_blank"
                    class="bg-red-400 p-2 shadow-xl text-white w-[100px]">Checkout</a>
                <Button class="bg-black p-2 shadow-xl text-white w-[100px]" @click="store.$reset()">Clear Cart</Button>
            </div>
        </div>
    </main>
    <div v-else class="min-h-[100vh] flex flex-col gap-4 justify-center items-center">
        <img src="../assets/cart-cross-outline.svg" alt="" class="w-[20%]">
        <h1 class="capitalize text-[3rem] text-[#463333] text-center">Cart is Empty</h1>
        <div>
            <Button class="bg-red-300 p-2 shadow" @click="router.push(`/products`)">Go Back</Button>
        </div>
    </div>
</template>

<script setup>
import CartTable from "../components/cart/CartTable.vue";
import Button from "../components/fixed/Button.vue"
import { useStore } from '../store/cart';
import { useRouter } from 'vue-router'
const store = useStore()
const router = useRouter()

</script>

<style scoped>
</style>