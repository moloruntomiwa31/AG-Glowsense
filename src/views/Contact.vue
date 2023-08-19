<template>
    <PreLoader v-if="isLoading" />
    <main class="space-y-8" v-else>
        <section
            class="relative flex flex-col-reverse md:flex-row items-center justify-around p-8 space-y-8 gap-8 md:space-y-0 min-h-[50vh] lg:min-h-[100vh]">
            <div class="md:w-1/2 mt-4">
                <img src="../assets/products/organicBodyButter.jpg" alt="" class="rounded-xl">
            </div>
            <div class="flex-col flex md:w-[600px] space-y-4 text-center items-center">
                <h1 class="text-4xl font-bold text-red-400">GOT A SKINCARE QUESTION?</h1>
                <p class="text-2xl md:text-[1.5rem]">Feel free to reach out to us via social media, our Whatsapp runs 24/7.
                    You can use the links below to find us across the web.</p>
                <Button @click="scrollTosection('faq')"
                    class="bg-red-400 p-4 w-fit text-white hover:bg-red-500 shadow-md">Check our Faqs</button>
            </div>
        </section>
        <section id="faq">
            <h1 class="text-4xl text-center font-sans">Frequently Asked Questions</h1>
            <div class="grid place-items-center space-y-6 p-6">
                <div id="question-wrapper" v-for="faq in faqs" :key="faq"
                    class="w-full md:w-1/2 p-2 rounded-lg cursor-pointer" @click="faq.open = !faq.open">
                    <div id="question" class="flex items-center justify-between">
                        <p class="font-bold text-lg">{{ faq.question }}</p>
                        <svg v-if='faq.open' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g transform="rotate(90 12 12)">
                                <path fill="#c89595" fill-rule="evenodd"
                                    d="m16.75 17l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5l-8.502 5.668a1 1 0 0 0 0 1.664L15.75 18.5a.901.901 0 1 0 1-1.5z" />
                            </g>
                        </svg>
                        <svg v-else xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <g transform="rotate(-90 12 12)">
                                <path fill="#c89595" fill-rule="evenodd"
                                    d="m16.75 17l-7.5-5l7.5-5a.901.901 0 1 0-1-1.5l-8.502 5.668a1 1 0 0 0 0 1.664L15.75 18.5a.901.901 0 1 0 1-1.5z" />
                            </g>
                        </svg>
                    </div>
                    <div id="answer" :class="faq.open ? 'block' : 'hidden'">
                        <p>{{ faq.answer }}</p>
                    </div>
                </div>
            </div>
            <div class="grid place-items-center my-2">
                <a href="https://wa.me/+2348113005790" target="_blank"
                    class="capitalize p-4 bg-red-400 shadow-md hover:bg-red-500 text-white">Reach Us for More</a>
            </div>
        </section>
    </main>
</template>

<script setup>
import PreLoader from '../components/fixed/PreLoader.vue';
import Button from '../components/fixed/Button.vue';
import useScroll from '../scroll';
import { ref, onMounted } from 'vue'
const { scrollTosection } = useScroll()
const isLoading = ref(true)
const faqs = ref([
    {
        question: 'What skin type do I have?',
        answer: 'There are a few different skin types—normal, dry, oily, combination, and sensitive. Knowing what skin type you have is important, as you can then choose the best products and treatments to maintain healthy, glowing skin.',
        open: false
    },
    {
        question: 'What skin type do I have?',
        answer: 'There are many safe products to use while pregnant. When considering a product, be sure the ingredients don’t include retinols, benzoyl peroxide, salicylic acid, and hydroquinone, to name a few.',
        open: false
    },
    {
        question: 'How much skincare is too much?',
        answer: 'Skincare is important, but you can overdo it. The perfect balance of products should leave your skin feeling hydrated and soft to the touch. It shouldn’t feel tight, dry, or “squeaky clean.” We recommend discussing how much products to use, with your medical provider/aesthetician.',
        open: false
    },
    {
        question: 'How long before I start to see results?',
        answer: 'Results can vary by individual and what products you are using. How consistent you are with your skincare routine plays an important role in the success of your results',
        open: false
    },
    {
        question: 'Do skincare products expire?',
        answer: 'Skincare products do not last forever. Once opened, these products have a limited shelf life. The exposure to air and bacteria over time can break them down. If used past the expiration date, the product may not be effective or could cause an adverse reaction.',
        open: false
    }
])
onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
    }, 2000)
})
</script>

<style scoped>#question-wrapper {
    background-color: #EDEDED;
}</style>