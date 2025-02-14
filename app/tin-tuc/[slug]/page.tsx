'use client';

import React, { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { NewsArticle, NEWS_CATEGORIES } from '../../../types/news-management';
import NewsService from '../../../components/api/NewsService';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Menu from '@/components/common/Menu';
import Breadcrumb from '@/components/common/Breadcrumb';
import JsonLdScript from '@/components/common/JsonLdScript';

const ArticlePage = () => {
  const params = useParams();
  const [article, setArticle] = useState<NewsArticle | null>(null);
  const [relatedArticles, setRelatedArticles] = useState<NewsArticle[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const newsService = new NewsService();

  useEffect(() => {
    if (params.slug) {
      loadArticle(params.slug as string);
    }
  }, [params.slug]);

  const loadArticle = async (slug: string) => {
    try {
      setIsLoading(true);
      const fetchedArticle = await newsService.getArticleBySlug(slug);
      if (fetchedArticle) {
        setArticle(fetchedArticle);
        await newsService.incrementViews(fetchedArticle.id);
        const related = await newsService.getArticlesByCategory(fetchedArticle.category);
        setRelatedArticles(related.filter(a => a.id !== fetchedArticle.id).slice(0, 3));
      }
    } catch (error) {
      console.error('Failed to load article:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  };

  const LoadingState = () => (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="py-12 text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-blue-600 border-r-transparent"></div>
          <p className="mt-2 text-gray-600">Đang tải...</p>
        </div>
      </main>
      <Footer />
    </div>
  );

  const NotFoundState = () => (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="py-12 text-center text-gray-500">Không tìm thấy bài viết</div>
      </main>
      <Footer />
    </div>
  );

  if (isLoading) return <LoadingState />;
  if (!article) return <NotFoundState />;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'NewsArticle',
    headline: article.title,
    description: article.description,
    image: article.image,
    datePublished: article.publishDate,
    dateModified: article.lastModified,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Siêu Thị Bảng Hiệu',
      logo: {
        '@type': 'ImageObject',
        url: '/images/sieuthibanghieulogo.png',
      },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://sieuthibanghieu.vn/tin-tuc/${article.slug}`,
    },
  };

  return (
    <div className="flex min-h-screen flex-col">
      <JsonLdScript type="NewsArticle" data={jsonLd} />
      <Header />
      <Menu />

      <main className="container mx-auto flex-grow px-4 py-8">
        <Breadcrumb items={[]} />

        <article className="mx-auto max-w-4xl">
          {/* Article Header */}
          <header className="mb-8">
            <div className="mb-4">
              <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-800">
                {NEWS_CATEGORIES.find(cat => cat.id === article.category)?.name || article.category}
              </span>
            </div>
            <h1 className="mb-4 text-4xl font-bold text-gray-900">{article.title}</h1>
            <div className="mb-6 flex items-center space-x-4 text-sm text-gray-600">
              <span>Bởi {article.author}</span>
              <span>•</span>
              <span>{formatDate(article.publishDate)}</span>
              <span>•</span>
              <span>{article.views} lượt xem</span>
            </div>
            <p className="text-xl text-gray-600">{article.description}</p>
          </header>

          {/* Featured Image */}
          <div className="relative mb-8 h-[400px] w-full overflow-hidden rounded-lg">
            <Image src={article.image} alt={article.title} fill className="object-cover" priority />
          </div>

          {/* Article Content */}
          <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: article.content }} />

          {/* Tags */}
          {article.tags.length > 0 && (
            <div className="mt-8 border-t border-gray-200 pt-8">
              <h2 className="mb-4 text-xl font-bold">Tags</h2>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Related Articles */}
          {relatedArticles.length > 0 && (
            <div className="mt-12 border-t border-gray-200 pt-8">
              <h2 className="mb-6 text-2xl font-bold">Bài Viết Liên Quan</h2>
              <div className="grid gap-6 md:grid-cols-3">
                {relatedArticles.map(related => (
                  <Link
                    key={related.id}
                    href={`/tin-tuc/${related.slug}`}
                    className="group block overflow-hidden rounded-lg bg-white shadow transition hover:shadow-lg"
                  >
                    <div className="relative h-48">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <h3 className="mb-2 text-lg font-bold text-gray-900 group-hover:text-blue-600">
                        {related.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-gray-600">{related.description}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
