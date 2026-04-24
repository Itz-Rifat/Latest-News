// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDpsXQqnW33IFeo_ecZbFeFfFmbnt8cpb4",
  authDomain: "personal-latest-news.firebaseapp.com",
  projectId: "personal-latest-news",
  storageBucket: "personal-latest-news.firebasestorage.app",
  messagingSenderId: "74004831394",
  appId: "1:74004831394:web:5faacd199e5a7be7640bfb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;