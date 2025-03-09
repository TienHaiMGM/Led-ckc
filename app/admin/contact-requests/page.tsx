"use client";
import React, { useState, useEffect, useCallback, useMemo } from "react";
import { db } from "@/lib/firebase";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  doc,
  updateDoc,
  deleteDoc,
} from "firebase/firestore";

import DashboardLayout from "@/components/admin/DashboardLayout";
import { useAuth } from "@/components/admin/auth/AuthContext";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";
import classNames from "classnames";

// Interface
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

// Component hàng trong bảng
const ContactRow: React.FC<{
  request: ContactRequest;
  onUpdateStatus: (id: string, newStatus: "responded") => Promise<void>;
  onDelete: (id: string) => Promise<void>;
  updating: boolean;
}> = ({ request, onUpdateStatus, onDelete, updating }) => {
  return (
    <tr className="h-20 hover:bg-gray-50">
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
          className={classNames(
            "mr-2 rounded px-2 py-1 text-white",
            updating ? "bg-gray-400 opacity-50" : "bg-blue-500",
          )}
        >
          {updating ? "Đang cập nhật..." : "Update"}
        </button>
        <button
          onClick={() => onDelete(request.id)}
          disabled={updating}
          className={classNames(
            "rounded px-2 py-1 text-white",
            updating ? "bg-gray-400 opacity-50" : "bg-red-500",
          )}
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
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [updatingIds, setUpdatingIds] = useState<Record<string, boolean>>({});

  const { user } = useAuth();

  useEffect(() => {
    if (!user) {
      setLoading(false);
      return;
    }

    const q = query(
      collection(db, "contact-requests"),
      orderBy("createdAt", "desc"),
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const contactData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as ContactRequest[];

        setRequests((prev) =>
          JSON.stringify(prev) === JSON.stringify(contactData)
            ? prev
            : contactData,
        );
        setLoading(false);
      },
      (err) => {
        console.error("Error fetching contact requests:", err);
        setErrorMessage("Không thể tải dữ liệu.");
        setLoading(false);
      },
    );

    return () => unsubscribe();
  }, [user]);

  const handleUpdateStatus = useCallback(
    async (requestId: string, newStatus: "responded") => {
      if (!user) return;

      setUpdatingIds((prev) => ({ ...prev, [requestId]: true }));
      try {
        await updateDoc(doc(db, "contact-requests", requestId), {
          status: newStatus,
        });
      } catch (error) {
        setErrorMessage("Lỗi khi cập nhật trạng thái.");
      } finally {
        setUpdatingIds((prev) => ({ ...prev, [requestId]: false }));
      }
    },
    [user],
  );

  const handleDelete = useCallback(
    async (requestId: string) => {
      if (!user || !confirm("Bạn có chắc chắn muốn xóa yêu cầu này không?"))
        return;

      setUpdatingIds((prev) => ({ ...prev, [requestId]: true }));
      try {
        await deleteDoc(doc(db, "contact-requests", requestId));
      } catch (error) {
        setErrorMessage("Lỗi khi xóa yêu cầu.");
      } finally {
        setUpdatingIds((prev) => ({ ...prev, [requestId]: false }));
      }
    },
    [user],
  );

  const memoizedRequests = useMemo(() => requests, [requests]);

  return (
    <div className="container mx-auto p-6">
      <h1 className="mb-6 text-2xl font-bold">Danh sách yêu cầu liên hệ</h1>

      {errorMessage && <div className="mb-4 text-red-500">{errorMessage}</div>}

      <div className="overflow-x-auto rounded-lg bg-white p-4 shadow">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {[
                "Thời gian",
                "Họ tên",
                "Email",
                "Số điện thoại",
                "Nội dung",
                "Trạng thái",
                "Thao tác",
              ].map((col) => (
                <th key={col} className="px-4 py-2">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 bg-white">
            {loading ? (
              [...Array(5)].map((_, index) => (
                <tr key={index} className="animate-pulse">
                  {[...Array(7)].map((__, i) => (
                    <td key={i} className="px-4 py-2">
                      <div className="h-4 w-full rounded bg-gray-300"></div>
                    </td>
                  ))}
                </tr>
              ))
            ) : memoizedRequests.length > 0 ? (
              memoizedRequests.map((request) => (
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
