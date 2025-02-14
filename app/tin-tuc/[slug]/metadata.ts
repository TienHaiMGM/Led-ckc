import { Metadata } from "next";
import { NewsService } from "../../../components/api/NewsService";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  try {
    const newsService = new NewsService();
    const article = await newsService.getArticleBySlug(params.slug);

    if (!article) {
      return {
        title: "Bài viết không tồn tại - Siêu Thị Bảng Hiệu",
        description: "Không tìm thấy bài viết này.",
      };
    }

    return {
      title: `${article.seoTitle || article.title} - Siêu Thị Bảng Hiệu`,
      description: article.seoDescription || article.description,
      keywords: article.seoKeywords,
      authors: [{ name: article.author }],
      openGraph: {
        title: article.seoTitle || article.title,
        description: article.seoDescription || article.description,
        url: `https://sieuthibanghieu.vn/tin-tuc/${article.slug}`,
        siteName: "Siêu Thị Bảng Hiệu",
        images: [
          {
            url: article.image,
            width: 800,
            height: 400,
            alt: article.title,
          },
        ],
        locale: "vi_VN",
        type: "article",
      },
      twitter: {
        card: "summary_large_image",
        title: article.seoTitle || article.title,
        description: article.seoDescription || article.description,
        images: [article.image],
      },
      alternates: {
        canonical: `https://sieuthibanghieu.vn/tin-tuc/${article.slug}`,
      },
      robots: {
        index: true,
        follow: true,
        googleBot: {
          index: true,
          follow: true,
          "max-video-preview": -1,
          "max-image-preview": "large",
          "max-snippet": -1,
        },
      },
      verification: {
        google: "google-site-verification-code",
      },
      category: "Tin tức",
      creator: "Siêu Thị Bảng Hiệu",
      publisher: "Siêu Thị Bảng Hiệu",
      metadataBase: new URL("https://sieuthibanghieu.vn"),
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Tin Tức - Siêu Thị Bảng Hiệu",
      description: "Tin tức và thông tin mới nhất từ Siêu Thị Bảng Hiệu",
    };
  }
}
