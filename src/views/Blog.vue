<template>
    <PreLoader v-if="isLoading" />
    <main v-else>
        <section class="flex flex-col items-center justify-center">
            <div
                class="text-center grid place-items-center w-full px-6 py-12 md:py-0 blogHero relative min-h-[50vh] lg:min-h-[100vh]">
                <div class="w-[80%]">
                    <h3 class="uppercase text-xl font-semibold text-gray-100">From the blog</h3>
                    <h1 class="font-bold capitalize text-[2.5rem] md:text-[4rem] text-red-300 my-2">We really have so much
                        to
                        share
                        with you!</h1>
                </div>
                <DownButton @scroll="scrollTosection('blogs')"
                    class="border-2 border-white p-2 absolute bottom-1 lg:bottom-[6rem] hover:bg-white duration-200" />
            </div>

            <!-- blogs -->
            <TheBlog :onMain="onMain" :onFav="onFav" @toggleFav="toggleFav" @showFavOnly="showFavOnly"
                @showMainOnly="showMainOnly" />

            <!-- newsletter -->
            <section class="w-full">
                <main class="bg-[#463333] space-y-8 p-20 flex justify-center items-center flex-col">
                    <h1 class="font-bold text-5xl text-white"><span class="text-red-300 whitespace-nowrap">Join</span> Our <span
                            class="text-red-300">NewsLetter!!</span></h1>
                    <div class="space-x-4">
                        <input type="email"
                            class="border-red-400 border-2 p-1 outline-none bg-transparent placeholder:text-white text-white"
                            placeholder="johdoe@gmail.com">
                        <button class="shadow p-[0.36rem] text-white bg-black hover:opacity-80">Join</button>
                    </div>
                </main>
            </section>
        </section>
    </main>
</template>

<script setup>
import { ref, onMounted } from "vue"
import TheBlog from "../components/blog/TheBlog.vue";
import PreLoader from '../components/fixed/PreLoader.vue';
import DownButton from "../components/fixed/DownButton.vue";
import useScroll from '../scroll';
const { scrollTosection } = useScroll()
const isLoading = ref(true)

const onMain = ref(true)
const onFav = ref(false)

const toggleFav = (blog) => {
    return blog.fav = !blog.fav
}
const showFavOnly = () => {
    onMain.value = false;
    onFav.value = true;
}
const showMainOnly = () => {
    onMain.value = true;
    onFav.value = false;
}

onMounted(() => {
    setTimeout(() => { isLoading.value = false }, 2000)
})
</script>

<style scoped>
.blogHero {
    background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("../assets/blogHero.jpg");
    background-position: left center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>