import { db } from "../../lib/firebase";
import {
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDocs,
  query,
  orderBy,
  where,
  Firestore,
} from "firebase/firestore";

export interface Knowledge {
  id?: string;
  title: string;
  description?: string;
  content: string;
  image: string;
  slug: string;
  category?: string;
  tags?: string[];
  author?: string;
  createdAt?: any;
  updatedAt?: any;
  status?: "draft" | "published";
  educationalLevel?: "beginner" | "intermediate" | "advanced";
  readingTime?: number;
}

export const addKnowledge = async (knowledgeData: Omit<Knowledge, "id">) => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const docRef = await addDoc(knowledgeRef, {
      ...knowledgeData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding knowledge:", error);
    throw error;
  }
};

export const updateKnowledge = async (
  id: string,
  knowledgeData: Partial<Knowledge>,
) => {
  try {
    const knowledgeRef = doc(db as Firestore, "knowledge", id);
    await updateDoc(knowledgeRef, {
      ...knowledgeData,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating knowledge:", error);
    throw error;
  }
};

export const deleteKnowledge = async (id: string) => {
  try {
    const knowledgeRef = doc(db as Firestore, "knowledge", id);
    await deleteDoc(knowledgeRef);
  } catch (error) {
    console.error("Error deleting knowledge:", error);
    throw error;
  }
};

export const getAllKnowledge = async (): Promise<Knowledge[]> => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const q = query(knowledgeRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Knowledge,
    );
  } catch (error) {
    console.error("Error fetching knowledge:", error);
    throw error;
  }
};

export const getKnowledgeBySlug = async (
  slug: string,
): Promise<Knowledge | null> => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const q = query(knowledgeRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    } as Knowledge;
  } catch (error) {
    console.error("Error fetching knowledge by slug:", error);
    throw error;
  }
};

export const getKnowledgeByCategory = async (
  category: string,
): Promise<Knowledge[]> => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const q = query(
      knowledgeRef,
      where("category", "==", category),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Knowledge,
    );
  } catch (error) {
    console.error("Error fetching knowledge by category:", error);
    throw error;
  }
};

export const getPublishedKnowledge = async (): Promise<Knowledge[]> => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const q = query(
      knowledgeRef,
      where("status", "==", "published"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Knowledge,
    );
  } catch (error) {
    console.error("Error fetching published knowledge:", error);
    throw error;
  }
};

export const getKnowledgeByTag = async (tag: string): Promise<Knowledge[]> => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const q = query(
      knowledgeRef,
      where("tags", "array-contains", tag),
      where("status", "==", "published"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Knowledge,
    );
  } catch (error) {
    console.error("Error fetching knowledge by tag:", error);
    throw error;
  }
};

export const getRelatedKnowledge = async (
  currentSlug: string,
  category: string,
  limit: number = 3,
): Promise<Knowledge[]> => {
  try {
    const knowledgeRef = collection(db as Firestore, "knowledge");
    const q = query(
      knowledgeRef,
      where("category", "==", category),
      where("status", "==", "published"),
      where("slug", "!=", currentSlug),
      orderBy("slug"),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs
      .map(
        (doc) =>
          ({
            id: doc.id,
            ...doc.data(),
          }) as Knowledge,
      )
      .slice(0, limit);
  } catch (error) {
    console.error("Error fetching related knowledge:", error);
    throw error;
  }
};
