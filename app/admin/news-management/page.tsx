"use client";

import React, { useState, useEffect } from "react";
import { NewsArticle } from "../../../types/news-management";
import { NewsService } from "../../../components/api/NewsService";
import NewsEditor from "../../../components/editor/NewsEditor";
import NewsTable from "../../../components/editor/NewsTable";

const NewsManagementPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(
    null,
  );
  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const newsService = new NewsService();

  useEffect(() => {
    loadArticles();
  }, []);

  const loadArticles = async () => {
    try {
      setIsLoading(true);
      const fetchedArticles = await newsService.getAllArticles();
      setArticles(fetchedArticles);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load articles");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCreateNew = () => {
    setSelectedArticle(null);
    setIsEditing(true);
  };

  const handleEdit = (article: NewsArticle) => {
    setSelectedArticle(article);
    setIsEditing(true);
  };

  const handleDelete = async (article: NewsArticle) => {
    try {
      await newsService.deleteArticle(article.id);
      await loadArticles();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete article");
    }
  };

  const handleSave = async (article: NewsArticle) => {
    try {
      await newsService.saveArticle(article);
      setIsEditing(false);
      await loadArticles();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to save article");
    }
  };

  if (isEditing) {
    return (
      <div className="container mx-auto p-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">
            {selectedArticle ? "Chỉnh Sửa Bài Viết" : "Tạo Bài Viết Mới"}
          </h1>
          <button
            onClick={() => setIsEditing(false)}
            className="rounded-lg bg-gray-500 px-4 py-2 text-white hover:bg-gray-600"
          >
            Quay lại
          </button>
        </div>
        <NewsEditor
          initialData={selectedArticle || undefined}
          onSave={handleSave}
        />
      </div>
    );
  }

  return (
    <div className="container mx-auto p-6">
      <div className="mb-6">
        <div className="mb-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">Quản Lý Bài Viết</h1>
          <button
            onClick={handleCreateNew}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Tạo Bài Viết Mới
          </button>
        </div>

        {error && (
          <div className="mb-4 rounded-lg bg-red-50 p-4 text-red-600">
            {error}
          </div>
        )}

        {isLoading ? (
          <div className="py-12 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-r-transparent"></div>
            <p className="mt-2 text-gray-600">Đang tải...</p>
          </div>
        ) : (
          <div className="overflow-hidden rounded-lg bg-white shadow">
            <NewsTable
              articles={articles}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsManagementPage;
