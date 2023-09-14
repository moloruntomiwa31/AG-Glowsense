<template>
    <h1 class="text-2xl font-bold mx-4 text-[#463333]">Welcome <span class="uppercase text-red-400"> {{ userData.user.email }}</span></h1>
    <main class="p-8" v-if="store.cartLength">
        <div>
            <button @click="router.back()"><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                    viewBox="0 0 48 48">
                    <mask id="ipSBack0">
                        <path fill="#fff" fill-rule="evenodd" stroke="#fff" stroke-linejoin="round" stroke-width="4"
                            d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
                            clip-rule="evenodd" />
                    </mask>
                    <path fill="#ff9494" d="M0 0h48v48H0z" mask="url(#ipSBack0)" />
                </svg></button>
        </div>
        <h1 class="text-[2rem] font-bold text-center my-4 text-[#463333]">AG Glowsense Basket</h1>
        <div class="grid space-y-6 place-items-center" v-if="store.cart">
            <CartTable />
            <div class="flex gap-4">
                <a :href="whatSappLink" target="_blank"
                    class="bg-red-400 p-2 rounded-md shadow-xl text-white w-[100px]" @click="checkOut">Checkout</a>
                <Button class="bg-black p-2 shadow-xl text-white w-[100px]" @click="clearCart">Clear Cart</Button>
            </div>
        </div>
    </main>
    <div v-else class="min-h-[80vh] flex flex-col gap-4 justify-center items-center">
        <img src="../assets/cart-cross-outline.svg" alt="" class="w-[20%]">
        <h1 class="capitalize text-[3rem] text-[#463333] text-center">Cart is Empty</h1>
        <div>
            <Button class="bg-red-300 p-2 shadow" @click="router.back()">Go Back</Button>
        </div>
    </div>
</template>

<script setup>
import CartTable from "../components/cart/CartTable.vue";
import Button from "../components/fixed/Button.vue"
import { useStore } from '../store/cart';
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router'
import { useToast } from '../store/toast';

const router = useRouter()
const toast = useToast()

//store
const store = useStore()
const userData = useUserStore()


//clearCart
const clearCart = () => {
    store.$reset()
    store.deleteAllItems()
}

//create text for whatsapp link
const cartItems = store.grouped
const itemNames = Object.keys(cartItems)
const whatSappLink = `https://wa.me/+2348113005790?text=Good Day,\n%20I'm%20[YOUR_NAME],%20I%20want%20to%20purchase%20the%20following%20items:%20${itemNames.join(",")}`

//checkout
const checkOut = () => {
    toast.addToast("Checked Out!", "success")
}

</script>

<style scoped></style>