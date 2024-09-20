<template>
  <div
    v-if="filteredProducts.length > 0"
    class="p-5 grid place-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6"
  >
    <div
      class="rounded-md text-[#EDEDED] w-full max-w-xs h-[400px] p-4 flex flex-col items-start justify-between shadow-md bg-[#6C4A4A] transition-transform transform hover:scale-105"
      v-for="product in filteredProducts"
      :key="product.id"
    >
      <img
        :src="product.image"
        alt="Product Image"
        class="rounded-md w-full h-48 object-cover"
      />
      <div class="flex flex-col items-start justify-between flex-grow">
        <h3 class="capitalize font-bold text-lg">{{ product.name }}</h3>
        <p class="font-bold">Price - ₦{{ product.price }}</p>
        <Star />
        <Button
          @click="checkProductdetails(product.id)"
          class="capitalize text-lg text-white bg-[#C89595] p-2 hover:bg-red-400 duration-150 whitespace-nowrap outline-none"
        >
          Check Details
        </Button>
      </div>
    </div>
  </div>
  <div v-else class="min-h-[80vh] w-full flex items-center justify-center">
    <h1 class="text-[3rem] text-center">No Results Found</h1>
  </div>
</template>

<script setup>
import Star from "../home/Star.vue";
import Button from "../fixed/Button.vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../../store/user";
import { useToast } from "../../store/toast";

const router = useRouter();
const userData = useUserStore();
const toast = useToast();

defineProps(["filteredProducts"]);

const checkProductdetails = (id) => {
  if (userData.user) {
    router.push(`/products/${id}`);
    return;
  }
  toast.addToast("User has to be authenticated!", "error");
  router.push("/signup");
};
</script>

<style scoped>
.productWrapper {
  grid-gap: 20px;
  justify-content: center;
  align-items: center;
  min-width: 100%;
}

.product {
  max-height: 500px;
  height: 100%;
  margin-bottom: 0.4rem;
  max-width: 300px;
}

.product-image {
  width: 100%;
  height: 50%;
  object-fit: contain;
}
</style>
