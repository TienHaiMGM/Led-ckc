"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import Breadcrumb from "@/components/common/Breadcrumb";
import Knowledge_WithData from "@/components/specific/Knowledge_WithData";
import { getKnowledgeBySlug } from "@/components/api/KnowledgeService";
import { Knowledge } from "@/types/knowledge";

export default function KnowledgePage() {
  const params = useParams();
  const slug = params?.slug as string;
  const [knowledge, setKnowledge] = useState<Knowledge | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchKnowledge = async () => {
      if (!slug) {
        setError("Không tìm thấy sản phẩm");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        const fetchedProduct = await getKnowledgeBySlug(slug);
        if (fetchedProduct) {
          setKnowledge(fetchedProduct);
          setError(null);
        } else {
          setError("Không tìm thấy sản phẩm");
        }
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Có lỗi xảy ra khi tải sản phẩm",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchKnowledge();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-8 w-8 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
          <p className="text-gray-600">Đang tải sản phẩm...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-red-50 p-6 text-center">
          <p className="mb-2 text-red-600">{error}</p>
          <p className="text-gray-600">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  if (!knowledge) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="rounded-lg bg-yellow-50 p-6 text-center">
          <p className="mb-2 text-yellow-600">Không tìm thấy sản phẩm</p>
          <p className="text-gray-600">Slug: {slug}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      <Breadcrumb />
      <Knowledge_WithData Knowledge={knowledge} />
    </>
  );
}
