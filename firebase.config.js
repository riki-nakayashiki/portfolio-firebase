// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC7V7LmKs3pgb1t9yCj2cJEE7ZcuCdu5XM",
    authDomain: "portfolio-48691.firebaseapp.com",
    projectId: "portfolio-48691",
    storageBucket: "portfolio-48691.appspot.com",
    messagingSenderId: "12729330335",
    appId: "1:12729330335:web:d2a4121cf42a5d12b790aa",
    measurementId: "G-G1BBET56B8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);