import {
  collection,
  query,
  where,
  getDocs,
  addDoc,
  Timestamp,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const RATE_LIMIT = 5; // Maximum attempts per minute
const WINDOW_SIZE = 60 * 1000; // 1 minute in milliseconds

export async function checkRateLimit(ipAddress: string): Promise<boolean> {
  try {
    const now = Timestamp.now();
    const windowStart = new Timestamp(now.seconds - 60, now.nanoseconds);

    // Query recent submissions from this IP
    const rateLimitRef = collection(db, "rate-limits");
    const q = query(
      rateLimitRef,
      where("ipAddress", "==", ipAddress),
      where("timestamp", ">=", windowStart),
    );

    const querySnapshot = await getDocs(q);
    const recentAttempts = querySnapshot.size;

    // If under limit, record this attempt
    if (recentAttempts < RATE_LIMIT) {
      await addDoc(rateLimitRef, {
        ipAddress,
        timestamp: now,
      });
      return true;
    }

    return false;
  } catch (error) {
    console.error("Rate limit check failed:", error);
    return false;
  }
}
