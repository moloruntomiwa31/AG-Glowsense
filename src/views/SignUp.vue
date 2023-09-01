<template>
    <div class="flex flex-col justify-center items-center min-h-[100vh] signUp">
        <h1 class="text-4xl font-bold text-[#fff]">Sign Up</h1>
        <RegisterForm @submitForm="submitForm" :buttonText="buttonText" />
        <p class="text-white md:text-xl my-3">Already signned up? <RouterLink to="/login" class="underline text-red-400">Log
                In</RouterLink>
        </p>
        <div v-if="error" class="text-red-300 text-xl max-w-[350px]">{{ error }}</div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { userStore } from '../store/user';
import { useRouter } from 'vue-router';
import { RouterLink } from 'vue-router';
import { usePush } from "notivue"
import RegisterForm from '../components/fixed/RegisterForm.vue';

const userData = userStore()
const router = useRouter()
const push = usePush()
const buttonText = ref("Sign Up")
const error = ref('')

const submitForm = (email, password) => {
    signUp(email, password);
}

const signUp = async (email, password) => {
    try {
        await userData.signUp(email, password);
        push.success("User Created!")
        router.push("/")
    } catch (e) {
        error.value = e.message.split(":")[1]
    }
}

</script>

<style  scoped>
.signUp {
    background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)), url("../assets/signin.avif");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
}
</style>