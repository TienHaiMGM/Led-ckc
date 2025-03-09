"use client";
import { useEffect, useState } from "react";
import { db } from "../../lib/firebase";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  setDoc,
  DocumentData,
  QueryDocumentSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import { ProductContent } from "@/types/product-management";
const mapFirestoreDoc = <T extends { id?: string }>(
  doc: QueryDocumentSnapshot<DocumentData>,
): T =>
  ({
    id: doc.id,
    ...doc.data(),
  }) as T;

const DeletedProducts = () => {
  const [deletedProducts, setDeletedProducts] = useState<ProductContent[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDeletedProducts = async () => {
      try {
        setLoading(true);
        const q = query(
          collection(db, "deletedProducts"),
          orderBy("hotness", "desc"),
        );
        const querySnapshot = await getDocs(q);
        const productsData = querySnapshot.docs.map((doc) =>
          mapFirestoreDoc<ProductContent>(doc),
        );
        setDeletedProducts(productsData);
      } catch (err) {
        setError("Lỗi khi tải dữ liệu");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDeletedProducts();
  }, []);

  // Hàm khôi phục sản phẩm
  const restoreProduct = async (product: ProductContent) => {
    try {
      if (product.id) {
        await setDoc(doc(db, "collections", product.id), product);
      } else {
        throw new Error("Product ID is undefined");
      }
      await deleteDoc(doc(db, "deletedProducts", product.id));
      setDeletedProducts(
        deletedProducts.filter((item) => item.id !== product.id),
      );
    } catch (error) {
      console.error("Lỗi khi khôi phục sản phẩm:", error);
    }
  };

  // Hàm xóa vĩnh viễn
  const permanentlyDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "deletedProducts", id));
      setDeletedProducts(deletedProducts.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Lỗi khi xóa vĩnh viễn sản phẩm:", error);
    }
  };

  return (
    <div className="p-6">
      <h2 className="mb-4 text-2xl font-bold">Sản phẩm đã xóa</h2>
      {deletedProducts.length === 0 ? (
        <p>Không có sản phẩm nào trong thùng rác.</p>
      ) : (
        <ul className="space-y-4">
          {deletedProducts.map((product) => (
            <li
              key={product.id}
              className="flex items-center justify-between rounded-lg border p-4"
            >
              <span>{product.title}</span>
              <span>{product.category}</span>
              <div className="space-x-2">
                <button
                  onClick={() => restoreProduct(product)}
                  className="rounded bg-green-500 px-4 py-2 text-white"
                >
                  Khôi phục
                </button>
                <button
                  onClick={() => product.id && permanentlyDelete(product.id)}
                  className="rounded bg-red-500 px-4 py-2 text-white"
                >
                  Xóa vĩnh viễn
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DeletedProducts;
