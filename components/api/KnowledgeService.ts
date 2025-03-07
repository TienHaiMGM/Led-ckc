import { db } from "@/lib/firebase";
import {
  collection,
  getDocs,
  query,
  orderBy,
  where,
  limit,
  QueryDocumentSnapshot,
  DocumentData,
} from "firebase/firestore";
import { Knowledge } from "@/types/knowledge";
// Map Firestore document to local TypeScript type
const mapFirestoreDoc = (doc: QueryDocumentSnapshot<DocumentData>): Knowledge =>
  ({ id: doc.id, ...doc.data() }) as Knowledge;

/**
 * Fetch a single knowledge entry by slug.
 */
export const getKnowledgeBySlug = async (
  slug: string,
): Promise<Knowledge | null> => {
  try {
    const knowledgeRef = collection(db, "knowledge");
    const q = query(knowledgeRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);
    return querySnapshot.empty ? null : mapFirestoreDoc(querySnapshot.docs[0]);
  } catch (error) {
    console.error("Error fetching knowledge by slug:", error);
    throw new Error("Failed to fetch knowledge by slug");
  }
};

/**
 * Fetch related knowledge entries based on category & slug.
 */
export const getRelatedKnowledge = async (
  KnowledgeId: string,
  category: string,
  maxResults: number = 4,
): Promise<Knowledge[]> => {
  try {
    const knowledgeRef = collection(db, "knowledge");
    const q = query(
      knowledgeRef,
      where("category", "==", category),
      limit(maxResults), // 🔥 Firestore now limits results, reducing query cost
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs
      .map(mapFirestoreDoc)
      .filter((doc) => doc.id !== KnowledgeId); // 🔥 Filter after querying
  } catch (error) {
    console.error("Error fetching related knowledge:", error);
    throw new Error("Failed to fetch related knowledge");
  }
};
