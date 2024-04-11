import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBkQVSj0C_Sdef_7_c7vrmuBehXcjExxz0",
    authDomain: "taskwithauth-1ca6b.firebaseapp.com",
    projectId: "taskwithauth-1ca6b",
    storageBucket: "taskwithauth-1ca6b.appspot.com",
    messagingSenderId: "1097203811884",
    appId: "1:1097203811884:web:aac0483ce15b3bf5f33389"
  };
  

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);