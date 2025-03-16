// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4YM4liFWZhma1rMV57IqIoefu5R-tnJM",
  authDomain: "ecommerce-6e3cd.firebaseapp.com",
  projectId: "ecommerce-6e3cd",
  storageBucket: "ecommerce-6e3cd.firebasestorage.app",
  messagingSenderId: "526001388773",
  appId: "1:526001388773:web:dafbfc6619d4d6060f280c",
  measurementId: "G-B184YFZ1N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Analytics
const analytics = getAnalytics(app);

// Initialize Firestore and Storage (if you need them)
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, analytics };
