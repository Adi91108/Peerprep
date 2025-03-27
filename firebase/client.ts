// Import the functions you need from the SDKs you need

import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "preppeer-2d1a9.firebaseapp.com",
  projectId: "preppeer-2d1a9",
  storageBucket: "preppeer-2d1a9.firebasestorage.app",
  messagingSenderId: "1037112059314",
  appId: "1:1037112059314:web:121f73e47c76516f7c70ab",
  measurementId: "G-YRFPFLTNM7",
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);
