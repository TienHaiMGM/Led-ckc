import { db } from "../../lib/firebase";
import { Product } from "../../types/product";
import {
  collection,
  query,
  where,
  getDocs,
  Firestore,
  DocumentData,
} from "firebase/firestore";

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
      content: data.content,
      images: data.images || data.image,
      category: data.category,
      slug: data.slug,
      tags: data.tags || [],
      status: data.status,
      createdAt: data.createdAt,
      updatedAt: data.updatedAt,
      seoTitle: data.seoTitle,
      seoDescription: data.seoDescription,
      featuredImage: data.featuredImage,
      thumbnail: data.thumbnail,
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
        content: data.content,
        images: data.images || data.image,
        category: data.category,
        slug: data.slug,
        tags: data.tags || [],
        status: data.status,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        featuredImage: data.featuredImage,
        thumbnail: data.thumbnail,
      };
    });
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const getRelatedProducts = async (
  productId: string,
  category: string,
): Promise<Product[]> => {
  try {
    const productsRef = collection(db as Firestore, "collections");
    const q = query(
      productsRef,
      where("category", "==", category),
      where("__name__", "!=", productId),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => {
      const data = doc.data() as DocumentData;
      return {
        id: doc.id,
        title: data.title,
        description: data.description,
        content: data.content,
        images: data.images || data.image,
        category: data.category,
        slug: data.slug,
        tags: data.tags || [],
        status: data.status,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt,
        seoTitle: data.seoTitle,
        seoDescription: data.seoDescription,
        featuredImage: data.featuredImage,
        thumbnail: data.thumbnail,
      };
    });
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw error;
  }
};
