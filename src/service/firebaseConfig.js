// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Import getFirestore for Firestore
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUvkzNViKwhnZUjBbgziwblgfoGIR9whE",
  authDomain: "ai-trip-planner-698a0.firebaseapp.com",
  projectId: "ai-trip-planner-698a0",
  storageBucket: "ai-trip-planner-698a0.appspot.com", // Corrected .app to .com for the storage bucket
  messagingSenderId: "1010157356817",
  appId: "1:1010157356817:web:6e008af33a518a64422eb0",
  measurementId: "G-357HJZ7ZM6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); // Initialize Firestore
