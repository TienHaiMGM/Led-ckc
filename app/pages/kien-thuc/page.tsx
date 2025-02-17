"use client";

import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import NewsletterSubscription from "../../../components/common/NewsletterSubscription";
import Header from "../../../components/common/Header";
import Menu from "../../../components/common/Menu";
import Footer from "../../../components/common/Footer";
import SocialButtons from "../../../components/common/SocialButtons";
import Breadcrumb from "../../../components/common/Breadcrumb";
import JsonLdWrapper from "../../../components/common/JsonLdWrapper";
import { EditorProps } from "../../../types/product-management";
import { useProductEditorKnowLedge } from "../../../components/api/hooks/useProductEditorKnowLedge";
import "../../styles/gradient.css";

const getSchemaData = (articles: any[]) => ({
  "@context": "https://schema.org",
  "@type": "SpecialAnnouncement",
  category: "https://www.wikidata.org/wiki/Q309845",
  name: "Kiến Thức Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu",
  text: "Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo.",
  announcementLocation: {
    "@type": "LocalBusiness",
    name: "Siêu Thị Bảng Hiệu",
    "@id": "https://sieuthibanghieu.vn",
    image: "https://sieuthibanghieu.vn/images/logo_sieuthibanghieu.png",
    address: {
      "@type": "PostalAddress",
      addressCountry: "VN",
      addressLocality: "Hồ Chí Minh",
    },
    priceRange: "$$",
  },
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://sieuthibanghieu.vn/pages/kien-thuc",
  },
  subjectOf: {
    "@type": "CreativeWork",
    name: "Kiến thức chuyên ngành bảng hiệu",
    abstract:
      "Tổng hợp kiến thức chuyên sâu về thiết kế và thi công bảng hiệu quảng cáo",
    author: {
      "@type": "Organization",
      name: "Siêu Thị Bảng Hiệu",
    },
  },
  about: {
    "@type": "Thing",
    name: "Bảng hiệu quảng cáo",
    description:
      "Kiến thức chuyên sâu về thiết kế, thi công và công nghệ bảng hiệu",
  },
  hasPart: articles.map((article) => ({
    "@type": "TechArticle",
    headline: article.title,
    description: article.description,
    image: article.images,
    datePublished: new Date(article.createdAt).toISOString(),
    dateModified: new Date(
      article.updatedAt || article.createdAt,
    ).toISOString(),
    author: {
      "@type": "Organization",
      name: "Siêu Thị Bảng Hiệu",
    },
    publisher: {
      "@type": "Organization",
      name: "Siêu Thị Bảng Hiệu",
      logo: {
        "@type": "ImageObject",
        url: "https://sieuthibanghieu.vn/images/logo_sieuthibanghieu.png",
      },
    },
    articleSection: article.category,
    url: `https://sieuthibanghieu.vn/bai-viet/${article.slug}`,
    keywords: [
      "bảng hiệu",
      "thiết kế",
      "thi công",
      "công nghệ LED",
      article.category,
    ],
    inLanguage: "vi-VN",
    isFamilyFriendly: true,
    educationalLevel: "beginner",
    audience: {
      "@type": "BusinessAudience",
      audienceType: "business owners",
    },
  })),
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Trang chủ",
        item: "https://sieuthibanghieu.vn",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Kiến thức",
        item: "https://sieuthibanghieu.vn/pages/kien-thuc",
      },
    ],
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate:
        "https://sieuthibanghieu.vn/pages/kien-thuc?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
});

const ITEMS_PER_PAGE = 12;

const KnowledgePage: React.FC<EditorProps> = ({ EditorContent }) => {
  const { products, loading, error, generateSlug } =
    useProductEditorKnowLedge(EditorContent);
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [searchTerm, setSearchTerm] = useState("");

  // Add dynamic meta description based on viewport
  useEffect(() => {
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=device-width, initial-scale=1.0, maximum-scale=5.0",
      );
    }
  }, []);

  // Filter items by category and search term
  const filteredItems = products
    .filter(
      (item) =>
        selectedCategory === "Tất cả" || item.category === selectedCategory,
    )
    .filter(
      (item) =>
        searchTerm === "" ||
        item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.description.toLowerCase().includes(searchTerm.toLowerCase()),
    );

  // Calculate pagination
  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = filteredItems.slice(startIndex, endIndex);

  // Get unique categories
  const categories = [
    "Tất cả",
    ...Array.from(new Set(products.map((item) => item.category))),
  ];

  // Handle category change
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  // Generate pagination array
  const generatePaginationArray = () => {
    const delta = 2;
    const range = [];
    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      range.push(i);
    }

    if (currentPage - delta > 2) range.unshift("...");
    if (currentPage + delta < totalPages - 1) range.push("...");

    range.unshift(1);
    if (totalPages > 1) range.push(totalPages);

    return range;
  };

  return (
    <>
      <Head>
        <title>Kiến Thức Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu</title>
        <meta
          name="description"
          content="Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo. Cập nhật xu hướng và công nghệ mới nhất trong ngành."
        />
        <meta
          name="keywords"
          content="kiến thức bảng hiệu, thiết kế bảng hiệu, thi công bảng hiệu, công nghệ LED, xu hướng quảng cáo"
        />
        <meta
          property="og:title"
          content="Kiến Thức Bảng Hiệu & Quảng Cáo | Siêu Thị Bảng Hiệu"
        />
        <meta
          property="og:description"
          content="Tổng hợp kiến thức chuyên sâu về thiết kế, thi công bảng hiệu quảng cáo. Cập nhật xu hướng và công nghệ mới nhất trong ngành."
        />
        <meta property="og:image" content="/images/sieuthibanghieu.jpg" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=5.0"
        />
        <link
          rel="canonical"
          href="https://sieuthibanghieu.vn/pages/kien-thuc"
        />
      </Head>

      <div className="flex min-h-screen flex-col">
        <Header showSearch={false} />
        <Menu />

        <main className="flex-grow">
          {/* Hero Section */}
          <section className="relative py-16 md:py-20 lg:py-24">
            {/* Background with overlay */}
            <div className="absolute inset-0 h-full w-full">
              <div className="absolute inset-0 bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#4f46e5]"></div>
            </div>

            {/* Content */}
            <div className="container relative z-10 mx-auto px-4">
              <div className="mx-auto max-w-4xl text-center">
                <h1 className="mb-6 text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
                  Kiến thức chuyên sâu
                </h1>
                <p className="mb-8 text-lg leading-relaxed text-gray-100 md:text-xl">
                  Khám phá những xu hướng mới nhất về bảng hiệu quảng cáo, công
                  nghệ LED và giải pháp thiết kế hiện đại
                </p>

                {/* Search Bar */}
                <div className="mx-auto max-w-2xl">
                  <div className="flex items-center rounded-full border border-white/20 bg-white/10 p-2 backdrop-blur-md">
                    <input
                      type="text"
                      placeholder="Tìm kiếm kiến thức..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full bg-transparent px-6 py-3 text-white placeholder-gray-300 focus:outline-none"
                    />
                    <button className="flex items-center gap-2 rounded-full bg-white px-6 py-3 text-blue-600 transition-colors duration-300 hover:bg-gray-100 focus:outline-none">
                      <span>Tìm kiếm</span>
                    </button>
                  </div>
                </div>

                {/* Quick Stats */}
                <div className="mt-8 grid grid-cols-2 gap-4 sm:mt-12 md:grid-cols-4">
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                      {products.length}
                    </div>
                    <div className="text-sm text-gray-200 sm:text-base">
                      Bài viết
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                      {categories.length - 1}
                    </div>
                    <div className="text-sm text-gray-200 sm:text-base">
                      Danh mục
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                      24/7
                    </div>
                    <div className="text-sm text-gray-200 sm:text-base">
                      Hỗ trợ
                    </div>
                  </div>
                  <div className="rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-md">
                    <div className="mb-1 text-2xl font-bold text-white sm:text-3xl">
                      100+
                    </div>
                    <div className="text-sm text-gray-200 sm:text-base">
                      Khách hàng
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Categories */}
          <section className="sticky top-0 z-10 border-b bg-gray-50 py-4 shadow-sm sm:py-6">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-wrap justify-start gap-2 sm:gap-3">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => handleCategoryChange(category)}
                    className={`rounded-full px-3 py-1.5 text-sm transition-colors sm:px-4 sm:py-2 sm:text-base ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "bg-white text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <Breadcrumb />

          {/* Articles Grid */}
          <section className="bg-gray-50 py-8 sm:py-12 md:py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
              {loading ? (
                <div className="flex items-center justify-center py-12">
                  <div className="h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
                </div>
              ) : error ? (
                <div className="rounded-lg bg-red-50 p-4 text-center text-red-600">
                  Có lỗi xảy ra khi tải dữ liệu
                </div>
              ) : (
                <>
                  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {currentItems.map((item) => (
                      <article
                        key={item.id}
                        className="group rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
                      >
                        <Link href={`/bai-viet/${item.slug}`} className="block">
                          <div className="relative aspect-video overflow-hidden rounded-t-lg">
                            <Image
                              src={item.images}
                              alt={item.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                              quality={85}
                            />
                          </div>
                          <div className="p-4 sm:p-6">
                            <div className="mb-3 flex items-center gap-3">
                              <span className="rounded-full bg-blue-100 px-3 py-1 text-xs text-blue-600 sm:text-sm">
                                {item.category}
                              </span>
                              <time className="text-xs text-gray-500 sm:text-sm">
                                {new Date(item.createdAt).toLocaleDateString(
                                  "vi-VN",
                                )}
                              </time>
                            </div>
                            <h2 className="mb-2 line-clamp-2 text-lg font-semibold text-gray-900 transition-colors group-hover:text-blue-600 sm:text-xl">
                              {item.title}
                            </h2>
                            <p className="line-clamp-3 text-sm text-gray-600 sm:text-base">
                              {item.description}
                            </p>
                            <div className="mt-4 text-sm font-medium text-blue-600 group-hover:text-blue-700 sm:text-base">
                              Đọc thêm →
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>

                  {/* Pagination */}
                  {totalPages > 1 && (
                    <div className="mt-8 flex justify-center sm:mt-12">
                      <nav
                        className="flex items-center gap-1 sm:gap-2"
                        aria-label="Phân trang"
                      >
                        <button
                          onClick={() =>
                            setCurrentPage((prev) => Math.max(prev - 1, 1))
                          }
                          disabled={currentPage === 1}
                          className={`rounded-lg p-2 ${
                            currentPage === 1
                              ? "cursor-not-allowed text-gray-400"
                              : "text-blue-600 hover:bg-blue-50"
                          }`}
                          aria-label="Trang trước"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 19l-7-7 7-7"
                            />
                          </svg>
                        </button>

                        {generatePaginationArray().map((page, index) => (
                          <button
                            key={index}
                            onClick={() =>
                              typeof page === "number" && setCurrentPage(page)
                            }
                            className={`rounded-lg px-3 py-2 text-sm sm:px-4 sm:text-base ${
                              currentPage === page
                                ? "bg-blue-600 text-white"
                                : page === "..."
                                  ? "cursor-default text-gray-500"
                                  : "text-blue-600 hover:bg-blue-50"
                            }`}
                          >
                            {page}
                          </button>
                        ))}

                        <button
                          onClick={() =>
                            setCurrentPage((prev) =>
                              Math.min(prev + 1, totalPages),
                            )
                          }
                          disabled={currentPage === totalPages}
                          className={`rounded-lg p-2 ${
                            currentPage === totalPages
                              ? "cursor-not-allowed text-gray-400"
                              : "text-blue-600 hover:bg-blue-50"
                          }`}
                          aria-label="Trang sau"
                        >
                          <svg
                            className="h-5 w-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M9 5l7 7-7 7"
                            />
                          </svg>
                        </button>
                      </nav>
                    </div>
                  )}
                </>
              )}

              {/* Newsletter Subscription */}
              <NewsletterSubscription />
            </div>
          </section>
        </main>

        <JsonLdWrapper data={getSchemaData(currentItems)} />
        <SocialButtons />
        <Footer />
      </div>
    </>
  );
};

export default KnowledgePage;
