<template>
    <form class="w-[80%] md:w-[50%]" @submit.prevent="submitForm">
        <div class="my-3 flex flex-col space-y-4 relative">
            <label for="" class="text-2xl text-white">Email Address</label>
            <input type="email" required v-model="emailInput" class="text-xl shadow-sm p-3 outline-red-400 shadow-red-400"
                placeholder="johndoe@gmail.com">
            <label for="" class="text-2xl text-white">Password</label>
            <input :type="showPassword ? 'text' : 'password'" required v-model="passwordInput"
                class="text-xl shadow-sm p-3 outline-red-400 shadow-red-400" placeholder="Password">
            <img src="../../assets/eye.svg" alt="" class="w-[30px] absolute right-4 top-[75%] cursor-pointer"
                @click="toggleVisibility">
        </div>
        <button type="submit" class="bg-red-400 p-3 text-white hover:bg-red-500 duration-150">{{ buttonText }}</button>
    </form>
</template>

<script setup>
import { ref } from 'vue'
const emailInput = ref('')
const passwordInput = ref('')
const showPassword = ref(false)

defineProps(["buttonText"])

const emit = defineEmits(['submitForm'])
const submitForm = () => {
    emit('submitForm', emailInput.value, passwordInput.value)
}

const toggleVisibility = () => {
    showPassword.value = !showPassword.value
}
</script>

<style scoped></style>