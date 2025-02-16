"use client";
import React, { useState, useEffect, useCallback } from "react";
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

// Interface to define the structure of a contact request
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

// Component riêng cho một hàng của bảng
interface ContactRowProps {
  request: ContactRequest;
  onUpdateStatus: (id: string, newStatus: "responded") => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  updating: boolean;
}

const ContactRow: React.FC<ContactRowProps> = ({
  request,
  onUpdateStatus,
  onDelete,
  updating,
}) => {
  return (
    <tr className="hover:bg-gray-50">
      <td>{request.createdAt?.toDate().toLocaleString("vi-VN")}</td>
      <td>{request.name}</td>
      <td>{request.email}</td>
      <td>{request.phone}</td>
      <td>{request.message}</td>
      <td>
        <span>{request.status === "new" ? "Mới" : request.status}</span>
      </td>
      <td>
        <button
          onClick={() => onUpdateStatus(request.id, "responded")}
          disabled={updating}
          className="mr-2 rounded bg-blue-500 px-2 py-1 text-white disabled:opacity-50"
        >
          {updating ? "Đang cập nhật..." : "Update"}
        </button>
        <button
          onClick={() => onDelete(request.id)}
          disabled={updating}
          className="rounded bg-red-500 px-2 py-1 text-white disabled:opacity-50"
        >
          {updating ? "Đang xóa..." : "Delete"}
        </button>
      </td>
    </tr>
  );
};

function ContactRequestsContent() {
  const [requests, setRequests] = useState<ContactRequest[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Sử dụng object để theo dõi trạng thái updating của từng request
  const [updatingIds, setUpdatingIds] = useState<Record<string, boolean>>({});

  const { user } = useAuth();

  useEffect(() => {
    if (!user) return;

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
      (err) => {
        console.error("Error fetching contact requests:", err);
        setError(err.message);
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [user]);

  const handleUpdateStatus = useCallback(
    async (requestId: string, newStatus: "responded") => {
      if (!user) return;

      setUpdatingIds((prev) => ({ ...prev, [requestId]: true }));
      const docRef = doc(db as Firestore, "contact-requests", requestId);
      try {
        await updateDoc(docRef, { status: newStatus });
      } catch (error: any) {
        console.error("Error updating status:", error);
        alert("Có lỗi xảy ra khi cập nhật trạng thái");
      } finally {
        setUpdatingIds((prev) => ({ ...prev, [requestId]: false }));
      }
    },
    [user],
  );

  const handleDelete = useCallback(
    async (requestId: string) => {
      if (!user) return;
      if (!confirm("Bạn có chắc chắn muốn xóa yêu cầu này không?")) return;

      setUpdatingIds((prev) => ({ ...prev, [requestId]: true }));
      const docRef = doc(db as Firestore, "contact-requests", requestId);
      try {
        await deleteDoc(docRef);
      } catch (error: any) {
        console.error("Error deleting request:", error);
        alert("Có lỗi xảy ra khi xóa yêu cầu");
      } finally {
        setUpdatingIds((prev) => ({ ...prev, [requestId]: false }));
      }
    },
    [user],
  );

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
              <th className="px-4 py-2">Thời gian</th>
              <th className="px-4 py-2">Họ tên</th>
              <th className="px-4 py-2">Email</th>
              <th className="px-4 py-2">Số điện thoại</th>
              <th className="px-4 py-2">Nội dung</th>
              <th className="px-4 py-2">Trạng thái</th>
              <th className="px-4 py-2">Thao tác</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {requests.length > 0 ? (
              requests.map((request) => (
                <ContactRow
                  key={request.id}
                  request={request}
                  onUpdateStatus={handleUpdateStatus}
                  onDelete={handleDelete}
                  updating={!!updatingIds[request.id]}
                />
              ))
            ) : (
              <tr>
                <td colSpan={7} className="p-4 text-center">
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
