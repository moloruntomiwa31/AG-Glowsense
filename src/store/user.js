import { defineStore } from "pinia";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { auth } from "../firebase";

export const userStore = defineStore("userStore", {
  state: () => ({
    user: null,
    userSet: false,
  }),
  actions: {
    //authenticate users

    async signUp(email, password) {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      if (res) {
        this.user = res.user;
        console.log(this.user);
      }
    },
    async logIn(email, password) {
      const res = await signInWithEmailAndPassword(auth, email, password);
      if (res) {
        this.user = res.user;
      }
    },
    async logOut() {
      await signOut(auth);
      this.user = null;
    },
  },
});

//getUserOnPageLoad
onAuthStateChanged(auth, (user) => {
  userStore().user = user;
  userStore().userSet = true;
});
