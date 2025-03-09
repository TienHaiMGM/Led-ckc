import Breadcrumb from "@/components/common/Breadcrumb";
import Knowledge_WithData from "@/components/specific/Knowledge_WithData";
import { getKnowledgeBySlug } from "@/components/api/KnowledgeService";
import { notFound } from "next/navigation";

export default async function KnowledgePage({
  params,
}: {
  params: { slug: string };
}) {
  const knowledge = await getKnowledgeBySlug(params.slug);
  if (!knowledge) {
    notFound();
  }
  return (
    <>
      <Breadcrumb />
      <Knowledge_WithData Knowledge={knowledge} />
    </>
  );
}
