<template>
    <div class="grid place-items-center space-y-6 p-6">
        <div id="question-wrapper" v-for="faq in faqs" :key="faq" class="bg-[#EDEDED] w-full md:w-1/2 p-2 duration-300 cursor-pointer"
            @click="faq.open = !faq.open">
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
</template>

<script setup>
defineProps(["faqs"])
</script>