"use client";

import { useEffect, useState } from "react";
import { getRelatedKnowledge } from "@/components/api/KnowledgeService";
import { Knowledge } from "@/types/knowledge";
import { LIMITKIENHUCLIENQUAN, SLICEKIENTHUCLIENQUAN } from "@/utils/constants";
import ItemCardArticle from "../common/itemCardArticle";

interface RelatedArticlesProps {
  KnowledgeID: string;
  category: string;
}

const RelatedArticles = ({ KnowledgeID, category }: RelatedArticlesProps) => {
  const [relatedArticles, setRelatedArticles] = useState<Knowledge[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      setLoading(true);
      setError(null);

      try {
        const articles = await getRelatedKnowledge(
          KnowledgeID,
          category,
          LIMITKIENHUCLIENQUAN,
        );
        setRelatedArticles(articles.slice(0, SLICEKIENTHUCLIENQUAN));
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setError("Không thể tải sản phẩm liên quan.");
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [KnowledgeID, category]);

  if (loading)
    return <p className="text-center">Đang tải sản phẩm liên quan...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (relatedArticles.length === 0)
    return <p className="text-center">Không có sản phẩm liên quan.</p>;

  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-4 xl:mx-36">
      {relatedArticles.map((knowledge) => (
        <div
          key={knowledge.id}
          className="group rounded-lg bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md"
        >
          <ItemCardArticle
            title={knowledge.title}
            images={knowledge.images}
            slug={knowledge.slug}
            href={"/kien-thuc/"}
            description={knowledge.description}
          />
        </div>
      ))}
    </div>
  );
};

export default RelatedArticles;
