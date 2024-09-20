import { defineStore, acceptHMRUpdate } from "pinia";
import products from "../../data/db";
import { ref } from "vue";

export const useProductStore = defineStore("ProductStore", () => {
  const productsValue = ref(products);
  return {
    products: productsValue,
  };
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useProductStore, import.meta.hot));
}
