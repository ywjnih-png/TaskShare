// firebase.js
var firebaseConfig = {
  apiKey: "AIzaSyDoT-g3KdzO6OJfyk7pZbPFFfZYXIxvAD4",
  authDomain: "taskshare-d418c.firebaseapp.com",
  projectId: "taskshare-d418c",
  storageBucket: "taskshare-d418c.appspot.com",
  messagingSenderId: "852406544322",
  appId: "1:852406544322:web:20b449f34d399f614d985b",
  measurementId: "G-S1PL24E751"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();
