"use client";

import { useEffect, useState } from "react";
import { getRelatedNews } from "@/components/api/NewsService";
import { News } from "@/types/news";
import { LIMITTINTUCLIENQUAN, SLICETINTUCLIENQUAN } from "@/utils/constants";
import ItemCardArticle from "../common/itemCardArticle";

interface RelatedNewsProps {
  NewsID: string;
  category: string;
}

const RelatedArticles = ({ NewsID, category }: RelatedNewsProps) => {
  const [relatedNews, setRelatedNews] = useState<News[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedNews = async () => {
      setLoading(true);
      setError(null);

      try {
        const articles = await getRelatedNews(
          NewsID,
          category,
          LIMITTINTUCLIENQUAN,
        );
        setRelatedNews(articles.slice(0, SLICETINTUCLIENQUAN));
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setError("Không thể tải sản phẩm liên quan.");
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedNews();
  }, [NewsID, category]);

  if (loading)
    return <p className="text-center">Đang tải sản phẩm liên quan...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (relatedNews.length === 0)
    return <p className="text-center">Không có sản phẩm liên quan.</p>;

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:mx-36">
      {relatedNews.map((news) => (
        <div
          key={news.id}
          className="group rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <ItemCardArticle
            title={news.title}
            images={news.images}
            slug={news.slug}
            href={"/tin-tuc/"}
            description={news.description}
          />
        </div>
      ))}
    </div>
  );
};

export default RelatedArticles;
