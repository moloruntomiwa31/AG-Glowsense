<template>
    <PreLoader v-if="isLoading" />
    <main class="space-y-8 overflow-hidden mt-8" v-else>
        <!-- header -->
        <section class="flex flex-col md:flex-row p-8 md:gap-8 md:p-12 lg:min-h-[80vh]">
            <div class="md:w-2/5 md:flex md:items-center min-h-full" data-aos="fade-right">
                <img src="../assets/products/skinRepairOil.jpg" alt="Product Image" class="shadow rounded-md">
            </div>
            <div class="md:w-1/2 flex items-center flex-col justify-center" data-aos="fade-left">
                <h1 class="text-[3rem] font-bold title text-left md:text-center w-full">Who Are We?</h1>
                <p class="md:text-center text-lg"><span class="font-bold text-xl">Ag-glowsense</span> is a new skincare
                    company that develops and sells its own line of skin care products. We
                    believe that having a skincare routine is one of the most important daily regimens a person can have.
                    Therefore, we offer an extensive line of organic products to help our customers keep their skin healthy
                    and beautiful. These products include cleansers, exfoliators, moisturizers, and face wash. </p>
            </div>
        </section>
        <!-- feature -->
        <section class="px-8 flex flex-col md:flex-row justify-around items-center space-y-12">
            <div class="md:w-[60%] lg:w-2/5 space-y-6 md:text-center" data-aos="fade-up">
                <h1 class="text-5xl md:text-[4rem] text-[#ff9494]">Take Care Of Your Skin</h1>
                <p class="text-lg">Skin care involves more than just cleaning it and using lotion. It also involves having a
                    healthy diet,
                    getting enough sleep and exercise, and managing stress levels. Your unique skin type may also determine
                    any additional treatments as well, such as using exfoliating scrubs or moisturizing masks.
                </p>
                <div class="flex md:justify-center">
                    <Button class="shadow-lg bg-red-400 p-4 text-white hover:border-red-800 duration-300 hover:border-2"
                        @click="router.push('/products')">Check Products</Button>
                </div>
            </div>
            <div class="md:w-1/2 relative overflow-hidden" data-aos="fade-up">
                <img src="../assets/aboutPage.jpg" alt="Product Image" class="duration-300 rounded-md">
            </div>
        </section>

        <!-- visions -->
        <section id="visions">
            <div class="header border-2 relative border-gray-400 mt-20">
                <h1
                    class="absoluteCenter bg-white px-4 md:px-8 py-4 text-2xl text-red-500 uppercase font-medium rounded-2xl whitespace-nowrap">
                    Core Values</h1>
            </div>
            <div class="flex flex-col-reverse md:flex-row items-center gap-4 p-8">
                <div class="md:w-1/2" data-aos="fade-up">
                    <img src="../assets/visions.avif" alt="image" class="rounded-md">
                </div>
                <div class="flex flex-col items-center gap-2" data-aos="fade-up">
                    <div v-for="value in values" class="flex gap-2 mt-2">
                        <div class="p-1 rounded-full w-[15%] md:w-fit">
                            <img src="../assets/check.svg" alt="check-image" class="w-full">
                        </div>
                        <p class="text-md">{{ value }} </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- ceo -->
        <section>
            <div class="header border-2 relative border-gray-400 mt-20">
                <h1
                    class="absoluteCenter bg-white px-4 md:px-8 py-4 text-2xl text-red-500 uppercase font-medium rounded-2xl whitespace-nowrap">
                    Meet the Ceo</h1>
            </div>
            <div
                class="flex flex-col md:flex-row-reverse justify-center items-center p-8 space-y-6 md:gap-6 min-h-[50vh] lg:w-3/4 lg:relative">
                <div class="md:w-1/4  mt-4 items-center lg:absolute right-20 top-0" data-aos="fade-up">
                    <img src="../assets/tosin.jpg" alt="Ceo's Image"
                        class="shadow lg:absolute left-4 rounded-full w-[200px] h-[200px] object-contain bg-gray-100">
                    <img src="../assets/tosin2.jpg" alt="Ceo's Image"
                        class="shadow hidden lg:block lg:absolute right-[-2rem] top-[6rem] rounded-full w-[200px] h-[200px] object-contain bg-gray-100">
                </div>
                <div class="md:w-1/2 lg:w-[40%]" data-aos="fade-up">
                    <div class="space-y-4 text-lg">
                        <p>Over the years, she has developed intensive, ambitious business strategies, short-term goals, and
                            long-term objectives. She is certified in Business Administration and Industrial Relations.</p>
                        <div class="font-bold">
                            <h4 class="text-lg">Aderibigbe Adewunmi OluwaTosin</h4>
                            <p>ND, BSC & MSC</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </main>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { useRouter } from 'vue-router'
import PreLoader from "../components/fixed/PreLoader.vue";
import Button from "../components/fixed/Button.vue";

const router = useRouter()
const isLoading = ref(true)
const values = ref([
    "We only use ingrediens that has a true function for your skin and for the products combined. Nothing else or any harsh chemicals has been added.",
    "Our Clean skin care is pure and simple made for our customers who also believe in skincare made safe and to be gentle to your skin.",
    "We emphasize high-quality ingredients that are time-tested, safe, efficacious and vegan-friendly to achieve proven results."
])

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 2000)
})
</script>

<style scoped>
.title {
    color: transparent;
    -webkit-text-stroke: 2px #ff9494;
    -webkit-background-clip: text;
}
</style>

