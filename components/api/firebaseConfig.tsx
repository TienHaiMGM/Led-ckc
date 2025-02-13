import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdgu__16X15pRx8kza-83S8mA1ZXR3Yx8",
  authDomain: "sieuthibanghieu-f033b.firebaseapp.com",
  projectId: "sieuthibanghieu-f033b",
  storageBucket: "sieuthibanghieu-f033b.appspot.com",
  messagingSenderId: "746324087310",
  appId: "1:746324087310:web:a1b2c3d4e5f6g7h8i9j0k1",
  measurementId: "G-XXXXXXXXXX",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export { db };
