"use client";

import React, { useState, useEffect } from "react";
import DashboardLayout from "../../../components/admin/DashboardLayout";

import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import { db } from "../../../lib/firebase";
import ProtectedRoute from "@/components/admin/auth/ProtectedRoute";

interface Subscription {
  id: string;
  email: string;
  createdAt: any;
  status: string;
}

export default function NewsletterSubscription() {
  const [subscriptions, setSubscriptions] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Create a query to get all subscriptions, ordered by creation date
    const q = query(
      collection(db, "newsletter-subscriptions"),
      orderBy("createdAt", "desc"),
    );

    // Set up real-time listener
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const subscriptionData: Subscription[] = [];
      querySnapshot.forEach((doc) => {
        subscriptionData.push({
          id: doc.id,
          ...doc.data(),
        } as Subscription);
      });
      setSubscriptions(subscriptionData);
      setLoading(false);
    });

    // Cleanup subscription on unmount
    return () => unsubscribe();
  }, []);

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="container mx-auto p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold text-gray-800">
              Danh Sách Đăng Ký Nhận Tin
            </h1>
            <p className="text-gray-600">
              Quản lý danh sách email đăng ký nhận tin tức và kiến thức
            </p>
          </div>

          {loading ? (
            <div className="flex items-center justify-center py-8">
              <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
            </div>
          ) : (
            <div className="overflow-x-auto rounded-lg border bg-white shadow">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Email
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Ngày Đăng Ký
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Trạng Thái
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 bg-white">
                  {subscriptions.map((subscription) => (
                    <tr key={subscription.id}>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {subscription.email}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="text-sm text-gray-900">
                          {subscription.createdAt
                            ?.toDate()
                            .toLocaleDateString("vi-VN", {
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <span
                          className={`inline-flex rounded-full px-2 text-xs font-semibold leading-5 ${
                            subscription.status === "active"
                              ? "bg-green-100 text-green-800"
                              : "bg-gray-100 text-gray-800"
                          }`}
                        >
                          {subscription.status === "active"
                            ? "Đang hoạt động"
                            : "Không hoạt động"}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {subscriptions.length === 0 && (
                <div className="py-8 text-center text-gray-500">
                  Chưa có email đăng ký nhận tin
                </div>
              )}
            </div>
          )}
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
