// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAa01sHAyIWnVv_B8Kdxihu24JJvM3ZcFs",
  authDomain: "ai-travel-planner-fd9d4.firebaseapp.com",
  projectId: "ai-travel-planner-fd9d4",
  storageBucket: "ai-travel-planner-fd9d4.appspot.com",
  messagingSenderId: "936881158945",
  appId: "1:936881158945:web:1cdc243c04b4dc41f95c60",
  measurementId: "G-HHRYJFN0CJ"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db=getFirestore(app);
// const analytics = getAnalytics(app);