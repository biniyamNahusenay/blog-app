// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-89770.firebaseapp.com",
  projectId: "blog-89770",
  storageBucket: "blog-89770.appspot.com",
  messagingSenderId: "28686148529",
  appId: "1:28686148529:web:648ed58f81ea845ca0d390"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);