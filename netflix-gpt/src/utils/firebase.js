// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAlhX8e__SPI1DZbLu99tVTojSAHNCOQcA",
  authDomain: "netflixgpt-bd761.firebaseapp.com",
  projectId: "netflixgpt-bd761",
  storageBucket: "netflixgpt-bd761.firebasestorage.app",
  messagingSenderId: "582044374043",
  appId: "1:582044374043:web:e885f5c94391368981d4be",
  measurementId: "G-HZJ4HLFX0X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();