"use client";
import React, { useState, useEffect } from "react";
import {
  News,
  getAllNews,
  addNews,
  updateNews,
  deleteNews,
} from "@/components/api/NewsService";
import NewsEditor from "@/components/editor/NewsEditor";
import DashboardLayout from "@/components/admin/DashboardLayout";
import ProtectedRoute from "@/components/auth/ProtectedRoute";
import { FaEdit, FaTrash } from "react-icons/fa";

export default function NewsContentPage() {
  const [news, setNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [editingNews, setEditingNews] = useState<News | null>(null);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const fetchedNews = await getAllNews();
      setNews(fetchedNews);
      setError(null);
    } catch (err) {
      console.error("Error fetching news:", err);
      setError("Có lỗi xảy ra khi tải tin tức");
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (newsData: News) => {
    try {
      setLoading(true);
      if (editingNews?.id) {
        await updateNews(editingNews.id, newsData);
      } else {
        await addNews(newsData);
      }
      await fetchNews();
      setEditingNews(null);
    } catch (err) {
      console.error("Error saving news:", err);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!window.confirm("Bạn có chắc chắn muốn xóa tin tức này?")) {
      return;
    }

    try {
      setLoading(true);
      await deleteNews(id);
      await fetchNews();
    } catch (err) {
      console.error("Error deleting news:", err);
      setError("Có lỗi xảy ra khi xóa tin tức");
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProtectedRoute>
      <DashboardLayout>
        <div className="container mx-auto p-6">
          <NewsEditor
            initialNews={editingNews || undefined}
            onSave={handleSave}
          />

          {error && (
            <div className="mb-4 rounded-lg bg-red-100 p-4 text-red-700">
              {error}
            </div>
          )}

          <div className="mt-8">
            <h2 className="mb-4 text-xl font-semibold">Danh sách tin tức</h2>
            <div className="overflow-x-auto rounded-lg bg-white shadow-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Tiêu đề
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Danh mục
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                      Ngày đăng
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
                  {news.map((item) => (
                    <tr key={item.id} className="hover:bg-gray-50">
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex items-center">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-10 w-10 rounded-full object-cover"
                          />
                          <div className="ml-4">
                            <div className="font-medium text-gray-900">
                              {item.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {item.category}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString("vi-VN")}
                      </td>
                      <td className="whitespace-nowrap px-6 py-4 text-sm">
                        <span
                          className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                            item.status === "published"
                              ? "bg-green-100 text-green-800"
                              : "bg-yellow-100 text-yellow-800"
                          }`}
                        >
                          {item.status === "published" ? "Đã đăng" : "Bản nháp"}
                        </span>
                      </td>
                      <td className="whitespace-nowrap px-6 py-4">
                        <div className="flex space-x-2">
                          <button
                            onClick={() => setEditingNews(item)}
                            className="text-blue-600 hover:text-blue-900"
                          >
                            <FaEdit className="h-5 w-5" />
                          </button>
                          <button
                            onClick={() => item.id && handleDelete(item.id)}
                            className="text-red-600 hover:text-red-900"
                          >
                            <FaTrash className="h-5 w-5" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </DashboardLayout>
    </ProtectedRoute>
  );
}
