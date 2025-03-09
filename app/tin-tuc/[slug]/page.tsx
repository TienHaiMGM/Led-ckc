import { getNewsBySlug } from "@/components/api/NewsService";
import Breadcrumb from "@/components/common/Breadcrumb";
import News_WithData from "@/components/specific/News_WithData";
import { notFound } from "next/navigation";

export default async function NewsPage({
  params,
}: {
  params: { slug: string };
}) {
  const News = await getNewsBySlug(params.slug);
  if (!News) {
    notFound();
  }
  return (
    <>
      <Breadcrumb />
      <News_WithData News={News} />
    </>
  );
}
