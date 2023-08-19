<template>
    <main class="flex flex-col justify-center items-center min-h-[70vh]">
            <img src="../assets/error-404.svg" alt="error">
            <div class="text-center space-y-8 w-[65%]">
                <h3 class="font-bold text-xl">Sorry we can't find the page you're looking for.</h3>
                <button @click="router.push('/')" class="p-[0.7rem] bg-[#463333] text-white rounded-xl">Go Home</button>
            </div>
    </main>
</template>

<script setup>
import { useRouter } from 'vue-router';
const router = useRouter()
</script>

<style scoped></style>