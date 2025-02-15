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
  DocumentData,
} from "firebase/firestore";

export interface News {
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
}

export const addNews = async (newsData: Omit<News, "id">) => {
  try {
    const newsRef = collection(db as Firestore, "news");
    const docRef = await addDoc(newsRef, {
      ...newsData,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });
    return docRef.id;
  } catch (error) {
    console.error("Error adding news:", error);
    throw error;
  }
};

export const updateNews = async (id: string, newsData: Partial<News>) => {
  try {
    const newsRef = doc(db as Firestore, "news", id);
    await updateDoc(newsRef, {
      ...newsData,
      updatedAt: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error updating news:", error);
    throw error;
  }
};

export const deleteNews = async (id: string) => {
  try {
    const newsRef = doc(db as Firestore, "news", id);
    await deleteDoc(newsRef);
  } catch (error) {
    console.error("Error deleting news:", error);
    throw error;
  }
};

export const getAllNews = async (): Promise<News[]> => {
  try {
    const newsRef = collection(db as Firestore, "news");
    const q = query(newsRef, orderBy("createdAt", "desc"));
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as News,
    );
  } catch (error) {
    console.error("Error fetching news:", error);
    throw error;
  }
};

export const getNewsBySlug = async (slug: string): Promise<News | null> => {
  try {
    const newsRef = collection(db as Firestore, "news");
    const q = query(newsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    return {
      id: doc.id,
      ...doc.data(),
    } as News;
  } catch (error) {
    console.error("Error fetching news by slug:", error);
    throw error;
  }
};

export const getNewsByCategory = async (category: string): Promise<News[]> => {
  try {
    const newsRef = collection(db as Firestore, "news");
    const q = query(
      newsRef,
      where("category", "==", category),
      orderBy("createdAt", "desc"),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as News,
    );
  } catch (error) {
    console.error("Error fetching news by category:", error);
    throw error;
  }
};
