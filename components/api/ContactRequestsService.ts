import { db } from "../../lib/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Firestore,
  DocumentData,
} from "firebase/firestore";

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

export const subscribeToContactRequests = (
  onData: (requests: ContactRequest[]) => void,
  onError: (error: Error) => void,
) => {
  try {
    const contactsRef = collection(db as Firestore, "contacts");
    const q = query(contactsRef, orderBy("timestamp", "desc"));

    return onSnapshot(
      q,
      (snapshot) => {
        const contactData: ContactRequest[] = [];
        snapshot.forEach((doc) => {
          const data = doc.data();
          contactData.push({
            id: doc.id,
            name: data.name,
            email: data.email,
            phone: data.phone,
            message: data.message,
            timestamp: data.timestamp,
            status: data.status || "new",
          });
        });
        onData(contactData);
      },
      (error) => {
        console.error("Error fetching contact requests:", error);
        onError(error);
      },
    );
  } catch (error) {
    console.error("Error setting up contact requests subscription:", error);
    onError(error as Error);
    return () => {}; // Return empty cleanup function
  }
};
