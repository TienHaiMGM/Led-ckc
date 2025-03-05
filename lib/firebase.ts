import { initializeApp, getApps, getApp, FirebaseApp } from "firebase/app";
import { getFirestore, Firestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import {
  getAuth,
  setPersistence,
  browserSessionPersistence,
  Auth,
} from "firebase/auth";

// Sử dụng biến môi trường để bảo mật API Key
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Chỉ khởi tạo Firebase nếu chưa tồn tại app nào
const app: FirebaseApp = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);
const auth: Auth = getAuth(app);
const db: Firestore = getFirestore(app);
const storage = getStorage(app);

// Thiết lập session persistence
setPersistence(auth, browserSessionPersistence)
  .then(() => console.log("Firebase persistence set to SESSION"))
  .catch((error) => console.error("Error setting persistence:", error));

export { app, auth, db, storage };
