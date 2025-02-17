import { db } from "../../lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  Firestore,
  DocumentData,
} from "firebase/firestore";

export interface Product {
  id: string;
  title: string;
  description?: string;
  image: string;
  images?: string;
  additionalImages?: string[];
  price: number;
  category: string;
  slug: string;
  content: string;
  createdAt?: any;
  updatedAt?: any;
  status?: string;
  tags?: string[];
}

export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  try {
    const productsRef = collection(db as Firestore, "collections");
    const q = query(productsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) {
      return null;
    }

    const doc = querySnapshot.docs[0];
    const data = doc.data() as DocumentData;

    return {
      id: doc.id,
      title: data.title,
      description: data.description,
      image: data.image || data.images, // Handle both image and images fields
      additionalImages: data.additionalImages || [],
      price: data.price,
      category: data.category,
      slug: data.slug,
      content: data.content,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      status: data.status,
      tags: data.tags || [],
    };
  } catch (error) {
    console.error("Error fetching product:", error);
    throw error;
  }
};

export const getAllProducts = async (): Promise<Product[]> => {
  try {
    const productsRef = collection(db as Firestore, "collections");
    const querySnapshot = await getDocs(productsRef);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as DocumentData;
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        image: data.image || data.images,
        additionalImages: data.additionalImages || [],
        price: data.price,
        category: data.category,
        slug: data.slug,
        content: data.content,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        status: data.status,
        tags: data.tags || [],
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
