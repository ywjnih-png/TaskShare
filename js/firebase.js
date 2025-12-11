// Masukkan config Firebase kamu
const firebaseConfig = {
  apiKey: "AIzaSyDiaWaVLr88PapSzS2-yDQOsD1PKD1510s",
  authDomain: "daget-8aa90.firebaseapp.com",
  projectId: "daget-8aa90",
  storageBucket: "daget-8aa90.firebasestorage.app",
  messagingSenderId: "1090537025712",
  appId: "1:1090537025712:web:723438e53f4370f2580b75",
  measurementId: "G-9P4SF5G2T7"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);

// Service
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();