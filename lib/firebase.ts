"use client";
import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  Auth,
  signOut,
} from "firebase/auth";

// Firebase configuration using environment variables
const firebaseConfig = {
  apiKey: "AIzaSyBJGoGygwZ7j-LWpo7PL2_Ko9-zUcIYKsw",
  authDomain: "sieuthibanghieu-f033b.firebaseapp.com",
  projectId: "sieuthibanghieu-f033b",
  storageBucket: "sieuthibanghieu-f033b.firebasestorage.app",
  messagingSenderId: "746324087310",
  appId: "1:746324087310:web:1143e04a5f1c1ea403a25f",
  measurementId: "G-ZBYY5HEMW5",
};

let app: FirebaseApp;
let auth: Auth;
let db: Firestore;

if (typeof window !== "undefined") {
  try {
    // Get existing app if it exists, otherwise initialize
    app = getApps().length ? getApp() : initializeApp(firebaseConfig);
    auth = getAuth(app);
    db = getFirestore(app);

    // Set persistence to SESSION (cleared when browser/tab closes)
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        console.log("Firebase persistence set to SESSION");
      })
      .catch((error) => {
        console.error("Error setting persistence:", error);
      });

    // Clear any existing auth state when the page loads
    signOut(auth).catch((error) => {
      console.error("Error clearing auth state:", error);
    });
  } catch (error) {
    console.error("Error initializing Firebase:", error);
  }
} else {
  console.log("Firebase initialization skipped (server-side)");
}

export { app, auth, db };
