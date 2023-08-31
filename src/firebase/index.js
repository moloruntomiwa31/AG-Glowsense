import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAV43hZRGK7NRQRBtXMFwuWkwqIDvzvMKw",
  authDomain: "ag-glowsense.firebaseapp.com",
  projectId: "ag-glowsense",
  storageBucket: "ag-glowsense.appspot.com",
  messagingSenderId: "53667854322",
  appId: "1:53667854322:web:14a6b256afdb4f3764dd6b"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth()
const db = getFirestore(app);


export {auth, db}
