<template>
    <div class="flex">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" v-for="number in count">
            <path fill="#C89595"
                d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2L9.19 8.63L2 9.24l5.46 4.73L5.82 21L12 17.27z">
            </path>
        </svg>
    </div>
</template>

<script setup>
import {ref} from 'vue'
const count = ref(Math.round(Math.random() * 4) + 1)
</script>