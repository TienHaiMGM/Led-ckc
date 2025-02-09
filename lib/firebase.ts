import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAdgu__16X15pRx8kza-83S8mA1ZXR3Yx8",
  authDomain: "sieuthibanghieu-f033b.firebaseapp.com",
  projectId: "sieuthibanghieu-f033b",
  storageBucket: "sieuthibanghieu-f033b.appspot.com",
  messagingSenderId: "746324087310",
  appId: "1:746324087310:web:a1b2c3d4e5f6g7h8i9j0k1",
  measurementId: "G-XXXXXXXXXX"
};

// Initialize Firebase only if it hasn't been initialized already
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const db = getFirestore(app);

export { app, auth, db };
