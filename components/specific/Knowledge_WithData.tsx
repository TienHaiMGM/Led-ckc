"use client";

import Image from "next/image";
import Link from "next/link";
import { getAllKnowledge, Knowledge } from "../api/KnowledgeService";
import { FaCalendarAlt, FaTag, FaShareAlt } from "react-icons/fa";
import RelatedArticles from "./RelatedArticles";

interface KnowledgeProps {
  Knowledge: Knowledge;
}

const Knowledge_WithData = ({ Knowledge }: KnowledgeProps) => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("vi-VN", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  };

  return (
    <article
      className="min-h-screen bg-white"
      role="main"
      aria-label={`Bài viết: ${Knowledge.title}`}
    >
      {/* Hero Section */}
      <header className="relative bg-gradient-to-r from-[#0e7490] via-[#3b82f6] to-[#837eee] py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            {/* Category & Date */}
            <div className="mb-6 flex flex-wrap items-center gap-4 text-sm">
              {Knowledge.category && (
                <span className="flex items-center gap-2">
                  <FaTag className="text-blue-300" />
                  <span>{Knowledge.category}</span>
                </span>
              )}
              {Knowledge.createdAt && (
                <span className="flex items-center gap-2">
                  <FaCalendarAlt className="text-blue-300" />
                  <time dateTime={Knowledge.createdAt}>
                    {formatDate(Knowledge.createdAt)}
                  </time>
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              {Knowledge.title}
            </h1>

            {/* Description */}
            {Knowledge.description && (
              <p className="text-lg text-blue-100 sm:text-xl">
                {Knowledge.description}
              </p>
            )}
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {Knowledge.image && (
        <div className="relative mx-auto -mt-16 mb-12 max-w-4xl px-4">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg shadow-xl">
            <Image
              src={Knowledge.image}
              alt={Knowledge.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      )}

      {/* Article Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-4xl">
          {/* Share Buttons */}
          <div className="mb-8 flex items-center gap-4">
            <span className="flex items-center gap-2 text-gray-600">
              <FaShareAlt />
              Chia sẻ:
            </span>
            <div className="flex gap-2">
              <button
                className="rounded-full bg-blue-600 p-2 text-white transition-colors hover:bg-blue-700"
                aria-label="Chia sẻ lên Facebook"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </button>
              <button
                className="rounded-full bg-blue-400 p-2 text-white transition-colors hover:bg-blue-500"
                aria-label="Chia sẻ lên Twitter"
              >
                <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24">
                  <path d="M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="prose prose-headings:text-gray-900 prose-p:text-gray-600 prose-a:text-blue-600 prose-img:rounded-lg sm:prose-lg max-w-none">
            <div dangerouslySetInnerHTML={{ __html: Knowledge.content }} />
          </div>

          {/* Tags */}
          {Knowledge.tags && Knowledge.tags.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <div className="flex flex-wrap items-center gap-2">
                <span className="text-gray-600">Tags:</span>
                {Knowledge.tags.map((tag, index) => (
                  <Link
                    key={index}
                    href={`/tin-tuc?tag=${tag}`}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 transition-colors hover:bg-gray-200"
                  >
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Related Articles Section */}
      <RelatedArticles
        fetchFunction={getAllKnowledge}
        currentId={Knowledge.id}
        basePath={"/kien-thuc"}
      />

      {/* Newsletter Section */}
      <section className="bg-blue-600 py-12 text-white">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="mb-4 text-2xl font-bold">Đăng Ký Nhận Tin Tức</h2>
            <p className="mb-8">
              Nhận thông tin mới nhất về ngành bảng hiệu và quảng cáo
            </p>
            <form className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 rounded-full bg-white/10 px-6 py-3 text-white placeholder-white/60 backdrop-blur-sm transition-colors focus:bg-white/20 focus:outline-none"
              />
              <button
                type="submit"
                className="rounded-full bg-white px-8 py-3 font-semibold text-blue-600 transition-colors hover:bg-blue-50"
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </section>
    </article>
  );
};

export default Knowledge_WithData;
