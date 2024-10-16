<template>
  <div class="flex flex-col justify-center items-center min-h-[100vh] logIn">
    <h1 class="text-4xl font-bold text-white">Log in</h1>
    <form class="w-[80%] md:w-[50%]" @submit.prevent="submitForm">
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
      <Button
        @click="loginWithGoogle"
        class="bg-gray-900 p-3 gap-4 flex items-center justify-center text-white hover:bg-gray-700 duration-150 w-full mt-4"
        ><svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="#ffc107"
            d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8c-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C12.955 4 4 12.955 4 24s8.955 20 20 20s20-8.955 20-20c0-1.341-.138-2.65-.389-3.917"
          />
          <path
            fill="#ff3d00"
            d="m6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4C16.318 4 9.656 8.337 6.306 14.691"
          />
          <path
            fill="#4caf50"
            d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238A11.9 11.9 0 0 1 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44"
          />
          <path
            fill="#1976d2"
            d="M43.611 20.083H42V20H24v8h11.303a12.04 12.04 0 0 1-4.087 5.571l.003-.002l6.19 5.238C36.971 39.205 44 34 44 24c0-1.341-.138-2.65-.389-3.917"
          /></svg
        >Login with Google</Button
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
