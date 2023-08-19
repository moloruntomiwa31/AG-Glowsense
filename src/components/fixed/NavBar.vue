<template>
    <header class="mainStyles items-center text-white min-w-full">
        <div class="logo flex items-center">
            <img class="w-10" src="../../assets/NoBackground.png" alt="">
            <h1 class="text-sm font-bold uppercase font-serif whitespace-nowrap">Ag-glowsense</h1>
        </div>
        <!-- mobile -->
        <div class="md:hidden flex xs:space-x-1 sm:space-x-4 items-center">
            <button @click="router.push('/cart')" class="relative">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="#D14D72">
                        <path
                            d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.037.136l.002.007l.874 3.324l.012-.017c.042.045.082.093.121.143c.901 1.154.472 2.87-.386 6.301c-.078.313-.15.603-.22.873l-2.477-2.973l1.83-2.685l-.505-1.922l-2.324 3.409L12.976 9h1.34c1.893 0 3.28 0 4.298.177l-.549-2.088c-.29-1.064-.393-1.395-.57-1.632a1.75 1.75 0 0 0-.767-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.279.568-.57 1.632l-.548 2.088C6.404 9 7.791 9 9.685 9h1.339L7.56 13.157L5.236 9.748L4.73 11.67l1.83 2.685l-2.477 2.973c-.07-.27-.142-.56-.22-.873c-.858-3.431-1.287-5.147-.386-6.301c.039-.05.08-.098.121-.143l.012.017l.874-3.324l.002-.007l.037-.136c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222Z" />
                        <path
                            d="M4.602 19.05c.233.593.5 1.007.894 1.315C6.31 21 7.435 21 9.685 21h1.407L7.44 15.644l-2.838 3.405ZM12.908 21h1.407c2.25 0 3.375 0 4.189-.635c.394-.308.661-.722.894-1.316l-2.838-3.405L12.908 21ZM12 19.669l-3.561-5.224L12 10.172l3.561 4.273L12 19.67Z" />
                    </g>
                </svg>
                <div
                    class="absolute top-[-20px] right-3 cartItems bg-gray-400 p-2 rounded-full w-[30px] h-[30px] flex items-center justify-center">
                    <p class="text-red-200">{{ store.cartLength }}</p>
                </div>
            </button>
            <div class="grid place-items-center mt-[1.5rem]">
                <button @click="router.push('/contacts')">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                        <path fill="#D14D72" fill-rule="evenodd"
                            d="M6 20.5C6 12.492 12.492 6 20.5 6h7C35.508 6 42 12.492 42 20.5S35.508 35 27.5 35h-.7v7S6 38.5 6 20.5Zm21.691-8.018c1.03.684 1.807 1.793 1.807 3.28c0 1.578-.637 2.738-1.668 3.448a4.524 4.524 0 0 1-1.33.614v1.532a1.5 1.5 0 1 1-3 0v-2.797a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.228-.322a.699.699 0 0 0 .24-.272c.06-.12.13-.334.13-.707c0-.313-.123-.552-.468-.782c-.392-.26-1.022-.452-1.779-.476c-.748-.024-1.475.122-2.01.381c-.536.26-.732.552-.788.767a1.5 1.5 0 1 1-2.905-.746c.344-1.341 1.348-2.217 2.385-2.72c1.04-.505 2.263-.718 3.414-.681c1.142.036 2.362.324 3.344.978ZM25 29a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
                            clip-rule="evenodd" />
                    </svg>
                </button>
                <p>Contact</p>
            </div>
        </div>
        <!-- desktop view -->
        <nav class="hidden md:flex  justify-between items-center">
            <RouterLink class="linkStyles" active-class="active" to="/">Home</RouterLink>
            <RouterLink class="linkStyles" active-class="active" to="/about">About</RouterLink>
            <RouterLink class="linkStyles" active-class="active" to="/products">Products</RouterLink>
        </nav>
        <div class="hidden md:block space-x-4">
            <button @click="router.push('/cart')" class="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <g fill="#ff9494">
                        <path
                            d="M8.418 3.25c.28-.59.884-1 1.582-1h4c.698 0 1.301.41 1.582 1c.683.006 1.216.037 1.692.223a3.25 3.25 0 0 1 1.426 1.09c.367.494.54 1.127.776 1.998l.037.136l.002.007l.874 3.324l.012-.017c.042.045.082.093.121.143c.901 1.154.472 2.87-.386 6.301c-.078.313-.15.603-.22.873l-2.477-2.973l1.83-2.685l-.505-1.922l-2.324 3.409L12.976 9h1.34c1.893 0 3.28 0 4.298.177l-.549-2.088c-.29-1.064-.393-1.395-.57-1.632a1.75 1.75 0 0 0-.767-.587c-.22-.086-.486-.111-1.148-.118A1.75 1.75 0 0 1 14 5.75h-4a1.75 1.75 0 0 1-1.58-.998c-.662.007-.928.032-1.148.118a1.75 1.75 0 0 0-.768.587c-.176.237-.279.568-.57 1.632l-.548 2.088C6.404 9 7.791 9 9.685 9h1.339L7.56 13.157L5.236 9.748L4.73 11.67l1.83 2.685l-2.477 2.973c-.07-.27-.142-.56-.22-.873c-.858-3.431-1.287-5.147-.386-6.301c.039-.05.08-.098.121-.143l.012.017l.874-3.324l.002-.007l.037-.136c.237-.871.41-1.505.776-1.999a3.25 3.25 0 0 1 1.426-1.089c.476-.186 1.008-.217 1.692-.222Z" />
                        <path
                            d="M4.602 19.05c.233.593.5 1.007.894 1.315C6.31 21 7.435 21 9.685 21h1.407L7.44 15.644l-2.838 3.405ZM12.908 21h1.407c2.25 0 3.375 0 4.189-.635c.394-.308.661-.722.894-1.316l-2.838-3.405L12.908 21ZM12 19.669l-3.561-5.224L12 10.172l3.561 4.273L12 19.67Z" />
                    </g>
                </svg>
                <div
                    class="absolute top-[-20px] right-3 cartItems bg-gray-400 p-2 rounded-full w-[30px] h-[30px] flex items-center justify-center">
                    <p class="text-red-200">{{ store.cartLength }}</p>
                </div>
                <p class="hide">Cart</p>
            </button>
            <button @click="router.push('/contacts')" class="icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 48 48">
                    <path fill="#ff9494" fill-rule="evenodd"
                        d="M6 20.5C6 12.492 12.492 6 20.5 6h7C35.508 6 42 12.492 42 20.5S35.508 35 27.5 35h-.7v7S6 38.5 6 20.5Zm21.691-8.018c1.03.684 1.807 1.793 1.807 3.28c0 1.578-.637 2.738-1.668 3.448a4.524 4.524 0 0 1-1.33.614v1.532a1.5 1.5 0 1 1-3 0v-2.797a1.5 1.5 0 0 1 1.4-1.497c.554-.037.974-.147 1.228-.322a.699.699 0 0 0 .24-.272c.06-.12.13-.334.13-.707c0-.313-.123-.552-.468-.782c-.392-.26-1.022-.452-1.779-.476c-.748-.024-1.475.122-2.01.381c-.536.26-.732.552-.788.767a1.5 1.5 0 1 1-2.905-.746c.344-1.341 1.348-2.217 2.385-2.72c1.04-.505 2.263-.718 3.414-.681c1.142.036 2.362.324 3.344.978ZM25 29a2 2 0 1 0 0-4a2 2 0 0 0 0 4Z"
                        clip-rule="evenodd" />
                </svg>
                <p class="hide">Contact</p>
            </button>
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
.hide {
    position: absolute;
    color: #fff;
    opacity: 0;
    transition: opacity 0.3s;
}

.icons {
    position: relative;
}

.icons svg:hover+.hide {
    opacity: 1;
}

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