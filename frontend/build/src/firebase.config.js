import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyBPC0k3YK2s4Sia2HGteA37zAWpQx_3cNM",
  authDomain: "house-market-place-58e1b.firebaseapp.com",
  projectId: "house-market-place-58e1b",
  storageBucket: "house-market-place-58e1b.appspot.com",
  messagingSenderId: "481829871993",
  appId: "1:481829871993:web:4d7a0f61905d250fc38fa8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore();