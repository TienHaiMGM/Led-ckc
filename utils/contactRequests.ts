import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Firestore,
  DocumentData,
} from "firebase/firestore";
import { db } from "../lib/firebase";

export interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  timestamp: {
    toDate: () => Date;
  };
  status: "new" | "read" | "responded";
}

export const getContactRequests = (
  onSuccess: (data: ContactRequest[]) => void,
  onError: (error: Error) => void,
) => {
  if (!db) {
    onError(new Error("Firebase not initialized"));
    return () => {};
  }

  try {
    const firestore = db as Firestore;
    const contactsRef = collection(firestore, "contacts");
    const q = query(contactsRef, orderBy("timestamp", "desc"));

    return onSnapshot(
      q,
      (snapshot) => {
        const data: ContactRequest[] = [];
        snapshot.forEach((doc) => {
          const docData = doc.data();
          data.push({
            id: doc.id,
            name: docData.name || "",
            email: docData.email || "",
            phone: docData.phone || "",
            message: docData.message || "",
            timestamp: docData.timestamp,
            status: docData.status || "new",
          });
        });
        onSuccess(data);
      },
      (error) => {
        console.error("Error fetching contact requests:", error);
        onError(error);
      },
    );
  } catch (error) {
    console.error("Error setting up contact requests listener:", error);
    onError(error instanceof Error ? error : new Error(String(error)));
    return () => {};
  }
};
