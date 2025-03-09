import { getRelatedNews } from "@/components/api/NewsService";
import ItemCardArticle from "../common/itemCardArticle";

interface RelatedNewsProps {
  NewsID: string;
  category: string;
}

export default async function RelatedArticles({
  NewsID,
  category,
}: RelatedNewsProps) {
  const relatedNews = await getRelatedNews(NewsID, category);
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
}
