"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// import { NewsArticle, NEWS_CATEGORIES } from "@/types/news-management";
import NewsService from "../../components/api/NewsService";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Breadcrumb from "@/components/common/Breadcrumb";

const NewsPage = () => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [featuredArticles, setFeaturedArticles] = useState<NewsArticle[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadArticles();
  }, [selectedCategory]);

  const loadArticles = async () => {
    try {
      setIsLoading(true);
      const [featured, regular] = await Promise.all([
        newsService.getFeaturedArticles(),
        selectedCategory === "all"
          ? newsService.getPublishedArticles()
          : newsService.getArticlesByCategory(selectedCategory),
      ]);
      setFeaturedArticles(featured);
      setArticles(
        regular.filter((article) => !featured.find((f) => f.id === article.id)),
      );
    } catch (error) {
      console.error("Failed to load articles:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />

      <main className="container mx-auto flex-grow px-4 py-8">
        <Breadcrumb />

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <section className="mb-12">
            <h2 className="mb-6 text-2xl font-bold">Bài Viết Nổi Bật</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {featuredArticles.map((article) => (
                <Link
                  key={article.id}
                  href={`/tin-tuc/${article.slug}`}
                  className="group block overflow-hidden rounded-lg bg-white shadow-lg transition hover:shadow-xl"
                >
                  <div className="relative h-48">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover transition group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                      {NEWS_CATEGORIES.find(
                        (cat) => cat.id === article.category,
                      )?.name || article.category}
                    </span>
                    <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                      {article.title}
                    </h3>
                    <p className="mb-4 line-clamp-2 text-gray-600">
                      {article.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>{formatDate(article.publishDate)}</span>
                      <span>{article.views} lượt xem</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setSelectedCategory("all")}
              className={`rounded-full px-4 py-2 ${
                selectedCategory === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Tất cả
            </button>
            {NEWS_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`rounded-full px-4 py-2 ${
                  selectedCategory === category.id
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Articles List */}
        {isLoading ? (
          <div className="py-12 text-center">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-r-transparent"></div>
            <p className="mt-2 text-gray-600">Đang tải...</p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((article) => (
              <Link
                key={article.id}
                href={`/tin-tuc/${article.slug}`}
                className="group block overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
              >
                <div className="relative h-48">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover transition group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <span className="mb-2 inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                    {NEWS_CATEGORIES.find((cat) => cat.id === article.category)
                      ?.name || article.category}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 group-hover:text-blue-600">
                    {article.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-gray-600">
                    {article.description}
                  </p>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{formatDate(article.publishDate)}</span>
                    <span>{article.views} lượt xem</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {!isLoading && articles.length === 0 && (
          <div className="py-12 text-center text-gray-500">
            Không có bài viết nào trong danh mục này
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default NewsPage;
