"use client";
import React, { useState, useEffect } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  Firestore,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { useAuth } from "@/components/auth/AuthContext";
import DashboardLayout from "@/components/admin/DashboardLayout";

interface ContactRequest {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  createdAt: {
    toDate: () => Date;
  };
  status: "new" | "read" | "responded";
}

function ContactRequestsContent() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [updating, setUpdating] = useState<string | null>(null);
  const { user } = useAuth();

  useEffect(() => {
    if (!user) return; // Don't fetch data if not authenticated

    try {
      const contactsRef = collection(db as Firestore, "contact-requests");
      const q = query(contactsRef, orderBy("createdAt", "desc"));

      const unsubscribe = onSnapshot(
        q,
        (snapshot) => {
          const contactData: ContactRequest[] = [];
          snapshot.forEach((doc) => {
            const data = doc.data();
            contactData.push({
              id: doc.id,
              name: data.name,
              email: data.email,
              phone: data.phone,
              message: data.message,
              createdAt: data.createdAt,
              status: data.status || "new",
            });
          });
          setRequests(contactData);
          setLoading(false);
        },
        (error) => {
          console.error("Error fetching contact requests:", error);
          setError(error.message);
          setLoading(false);
        },
      );

      return () => unsubscribe();
    } catch (error) {
      console.error("Error setting up contact requests subscription:", error);
      setError(
        error instanceof Error ? error.message : "Unknown error occurred",
      );
      setLoading(false);
      return () => {};
    }
  }, [user]);

  const handleUpdateStatus = async (
    requestId: string,
    newStatus: "responded",
  ) => {
    if (!user) return; // Prevent actions if not authenticated

    try {
      setUpdating(requestId);
      const docRef = doc(db as Firestore, "contact-requests", requestId);
      await updateDoc(docRef, {
        status: newStatus,
      });
    } catch (error) {
      console.error("Error updating status:", error);
      alert("Có lỗi xảy ra khi cập nhật trạng thái");
    } finally {
      setUpdating(null);
    }
  };

  const handleDelete = async (requestId: string) => {
    if (!user) return; // Prevent actions if not authenticated

    if (!confirm("Bạn có chắc chắn muốn xóa yêu cầu này không?")) {
      return;
    }

    try {
      setUpdating(requestId);
      const docRef = doc(db as Firestore, "contact-requests", requestId);
      await deleteDoc(docRef);
    } catch (error) {
      console.error("Error deleting request:", error);
      alert("Có lỗi xảy ra khi xóa yêu cầu");
    } finally {
      setUpdating(null);
    }
  };

  if (loading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg">Đang tải dữ liệu...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div className="text-lg text-red-600">Lỗi: {error}</div>
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Danh sách yêu cầu liên hệ</h1>

      <div className="overflow-x-auto rounded-lg bg-white shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Thời gian
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Họ tên
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Email
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Số điện thoại
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Nội dung
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Trạng thái
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {requests.length > 0 ? (
              requests.map((request) => (
                <tr key={request.id} className="hover:bg-gray-50">
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {request.createdAt?.toDate().toLocaleString("vi-VN")}
                  </td>
                  <td className="px-6 py-4 text-sm">{request.name}</td>
                  <td className="px-6 py-4 text-sm">{request.email}</td>
                  <td className="px-6 py-4 text-sm">{request.phone}</td>
                  <td className="px-6 py-4">
                    <div className="max-w-xs overflow-hidden text-ellipsis whitespace-nowrap text-sm">
                      {request.message}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                        request.status === "new"
                          ? "bg-yellow-100 text-yellow-800"
                          : request.status === "read"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-green-100 text-green-800"
                      }`}
                    >
                      {request.status === "new"
                        ? "Mới"
                        : request.status === "read"
                          ? "Đã đọc"
                          : "Đã phản hồi"}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <div className="flex space-x-2">
                      {request.status !== "responded" && (
                        <button
                          onClick={() =>
                            handleUpdateStatus(request.id, "responded")
                          }
                          disabled={updating === request.id}
                          className="rounded bg-green-500 px-3 py-1 text-white hover:bg-green-600 disabled:opacity-50"
                        >
                          {updating === request.id
                            ? "Đang xử lý..."
                            : "Đánh dấu đã phản hồi"}
                        </button>
                      )}
                      <button
                        onClick={() => handleDelete(request.id)}
                        disabled={updating === request.id}
                        className="rounded bg-red-500 px-3 py-1 text-white hover:bg-red-600 disabled:opacity-50"
                      >
                        {updating === request.id ? "Đang xử lý..." : "Xóa"}
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={7}
                  className="px-6 py-4 text-center text-sm text-gray-500"
                >
                  Chưa có yêu cầu liên hệ nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function ContactRequestsPage() {
  return (
    <ProtectedRoute>
      <DashboardLayout>
        <ContactRequestsContent />
      </DashboardLayout>
    </ProtectedRoute>
  );
}
