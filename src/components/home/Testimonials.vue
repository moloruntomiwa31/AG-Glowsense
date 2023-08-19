<template>
    <section id="testimonials">
        <div class="header border-2 relative border-gray-300">
            <h1
                class="absoluteCenter whitespace-nowrap bg-white px-4 md:px-8 py-4 md:text-2xl text-red-500 uppercase font-medium rounded-2xl">
                Testimonials</h1>
        </div>
        <div class="grid place-items-center grid-cols-1 md:grid-cols-3 p-8 gap-[20px]">
            <div class="p-8 md:h-[100%] shadow-md space-y-4 md:space-y-0 bg-[#F6DFEB]"
                v-for="testimonial in testimonials">
                <div class="flex gap-2 items-start justify-center">
                    <svg class="w-[15%]" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 20 20">
                        <path fill="#c89595"
                            d="M4 3h12c.55 0 1.02.2 1.41.59S18 4.45 18 5v7c0 .55-.2 1.02-.59 1.41S16.55 14 16 14h-1l-5 5v-5H4c-.55 0-1.02-.2-1.41-.59S2 12.55 2 12V5c0-.55.2-1.02.59-1.41S3.45 3 4 3zm11 2H4v1h11V5zm1 3H4v1h12V8zm-3 3H4v1h9v-1z" />
                    </svg>
                    <div class="space-y-2 text-lg">
                        <p>{{ testimonial.text }}</p>
                        <h3 class="font-bold">{{ testimonial.name }}</h3>
                        <Star />
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { reactive } from 'vue'
import Star from './Star.vue'
const testimonials = reactive([
    {
        name: "Femi Steves",
        text: "The exfoliation properties work very well and leaves my skin smooth with a nice and even glow! I've received so many compliments since I've been using the products!"
    },
    {
        name: "Oluwatoyin Afolake",
        text: "I really love the combination of the Smiling Beads Body Wash and the Softness Bliss Body Lotion on my body."
    },
    {
        name: "Funke Akindele",
        text: " My skin has not felt like this since my pre-teens! With results like this, I believe my search is over!"
    }
])
</script>

<style scoped>
.grid-col {
    grid-template-columns: repeat(2, 1fr);
}
</style>