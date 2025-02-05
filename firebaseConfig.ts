// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBukys6JU4QTfsf7hNP_GHqGH5oYBmDKJY",
  authDomain: "app-finance-d3f9f.firebaseapp.com",
  projectId: "app-finance-d3f9f",
  storageBucket: "app-finance-d3f9f.firebasestorage.app",
  messagingSenderId: "270358968775",
  appId: "1:270358968775:web:a52f36adc9c13b8ea701e2",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
