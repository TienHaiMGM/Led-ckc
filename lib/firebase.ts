"use client";
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
  Auth,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBJGoGygwZ7j-LWpo7PL2_Ko9-zUcIYKsw",
  authDomain: "sieuthibanghieu-f033b.firebaseapp.com",
  projectId: "sieuthibanghieu-f033b",
  storageBucket: "sieuthibanghieu-f033b.firebasestorage.app",
  messagingSenderId: "746324087310",
  appId: "1:746324087310:web:1143e04a5f1c1ea403a25f",
  measurementId: "G-ZBYY5HEMW5",
};

// Initialize Firebase
let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (typeof window !== "undefined") {
  try {
    // Get existing app if it exists, otherwise initialize
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    // Set persistence
    setPersistence(auth, browserLocalPersistence)
      .then(() => {
        console.log("Firebase persistence set to LOCAL");
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });

    console.log("Firebase initialized successfully");
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
} else {
  console.log("Firebase initialization skipped (server-side)");
}

export { app, auth, db };
