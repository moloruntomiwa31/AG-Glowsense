<template>
    <div>
        <main v-if="presentBlog">
            <div class="w-full lg:flex justify-center">
                <img :src="presentBlog.image" alt="blog-image" class="w-full lg:w-3/4">
            </div>
            <div class="space-y-8 px-6 mt-16 lg:px-20">
                <div class="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24">
                        <path fill="currentColor" fill-rule="evenodd" d="M17.5 17.5L9.25 12l8.25-5.5l-1-1.5L6 12l10.5 7z" />
                    </svg>
                    <RouterLink to="/blogs" class="text-black hover:underline duration-100">Back to Blog Page</RouterLink>
                </div>
                <h2 class="text-2xl uppercase font-bold">{{ presentBlog.title }}</h2>
                <div class="flex items-center space-x-2 font-sans">
                    <p class="text-gray-500">{{ presentBlog.date }}</p>
                    <p>{{ presentBlog.writer }}</p>
                </div>
                <p class="text-xl">{{ presentBlog.content }}</p>
            </div>
        </main>
    </div>
</template>

<script setup>
import { ref, onMounted } from "vue"
import { RouterLink } from "vue-router";
import { useRoute } from 'vue-router';
import { useBlog } from '../store/blogStore';
const route = useRoute()
const { id } = route.params
const presentBlog = ref(null)

onMounted(() => {
    presentBlog.value = useBlog().blogs.find(b => b.id == id)
})
</script>

<style scoped></style>