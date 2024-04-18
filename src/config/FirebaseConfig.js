import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcUkwwqdAs34NuUwUyQ2ScwcYrR27Ltpw",
  authDomain: "teste-projeto-5e790.firebaseapp.com",
  projectId: "teste-projeto-5e790",
  storageBucket: "teste-projeto-5e790.appspot.com",
  messagingSenderId: "364856017989",
  appId: "1:364856017989:web:a11d818274cbdece47cf2c"
  };  

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);