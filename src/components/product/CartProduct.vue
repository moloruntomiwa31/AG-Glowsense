<template>
    <div v-if="filteredProducts.length > 0"
        class="p-5 grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 productWrapper">
        <div class="rounded-md text-[#EDEDED] md:max-w-0 md:w-[80%] product p-4 gap-4 flex flex-col items-start justify-around shadow md:space-y-0 bg-[#6C4A4A]"
            v-for="product in filteredProducts">
            <img :src="product.image" alt="Product Image" class="rounded-md product-image" width="300" height="400">
            <h3 class="capitalize font-bold text-lg">{{ product.name }}</h3>
            <p class="font-bold">Price - ₦{{ product.price }}</p>
            <Star />
            <Button @click="checkProductdetails(product.id)"
                class="capitalize text-lg text-white bg-[#C89595] p-2 hover:bg-red-400 duration-150 whitespace-nowrap outline-none">
                Check Details
            </Button>
        </div>
    </div>
    <div v-else class="min-h-[80vh] w-full">
        <h1 class="text-[3rem] text-center">No Results Found</h1>
    </div>
</template>

<script setup>
import Star from '../home/Star.vue';
import Button from '../fixed/Button.vue';
import { useRouter } from 'vue-router';
import { useUserStore } from '../../store/user';
import { useToast } from '../../store/toast';

const router = useRouter()
const userData = useUserStore()
const toast = useToast()

defineProps(['filteredProducts'])

const checkProductdetails = (id) => {
    if (userData.user) {
        router.push(`/products/${id}`)
        return
    }
    toast.addToast("User has to be authenticated!", "error")
    router.push("/signup")
}
</script>

<style scoped>
.productWrapper {
    grid-gap: 20px;
    justify-content: center;
    align-items: center;
    min-width: 100%;
}

.product {
    max-height: 500px;
    height: 100%;
    margin-bottom: 0.4rem;
    max-width: 300px;
}

.product-image {
    width: 100%;
    height: 50%;
    object-fit: contain;
}
</style>