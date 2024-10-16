<template>
  <div class="flex justify-between items-center px-6 pt-2">
    <h1 class="text-2xl font-bold mx-4 text-[#463333]">
      Welcome,
      <span class="capitalize text-red-400">{{ firstName }}</span>
    </h1>
    <div v-if="photoUrl" class="border-2 border-red-400 rounded-full p-1">
      <img
        :src="photoUrl"
        :alt="firstName"
        class="w-12 h-12 rounded-full object-cover shadow"
      />
    </div>
  </div>
  <main class="p-8" v-if="cartLength">
    <div>
      <button @click="router.back()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 48 48"
        >
          <mask id="ipSBack0">
            <path
              fill="#fff"
              fill-rule="evenodd"
              stroke="#fff"
              stroke-linejoin="round"
              stroke-width="4"
              d="M44 40.836c-4.893-5.973-9.238-9.362-13.036-10.168c-3.797-.805-7.412-.927-10.846-.365V41L4 23.545L20.118 7v10.167c6.349.05 11.746 2.328 16.192 6.833c4.445 4.505 7.009 10.117 7.69 16.836Z"
              clip-rule="evenodd"
            />
          </mask>
          <path fill="#ff9494" d="M0 0h48v48H0z" mask="url(#ipSBack0)" />
        </svg>
      </button>
    </div>
    <h1 class="text-[2rem] font-bold text-center my-4 text-[#463333]">
      AG Glowsense Basket
    </h1>
    <div class="grid space-y-6 place-items-center" v-if="cart">
      <CartTable />
      <div class="flex gap-4">
        <Button
          class="bg-green-500 p-2 shadow-xl text-white w-[100px]"
          @click="checkOut"
          >Checkout</Button
        >
        <Button
          class="bg-black p-2 shadow-xl text-white w-[100px]"
          @click="clearCart"
          >Clear Cart</Button
        >
      </div>
    </div>
  </main>
  <div
    v-else
    class="min-h-[80vh] flex flex-col gap-4 justify-center items-center"
  >
    <img src="../assets/cart-cross-outline.svg" alt="" class="w-[20%]" />
    <h1 class="capitalize text-[3rem] text-[#463333] text-center">
      Cart is Empty
    </h1>
    <div>
      <Button class="bg-red-300 p-2 shadow" @click="router.back()"
        >Go Back</Button
      >
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import CartTable from "../components/cart/CartTable.vue";
import Button from "../components/fixed/Button.vue";
import Paystack from "@paystack/inline-js";
import { useStore } from "../store/cart";
import { useUserStore } from "../store/user";
import { useRouter } from "vue-router";
import { useToast } from "../store/toast";
import { storeToRefs } from "pinia";

const router = useRouter();
const toast = useToast();
const popup = new Paystack();

//store
const cartStore = useStore();
const userData = useUserStore();
const { user } = storeToRefs(userData);
const { cartLength, totalPriceOfItems, cart } = storeToRefs(cartStore);

const photoUrl = ref("");
const firstName = ref("");

//clearCart
const clearCart = () => {
  cartStore.$reset();
  cartStore.deleteAllItems();
};

//checkout
const checkOut = () => {
  popup.checkout({
    key: "pk_test_19169c46ce886643a7ebb974a0571fc1400ca285",
    email: user.value.email,
    amount: Math.round(totalPriceOfItems.value * 100),
    currency: "NGN",
    firstName: user.value.first_name,
    lastName: user.value.last_name,
    phone: user.value.phone_number || "",
    channels: ["card", "bank", "ussd", "qr", "mobile_money", "bank_transfer"],
    onLoad: (response) => {
      console.log("Load: ");
    },
    onCancel: () => {
      toast.addToast("Cancelled", "info");
    },
    onSuccess: (transaction) => {
      toast.addToast("Checked Out!", "success");
    },
    onError: (error) => {
      toast.addToast(error.message, "error");
    },
  });
};

onMounted(() => {
  photoUrl.value = user.value.photoURL;
  firstName.value = user.value.first_name;
});
</script>
