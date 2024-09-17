import { defineStore, acceptHMRUpdate } from "pinia";
import { collection, addDoc, getDocs, query } from "firebase/firestore";
import { doc, onSnapshot, deleteDoc } from "firebase/firestore";
import { db, auth } from "../firebase";
import { onAuthStateChanged } from "firebase/auth";

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
      const productData = data.find((d) => d.id == parseInt(id));
      quantity = parseInt(quantity);

      //getCurrentUser
      const user = auth.currentUser;
      const cartCollectionRef = collection(db, `users/${user.uid}/cart`);

      //add item depending on quantity
      for (let i = 0; i < quantity; i++) {
        await addDoc(cartCollectionRef, productData);
      }
    },
    async deleteItem(id) {
      const user = auth.currentUser;
      const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
      await deleteDoc(doc(cartCollectionRef, id));
    },
    async deleteAllItems() {
      const user = auth.currentUser;

      const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
      const querySnapshot = await getDocs(query(cartCollectionRef));
      querySnapshot.forEach(async (doc) => {
        await deleteDoc(doc.ref);
      });
      this.cart = [];
    },
  },
});

//get item on page load
onAuthStateChanged(auth, (user) => {
  if (user) {
    const cartCollectionRef = collection(db, `users/${user.uid}/cart`);
    onSnapshot(cartCollectionRef, (querySnapshot) => {
      let cartItems = [];
      querySnapshot.forEach((doc) => {
        cartItems.push({ ...doc.data(), id: doc.id });
      });
      useStore().cart = cartItems;
    });
  } else {
    // If the user is not authenticated, clear the cart
    useStore().cart = [];
  }
});

// hmr
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useStore, import.meta.hot));
}
