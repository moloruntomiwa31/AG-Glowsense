<template>
    <header class="mainStyles items-center text-white min-w-full">
        <div class="logo flex items-center" @click="router.push('/')">
            <img class="w-10" src="../../assets/NoBackground.png" alt="">
            <h1 class="text-sm font-bold uppercase font-serif whitespace-nowrap">Ag-glowsense</h1>
        </div>
        <!-- mobile -->
        
        <!-- desktop view -->
        <nav class="hidden md:flex  justify-between items-center">
            <RouterLink class="linkStyles" active-class="active" to="/">Home</RouterLink>
            <RouterLink class="linkStyles" active-class="active" to="/about">About</RouterLink>
            <RouterLink class="linkStyles" active-class="active" to="/products">Products</RouterLink>
        </nav>
        <div class="flex space-x-4">
            <RouterLink to="/cart" class="flex flex-col relative hover:text-red-300 duration-150" active-class="active">
                <div>
                    <img src="../../assets/cart.svg" alt="">
                    <p>Cart</p>
                </div>
                <div class="bg-gray-400 rounded-full p-1 absolute top-[-15px] right-0 w-[25px] h-[25px] flex justify-center items-center">
                    <p class="text-red-200">{{ store.cartLength }}</p>
                </div>
            </RouterLink>
            <RouterLink to="/contacts" class="hover:text-red-300  duration-150" active-class="active">
                <img src="../../assets/contact.svg" alt="">
                <p>Contact</p>
            </RouterLink>
        </div>
    </header>
    <!-- mobile -->

    <div class="fixed bottom-0 w-full flex justify-around items-center p-4 bg-[#463333] text-white md:hidden z-index">
        <RouterLink class="grid place-items-center" 
        v-for="data in mobileNav" :key="data"
        active-class="activeTab"
        :to="data.link">
            <img :src="data.image" alt="" ref="svg">
            <h3>{{ data.text }}</h3>
        </RouterLink>
    </div>
</template>

<script setup>
import { RouterLink } from "vue-router"
import { ref } from "vue"
import { useRouter } from "vue-router"
import { useStore } from "../../store/cart";
import image1 from '../../assets/homeSvg/home.svg'
import image2 from '../../assets/homeSvg/about.svg'
import image3 from '../../assets/homeSvg/product.svg'

const store = useStore()
const router = useRouter()

router.afterEach(() => window.scrollTo({ top: 0, behavior: "smooth" }))

const mobileNav = ref([
    {
        image: image1,
        text: 'Home',
        link: '/'
    },
    {
        image: image2,
        text: 'About',
        link: '/about'
    },
    {
        image: image3,
        text: 'Products',
        link: '/products'
    }
])
</script>

<style scoped>
.active {
    color: pink;
}

.mobileActive {
    color: #900C3F;
}

header {
    background-color: #463333;
}

.z-index {
    z-index: 10000;
}
.activeTab {
    color: #ff9494;
    transition: 0.2s ease-in-out;
    transform: scale(0.95);
}
</style>