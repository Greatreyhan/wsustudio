// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getDatabase } from "firebase/database"


const firebaseConfig = {
  apiKey: "AIzaSyBY489QtliguFmQctM81x7EyguUHGzr37I",
  authDomain: "comprowsu.firebaseapp.com",
  databaseURL: "https://comprowsu-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "comprowsu",
  storageBucket: "comprowsu.appspot.com",
  messagingSenderId: "408123204083",
  appId: "1:408123204083:web:e2f8ad5f97f6a90f67b286",
  measurementId: "G-17H0SFP31R"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORE = getStorage(FIREBASE_APP);
export const FIREBASE_DB = getDatabase(FIREBASE_APP);