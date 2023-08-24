<template>
    <PreLoader v-if="isLoading" />
    <main v-else>
        <!-- hero -->
        <section class="hero min-h-[100vh]">
            <div :class="{ animate: shouldAnimate }" class="hero-text md:w-1/2 space-y-4">
                <h1 class="text-white text-[3rem] md:text-[4rem] font-[900] title lg:w-[85%]">Treat your skin<span
                        class="text-red-300"> with
                        nature.</span></h1>
                <Button @click="router.push('/products')"
                    class="bg-white border-red-300 p-4 border-2 hover:border-red-400 hover:bg-red-300 hover:text-white duration-300 font-[900]">Explore
                    Products</Button>
                <p class="text-white md:w-[50%] text-xl font-[300] w-3/4">Keep your body well groomed and enjoy treatment
                    services from us
                    from
                    now on and get attractive discounts.</p>
            </div>
            <DownButton @scroll="scrollTosection('features')"
                class="hidden md:block border-2 border-white p-2 absolute bottom-[6rem] left-[50%] hover:bg-white duration-200" />
        </section>

        <!-- ----about---- -->
        <HomeFeatures />
        <!-- --------swiper------ -->
        <div class="my-8 space-y-8">
            <Swiper :modules="[EffectCube, Autoplay]" :cube-effect="{
                shadow: false
            }" :autoplay="{
    delay: 1000,
    disableOnInteraction: false
}" effect="card" :loop="true">
                <SwiperSlide v-for="photo in photos">
                    <img :src="photo" alt="">
                </SwiperSlide>
            </Swiper>
            <div class="flex justify-center">
                <Button class="bg-red-400 p-6 text-white hover:border-red-800 duration-300 hover:border-2"
                    @click="router.push('/products')">Check Products</Button>
            </div>
        </div>
        <!-- -----testimonials -->
        <Testimonials />

    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue';
import { EffectCube, Autoplay } from "swiper/modules"
import { useRouter } from 'vue-router'
import 'swiper/css/effect-cube'
import "swiper/css/autoplay"
import 'swiper/css';

import icon1 from '../assets/muse.jpg'
import icon2 from '../assets/lipbalm.jpg'
import icon4 from '../assets/museHands.jpg'
import icon5 from '../assets/face-mask.jpg'

import HomeFeatures from '../components/home/HomeFeatures.vue'
import Testimonials from '../components/home/Testimonials.vue';
import DownButton from '../components/fixed/DownButton.vue';
import PreLoader from '../components/fixed/PreLoader.vue';
import Button from '../components/fixed/Button.vue';
import useScroll from '../scroll';

const isLoading = ref('true')
const router = useRouter()
const shouldAnimate = ref(false)

onMounted(() => {
    setTimeout(() => {
        isLoading.value = false
        shouldAnimate.value = true
    }, 2000)
})

const { scrollTosection } = useScroll()
const photos = [
    icon1, icon2, icon4, icon5
]

</script>

<style scoped>
.hero-text {
    position: absolute;
    top: 40%;
    left: 10%;
    transform: translateY(-50%);
}

.hero::before {
    position: absolute;
    background-color: rgba(0 0 0 / 50%);
    content: "";
    inset: 0;
}

.hero {
    min-width: 100%;
    background-image: url('../assets/womans-bust-hand-shoulder.jpg');
    background-repeat: no-repeat;
    background-position: right;
    background-size: cover;
    position: relative;
}

.animate {
    animation: animate 1s ease-in-out;
}

@keyframes animate {
    0% {
        transform: translate(-100%, -30%);
    }

    100% {
        transform: translate(0, -50%);
    }
}

.swiper {
    min-width: 80%;
    height: 400px;
}

.swiper img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.swiper-pagination-bullet-active {
    color: red;
}
</style>