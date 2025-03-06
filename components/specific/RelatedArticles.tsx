"use client";

import { useEffect, useState } from "react";
import { getRelatedKnowledge } from "@/components/api/KnowledgeService";
import Link from "next/link";
import Image from "next/image";
import { Knowledge } from "@/types/knowledge";
import { LIMITKIENHUCLIENQUAN, SLICEKIENTHUCLIENQUAN } from "@/utils/constants";

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
  }, [KnowledgeID, category, maxResults]);

  if (loading)
    return <p className="text-center">Đang tải sản phẩm liên quan...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;
  if (relatedArticles.length === 0)
    return <p className="text-center">Không có sản phẩm liên quan.</p>;

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {relatedArticles.map((knowledge) => (
        <div
          className="col-span-1 rounded-xl shadow-2xl transition-all hover:scale-105"
          key={knowledge.id}
        >
          <div className="h-56 overflow-hidden rounded-lg bg-white transition-all duration-500 ease-in-out sm:h-60 sm:rounded-xl md:h-72 lg:h-64 xl:h-72">
            <Link
              href={`/chi-tiet-san-pham/${knowledge.slug}`}
              className="block"
            >
              <div className="relative h-[19vh] sm:h-[20vh] md:h-[25vh] lg:h-[20vh] xl:h-[25vh]">
                <Image
                  src={knowledge.images || "/images/default-product.jpg"}
                  alt={knowledge.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  placeholder="blur"
                  blurDataURL="data:image/jpeg;base64,/9j/..."
                />
              </div>
              <div className="p-2 sm:p-3">
                <h3 className="text-center text-xs font-bold uppercase text-slate-600 sm:text-sm">
                  {knowledge.title}
                </h3>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RelatedArticles;
