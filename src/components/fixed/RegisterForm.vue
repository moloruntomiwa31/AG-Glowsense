<template>
  <form class="w-[80%] md:w-[65%] lg:w-[50%]" @submit.prevent="submitForm">
    <Button
      @click="loginWithGoogle"
      class="bg-gray-900 p-3 gap-4 flex items-center justify-center text-white hover:bg-gray-700 duration-150 w-full mt-4"
      ><img src="../../assets/google.svg" alt="Google" />Signup with
      Google</Button
    >
    <div class="my-3 grid grid-cols-2 gap-4">
      <div class="col-span-2 md:col-span-1">
        <label for="firstName" class="text-2xl text-white">First Name</label>
        <input
          id="firstName"
          type="text"
          required
          v-model="firstName"
          class="rounded-md text-xl shadow-sm p-3 outline-red-400 shadow-red-400 w-full"
          placeholder="enter your first name"
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label for="lastName" class="text-2xl text-white">Last Name</label>
        <input
          id="lastName"
          type="text"
          required
          v-model="lastName"
          class="rounded-md text-xl shadow-sm p-3 outline-red-400 shadow-red-400 w-full"
          placeholder="enter your last name"
        />
      </div>
      <div class="col-span-2 md:col-span-1">
        <label for="phoneNumber" class="text-2xl text-white"
          >Phone Number</label
        >
        <vue-tel-input
          class="p-2 !border-red-400 !border"
          v-model="phoneNumber"
          mode="international"
        ></vue-tel-input>
      </div>
      <div class="col-span-2 md:col-span-1">
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
          src="../../assets/eye.svg"
          alt="Show Password"
          class="w-[30px] absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
          @click="toggleVisibility"
          v-if="!showPassword"
        />
        <img
          src="../../assets/closedEye.svg"
          alt="Hide Password"
          class="w-[30px] absolute right-4 top-[70%] transform -translate-y-1/2 cursor-pointer"
          @click="toggleVisibility"
          v-else
        />
      </div>
    </div>
    <Button
      type="submit"
      class="bg-red-400 p-3 text-white hover:bg-red-500 duration-150 w-full mt-4"
      >{{ buttonText }}</Button
    >
  </form>
</template>

<script setup>
import { ref } from "vue";
import Button from "./Button.vue";
import { useGoogle } from "../../composables/useGoogle";
import { VueTelInput } from "vue-tel-input";
import "vue-tel-input/vue-tel-input.css";

const emailInput = ref("");
const passwordInput = ref("");
const firstName = ref("");
const lastName = ref("");
const phoneNumber = ref("");
const showPassword = ref(false);
const { loginWithGoogle } = useGoogle();

defineProps(["buttonText"]);

const emit = defineEmits(["submitForm"]);
const submitForm = () => {
  emit(
    "submitForm",
    emailInput.value,
    passwordInput.value,
    firstName.value,
    lastName.value,
    phoneNumber.value
  );
  emailInput.value = "";
  passwordInput.value = "";
  firstName.value = "";
  lastName.value = "";
  phoneNumber.value = "";
};

const toggleVisibility = () => {
  showPassword.value = !showPassword.value;
};
</script>

<style scoped>
.vti__dropdown {
  background-color: aliceblue;
}
</style>
