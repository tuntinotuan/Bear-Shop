import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCmzc2Hl0xwo25G8aMbpGmzYvczVtXlwwQ",
  authDomain: "bear-shop-94abd.firebaseapp.com",
  projectId: "bear-shop-94abd",
  storageBucket: "bear-shop-94abd.appspot.com",
  messagingSenderId: "365446768249",
  appId: "1:365446768249:web:c5f956b43c3d7cadfd56a8",
  measurementId: "G-HXQP3490BF",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
