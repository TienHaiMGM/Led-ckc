"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";

interface Article {
  id: string;
  title: string;
  image: string;
  author: string;
  date: string;
  slug: string;
}

interface RelatedArticlesProps {
  fetchFunction: () => Promise<any[]>;
  currentId?: string;
  basePath: string;
}

const RelatedArticles: React.FC<RelatedArticlesProps> = ({
  fetchFunction,
  currentId,
  basePath,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        setLoading(true);
        const allData = await fetchFunction();
        const filteredArticles = allData
          .filter((item) => item.id !== currentId)
          .slice(0, 3)
          .map((item) => ({
            id: item.id!,
            title: item.title,
            image: item.image,
            author: item.author || "Unknown",
            date: item.createdAt
              ? new Date(item.createdAt).toLocaleDateString("vi-VN")
              : "Unknown date",
            slug: item.slug,
          }));
        setArticles(filteredArticles);
        setError(null);
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setError("Không thể tải bài viết liên quan");
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, [fetchFunction, currentId]);

  if (loading) {
    return <div className="text-center">Đang tải...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500">{error}</div>;
  }

  return (
    <div className="mx-auto mb-6 max-w-7xl px-4 sm:px-6 lg:px-8">
      <h3 className="mb-8 text-center text-2xl font-bold text-gray-800">
        Bài viết liên quan
      </h3>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {articles.map((article) => (
          <Link
            key={article.id}
            href={`${basePath}/${article.slug}`}
            className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-shadow duration-300 hover:scale-105 hover:shadow-xl"
          >
            <div className="relative h-48 w-full">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="bg-white p-4">
              <div className="mb-3 flex flex-row justify-between space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <FaUser className="mr-2" />
                  <span>{article.author}</span>
                </div>
                <div className="flex items-center">
                  <FaCalendarAlt className="mr-2" />
                  <span>{article.date}</span>
                </div>
              </div>
              <h4 className="line-clamp-2 text-lg font-semibold text-gray-800">
                {article.title}
              </h4>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default RelatedArticles;
