"use client";
import { useEffect, useState, useCallback } from "react";
import { db } from "@/lib/firebase";
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
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import DashboardLayout from "@/components/admin/DashboardLayout";

// Định nghĩa kiểu dữ liệu chung
interface DeletedItem {
  id?: string;
  title: string;
  hotness?: number;
  createdAt?: string;
}

// Hàm ánh xạ dữ liệu từ Firestore
const mapFirestoreDoc = <T extends { id?: string }>(
  doc: QueryDocumentSnapshot<DocumentData>,
): T =>
  ({
    id: doc.id,
    ...doc.data(),
  }) as T;

const DeletedItems = () => {
  const [deletedItems, setDeletedItems] = useState<DeletedItem[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<
    "deletedProducts" | "deletedNews" | "deletedKnowledges"
  >("deletedProducts"); // Mặc định là sản phẩm đã xóa
  const [deleteCategory, setDeleteCategory] = useState<
    "collections" | "newItems" | "knowledge"
  >("collections"); // Mặc định là sản phẩm đã xóa

  // Hàm fetch dữ liệu từ collection tương ứng
  const fetchDeletedItems = useCallback(async () => {
    try {
      setLoading(true);
      const q = query(
        collection(db, selectedCategory),
        orderBy("hotness", "desc"),
      );
      const querySnapshot = await getDocs(q);
      setDeletedItems(querySnapshot.docs.map(mapFirestoreDoc<DeletedItem>));
    } catch (err) {
      setError("Lỗi khi tải dữ liệu");
      console.error("Error fetching deleted items:", err);
    } finally {
      setLoading(false);
    }
  }, [selectedCategory]); // Thay đổi collection khi danh mục thay đổi

  useEffect(() => {
    fetchDeletedItems();
  }, [fetchDeletedItems]);

  // Hàm khôi phục nội dung về đúng nơi
  const restoreItem = async (item: DeletedItem) => {
    if (!item.id) return;
    setDeletedItems((prev) => prev.filter((i) => i.id !== item.id)); // Optimistic UI

    try {
      await setDoc(doc(db, deleteCategory, item.id), item); // Khôi phục vào đúng collection
      await deleteDoc(doc(db, selectedCategory, item.id)); // Xóa khỏi thùng rác
    } catch (error) {
      console.error("Lỗi khi khôi phục:", error);
      setDeletedItems((prev) => [...prev, item]); // Rollback nếu lỗi
    }
  };

  // Hàm xóa vĩnh viễn
  const permanentlyDelete = async (id: string) => {
    setDeletedItems((prev) => prev.filter((i) => i.id !== id)); // Optimistic UI

    try {
      await deleteDoc(doc(db, selectedCategory, id));
    } catch (error) {
      console.error("Lỗi khi xóa vĩnh viễn:", error);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="p-6">
          <h2 className="mb-4 text-2xl font-bold">Nội dung đã xóa</h2>

          {/* Bộ lọc danh mục */}
          <div className="mb-4 flex space-x-2">
            {[
              {
                key: "deletedProducts",
                label: "Sản phẩm",
                value: "collections",
              },
              { key: "deletedNews", label: "Tin tức", value: "newItems" },
              {
                key: "deletedKnowledges",
                label: "Kiến thức",
                value: "knowledge",
              },
            ].map(({ key, label, value }) => (
              <button
                key={key}
                onClick={() => {
                  setSelectedCategory(key as any);
                  setDeleteCategory(
                    value as "collections" | "newItems" | "knowledge",
                  );
                }}
                className={`rounded px-4 py-2 ${
                  selectedCategory === key
                    ? "bg-blue-500 text-white"
                    : "bg-gray-200"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Bảng hiển thị dữ liệu */}
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200">
              {/* Tiêu đề bảng (thead) */}
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="border border-gray-300 px-4 py-2">Tiêu đề</th>
                  <th className="border border-gray-300 px-4 py-2">Ngày xóa</th>
                  <th className="border border-gray-300 px-4 py-2">Thao tác</th>
                </tr>
              </thead>
              {/* Nội dung bảng (tbody) */}
              <tbody>
                {loading ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center">
                      Đang tải dữ liệu...
                    </td>
                  </tr>
                ) : deletedItems.length === 0 ? (
                  <tr>
                    <td colSpan={4} className="p-4 text-center">
                      Không có nội dung nào trong thùng rác.
                    </td>
                  </tr>
                ) : (
                  deletedItems.map((item) => (
                    <tr key={item.id} className="border border-gray-300">
                      <td className="border border-gray-300 px-4 py-2">
                        {item.title}
                      </td>

                      <td className="border border-gray-300 px-4 py-2">
                        {item.createdAt || "Không có dữ liệu"}
                      </td>
                      <td className="border border-gray-300 px-4 py-2">
                        <button
                          onClick={() => restoreItem(item)}
                          className="mr-2 rounded bg-green-500 px-3 py-1 text-white"
                        >
                          Khôi phục
                        </button>
                        <button
                          onClick={() => item.id && permanentlyDelete(item.id)}
                          className="rounded bg-red-500 px-3 py-1 text-white"
                        >
                          Xóa vĩnh viễn
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
};

export default DeletedItems;
