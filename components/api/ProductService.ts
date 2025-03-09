import { db } from "@/lib/firebase";
import {
  collection,
  query,
  where,
  getDocs,
  DocumentData,
  QueryDocumentSnapshot,
  orderBy,
  limit,
} from "firebase/firestore";
import { Product } from "@/types/product";
// Map Firestore document to local TypeScript type
const mapFirestoreDoc = <T extends { id?: string }>(
  doc: QueryDocumentSnapshot<DocumentData>,
): T => ({ id: doc.id, ...doc.data() }) as T;

/**
 * Fetch a single product by slug.
 */
export const getProductBySlug = async (
  slug: string,
): Promise<Product | null> => {
  try {
    const productsRef = collection(db, "collections");
    const q = query(productsRef, where("slug", "==", slug));
    const querySnapshot = await getDocs(q);

    return querySnapshot.empty
      ? null
      : mapFirestoreDoc<Product>(querySnapshot.docs[0]);
  } catch (error) {
    console.error("Error fetching product:", error);
    throw new Error("Failed to fetch product");
  }
};

export const getProductByCategory = async (
  category: string,
  maxResults: number = 8,
): Promise<Product[]> => {
  try {
    const productsRef = collection(db, "collections");
    const q = query(
      productsRef,
      where("category", "==", category),
      orderBy("hotness", "desc"),
      limit(maxResults),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map((doc) => mapFirestoreDoc<Product>(doc));
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw new Error("Failed to fetch related products");
  }
};
/**
 * Fetch related products based on category, excluding the current product.
 */
export const getRelatedProducts = async (
  productId: string,
  category: string,
  maxResults: number = 4,
): Promise<Product[]> => {
  try {
    const productsRef = collection(db, "collections");
    const q = query(
      productsRef,
      where("category", "==", category),
      orderBy("hotness", "desc"),
      limit(maxResults),
    );
    const querySnapshot = await getDocs(q);

    return querySnapshot.docs
      .filter((doc) => doc.id !== productId) // Lọc trên client-side
      .map((doc) => mapFirestoreDoc<Product>(doc));
  } catch (error) {
    console.error("Error fetching related products:", error);
    throw new Error("Failed to fetch related products");
  }
};

// 🔥 Lấy danh sách slug của tất cả sản phẩm
export async function getAllProductSlugs() {
  const querySnapshot = await getDocs(collection(db, "products"));
  return querySnapshot.docs.map((doc) => doc.id); // Trả về danh sách slug (ID sản phẩm)
}
