import { getRelatedKnowledge } from "@/components/api/KnowledgeService";
import ItemCardArticle from "../common/itemCardArticle";

interface RelatedArticlesProps {
  KnowledgeID: string;
  category: string;
}

export default async function RelatedArticles({
  KnowledgeID,
  category,
}: RelatedArticlesProps) {
  const relatedArticles = await getRelatedKnowledge(KnowledgeID, category);

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
}
