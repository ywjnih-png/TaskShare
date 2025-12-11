
// Import Firebase SDK yang diperlukan
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

// Config dari Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyDiaWaVLr88PapSzS2-yDQOsD1PKD1510s",
  authDomain: "daget-8aa90.firebaseapp.com",
  projectId: "daget-8aa90",
  storageBucket: "daget-8aa90.firebasestorage.app",
  messagingSenderId: "1090537025712",
  appId: "1:1090537025712:web:723438e53f4370f2580b75",
  measurementId: "G-9P4SF5G2T7"
};

// Init Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
