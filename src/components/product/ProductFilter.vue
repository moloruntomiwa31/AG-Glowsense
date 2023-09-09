<template>
    <select class="bg-red-300 outline-none p-2 rounded-md" v-model="selectOption">
        <option value="all">All</option>
        <option value="bodyWash">Body Wash</option>
        <option value="faceWash">Face Wash</option>
        <option value="vive">Vive</option>
    </select>
</template>

<script setup>
import {watch, ref} from 'vue'
const selectOption = ref('all') 
const emit = defineEmits(["optionSelected"])
watch(selectOption, (newOption) => {
    emit("optionSelected", newOption)
}) 
</script>

<style scoped></style>