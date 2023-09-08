<template>
    <section id="blogs" class="w-full min-h-[60vh]">
        <div class="header border-2 relative border-gray-400 mt-20 min-w-full">
            <h1
                class="absoluteCenter bg-white px-4 md:px-8 py-4 text-2xl text-red-500 uppercase font-medium rounded-3xl whitespace-nowrap">
                The Blogs</h1>
        </div>
        <div class="flex space-x-4 justify-center mt-8">
            <h3 @click="showMainOnly" :class="{ 'border-2 border-red-300 duration-200': onMain }"
                class="text-xl bg-[#FDF6F0] p-2 rounded-md cursor-pointer">Main Blogs</h3>
            <h3 @click="showFavOnly" :class="{ 'border-2 border-red-300 duration-200': onFav }"
                class="text-x bg-[#FDF6F0] p-2 rounded-md cursor-pointer">Favourite Blogs
            </h3>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-4 gap-8 md:p-6" v-if="onMain">
            <div class="w-[75%] md:w-[300px]" v-for="blog in blogStore.blogs" :key="blog">
                <div class="relative">
                    <div class="absolute top-0 hover:bg-[#00000041] duration-300 left-0 w-full h-full"></div>
                    <img :src="blog.image" alt="Blog Image Picture" class="w-full">
                    <p class="absolute bg-red-500 rounded-full p-2 top-1 right-4" v-if="blog.fav"></p>
                </div>
                <div class="space-y-2">
                    <RouterLink :to="`/blogs/${blog.id}`" class="font-bold text-lg hover:underline duration-300">{{
                        blog.title }}
                    </RouterLink>
                    <p class="capitalize tracking-wider font-bold text-gray-400 text-sm font-sans">{{ blog.date }}</p>
                    <Button class="block p-2 bg-black text-white" @click="toggleFav(blog)" v-if="!blog.fav">Make
                        Favorite</Button>
                    <Button class="block p-2 bg-red-500 text-white whitespace-nowrap" @click="toggleFav(blog)"
                        v-if="blog.fav">Remove
                        From Favorite</Button>
                </div>
            </div>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center my-4 gap-8 md:p-6" v-if="onFav">
            <div class="w-[75%] md:w-[300px]" v-for="blog in blogStore.getFavBlogs" :key="blog"
                v-if="blogStore.getFavBlogs">
                <div class="relative">
                    <div class="absolute top-0 hover:bg-[#00000041] duration-300 left-0 w-full h-full"></div>
                    <img :src="blog.image" alt="Blog Image Picture" class="w-full">
                </div>
                <div class="space-y-2">
                    <RouterLink :to="`/blogs/${blog.id}`" class="font-bold text-lg hover:underline duration-300">{{
                        blog.title }}
                    </RouterLink>
                    <p class="capitalize tracking-wider font-bold text-gray-400 text-sm font-sans">{{ blog.date }}</p>
                    <Button class="block p-2 bg-red-500 text-white whitespace-nowrap" @click="toggleFav(blog)"
                        v-if="blog.fav">Remove
                        From Favorite</Button>
                </div>
            </div>
            <div v-if="blogStore.getFavBlogs < 1">
                <h2 class="text-2xl text-center text-black">No Favourite blogs yet.</h2>
            </div>
        </div>
    </section>
</template>

<script setup>
import Button from "../fixed/Button.vue";
import { RouterLink } from "vue-router";
import { useBlog } from "../../store/blogStore"
defineProps(["onFav", "onMain"])
const emit = defineEmits(["toggleFav", "showMainOnly", "showFavOnly"])

const blogStore = useBlog()
const toggleFav = (blog) => {
    emit("toggleFav", blog)
}
const showMainOnly = () => {
    emit("showMainOnly")
}
const showFavOnly = () => {
    emit("showFavOnly")
}
</script>

<style scoped></style>