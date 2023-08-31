import { defineStore, acceptHMRUpdate } from "pinia";
import { collection, addDoc } from "firebase/firestore";
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";

import { db } from "../firebase";

import data from "../../data/db";
import { groupBy } from "lodash";

export const useStore = defineStore("cartStore", {
  state: () => ({
    cart: [],
    pricesOfData: [],
    idOfPreviousProductPage: null,
  }),
  getters: {
    grouped: (state) => groupBy(state.cart, (cartItems) => cartItems.name),
    cartLength: (state) => state.cart.length,
    totalPriceOfItems() {
      let totalPrice = 0;
      this.cart.forEach((p) => {
        totalPrice += parseInt(p.price);
      });
      return totalPrice;
    },
  },
  actions: {
    async addToCart(id, quantity) {
      try {
        const productData = data.find((d) => d.id == parseInt(id));
        quantity = parseInt(quantity);
        for (let i = 0; i < quantity; i++) {
          const docRef = collection(db, "cart");
          await addDoc(docRef, productData);
        }
      } catch (e) {
        console.log(e.message);
      }
    },
    async deleteItem(id) {
      await deleteDoc(doc(db, "cart", id));
    },
  },
});

onSnapshot(collection(db, "cart"), (querySnapshot) => {
  let cartItems = [];
  querySnapshot.forEach((doc) => {
    cartItems.push({...doc.data(), id:doc.id});
  });
  useStore().cart = cartItems;
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
