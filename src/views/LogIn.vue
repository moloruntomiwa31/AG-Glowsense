<template>
  <div class="flex flex-col justify-center items-center min-h-[100vh] logIn">
    <h1 class="text-4xl font-bold text-white">Log in</h1>
    <form class="w-[80%] md:w-[65%] lg:w-[50%]" @submit.prevent="submitForm">
      <Button
        @click="loginWithGoogle"
        class="bg-gray-900 p-3 gap-4 flex items-center justify-center text-white hover:bg-gray-700 duration-150 w-full mt-4"
        ><img src="../assets/google.svg" alt="google" />Continue with
        Google</Button
      >
      <div class="my-3 grid grid-cols-2 gap-4">
        <div class="col-span-2">
          <label for="email" class="text-2xl text-white">Email Address</label>
          <input
            id="email"
            type="email"
            required
            v-model="emailInput"
            class="rounded-md text-xl shadow-sm p-3 outline-red-400 shadow-red-400 w-full"
            placeholder="enter your email address"
          />
        </div>
        <div class="col-span-2 relative">
          <label for="password" class="text-2xl text-white">Password</label>
          <input
            id="password"
            :type="showPassword ? 'text' : 'password'"
            required
            v-model="passwordInput"
            class="text-xl shadow-sm p-3 outline-red-400 shadow-red-400 rounded-md w-full"
            placeholder="enter your password"
          />
          <img
            src="../assets/eye.svg"
            alt="Show Password"
            class="w-[30px] absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
            @click="toggleVisibility"
            v-if="!showPassword"
          />
          <img
            src="../assets/closedEye.svg"
            alt="Hide Password"
            class="w-[30px] absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
            @click="toggleVisibility"
            v-else
          />
        </div>
      </div>
      <Button
        @click="submitForm"
        type="submit"
        class="bg-red-400 p-3 text-white hover:bg-red-500 duration-150 w-full mt-4"
        >{{ buttonText }}</Button
      >
    </form>

    <p class="text-white md:text-xl my-3">
      Don't have an account?
      <RouterLink to="/signup" class="underline text-red-300"
        >Sign Up</RouterLink
      >
    </p>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import { useToast } from "../store/toast";
import { useGoogle } from "../composables/useGoogle";
import Button from "../components/fixed/Button.vue";

const userData = useUserStore();
const router = useRouter();
const buttonText = ref("Log In");
const toast = useToast();

const emailInput = ref("");
const passwordInput = ref("");
const showPassword = ref(false);

const submitForm = () => {
  logIn(emailInput.value, passwordInput.value);
};

const logIn = async (email, password) => {
  try {
    await userData.logIn(email, password);
    router.push("/");
    toast.addToast("User Logged In", "success");
  } catch (e) {
    toast.addToast(e.message.split(":")[1], "error");
  }
};

const { loginWithGoogle } = useGoogle();

const toggleVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.logIn {
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.8)),
    url("../assets/login.avif");
  background-position: left;
  background-size: cover;
  background-repeat: no-repeat;
}
</style>
