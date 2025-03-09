import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
  limit,
  orderBy,
} from "firebase/firestore";
import { News } from "@/types/news";
// Map Firestore document to local TypeScript type
const mapFirestoreDoc = <T extends { id?: string }>(
  doc: QueryDocumentSnapshot<DocumentData>,
): T => ({ id: doc.id, ...doc.data() }) as T;

export const getAllNews = async (): Promise<News | null> => {
  try {
    const newsRef = collection(db, "newItems");
    const q = query(newsRef, orderBy("hotness", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.empty
      ? null
      : mapFirestoreDoc<News>(querySnapshot.docs[0]);
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch news");
  }
};
/**
 * Fetch a single new by slug.
 */
export const getNewsBySlug = async (slug: string): Promise<News | null> => {
  try {
    const newsRef = collection(db, "newItems");
    const q = query(newsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    return querySnapshot.empty
      ? null
      : mapFirestoreDoc<News>(querySnapshot.docs[0]);
  } catch (error) {
    console.error("Error fetching news:", error);
    throw new Error("Failed to fetch news");
  }
};

/**
 * Fetch related news based on category, excluding the current new.
 */
export const getRelatedNews = async (
  newsId: string,
  category: string,
  maxResults: number = 4,
): Promise<News[]> => {
  try {
    const newsRef = collection(db, "newItems");
    const q = query(
      newsRef,
      where("category", "==", category),
      orderBy("hotness", "desc"),
      limit(maxResults),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs
      .filter((doc) => doc.id !== newsId) // Lọc trên client-side
      .map((doc) => mapFirestoreDoc<News>(doc));
  } catch (error) {
    console.error("Error fetching related news:", error);
    throw new Error("Failed to fetch related news");
  }
};
