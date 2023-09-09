<template>
    <div class="flex flex-col justify-center items-center min-h-[100vh] logIn">
        <h1 class="text-4xl font-bold text-white">Log in</h1>
        <RegisterForm @submitForm="submitForm" :buttonText="buttonText" />
        <p class="text-white md:text-xl my-3">Don't have an account? <RouterLink to="/signup"
                class="underline text-red-300">Sign Up</RouterLink>
        </p>
        <div v-if="error" class="text-red-300 text-xl capitalize">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { useUserStore } from '../store/user';
import { useRouter } from 'vue-router';
import RegisterForm from '../components/fixed/RegisterForm.vue';

const userData = useUserStore()
const router = useRouter()
const buttonText = ref('Log In')
const error = ref('')


const submitForm = (email, password) => {
    logIn(email, password);
}

const logIn = async (email, password) => {
    try {
        await userData.logIn(email, password);
        router.push("/")
    } catch (e) {
        error.value = e.message.split(":")[1]
    }
}
</script>

<style scoped>
.logIn {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("../assets/login.avif");
    background-position: left;
    background-size: cover;
    background-repeat: no-repeat;
}
</style>