import { getNewsBySlug } from "@/components/api/NewsService";
import Breadcrumb from "@/components/common/Breadcrumb";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { FaTag, FaShareAlt, FaUser } from "react-icons/fa";
import RelatedNews from "@/components/specific/RelatedNews";
import TabarLeftNew from "@/components/common/TabarLeftNew";
import ShareButtons from "@/components/common/ButtonShareSocial";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const News = await getNewsBySlug(params.slug);

  if (!News) {
    return {
      title: "Bài viết không tồn tại - Siêu Thị Bảng Hiệu",
      description: "Bài viết bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.",
    };
  }

  return {
    title: `${News.seoTitle}`,
    description: `${News.seoDescription}`,
    keywords: [`${News.seoTitle}`, "Siêu Thị Bảng Hiệu"],
    openGraph: {
      title: `${News.seoTitle}`,
      description: `${News.seoDescription}`,
      url: `https://sieuthibanghieu.com/tin-tuc/${params.slug}`,
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: News.images,
          width: 1200,
          height: 630,
          alt: News.seoTitle,
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${News.seoTitle}`,
      description: `${News.seoDescription}`,
      images: [
        "https://res.cloudinary.com/dsyidnrat/image/upload/v1740798279/Led_ckc_1_fkgbgo.jpg",
      ],
    },
    alternates: {
      canonical: `https://sieuthibanghieu.com/tin-tuc/${params.slug}`,
    },
    robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
        index: true,
        follow: true,
        noimageindex: false,
      },
    },
  };
}

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
      <main>
        <article className="min-h-screen bg-gray-50">
          {/* Hero Section (Header) */}
          <header className="prose prose-custome bg-white shadow-md">
            <div className="mx-auto flex flex-col items-center justify-center gap-2 px-4 py-10 xl:container lg:flex-row">
              <div className="hidden items-center justify-center p-4 lg:flex">
                <Image
                  src={
                    News.images ||
                    "https://res.cloudinary.com/dsyidnrat/image/upload/v1739939406/hopden_kf6fuy.jpg"
                  }
                  alt={News.title}
                  width={500}
                  height={300}
                  className="h-72 rounded-lg object-cover shadow-lg"
                />
              </div>
              {/* Text Content */}
              <div className="container prose max-w-none px-4">
                <h1 className="mb-4 text-4xl font-bold text-gray-900 md:text-4xl">
                  {News.title}
                </h1>

                {/* Category & Date */}
                <div className="mb-4 flex gap-4 text-sm text-gray-600">
                  {News.category && (
                    <span className="flex items-center gap-2">
                      <FaTag className="text-blue-500" />
                      {News.category}
                    </span>
                  )}
                  {News.author && (
                    <span className="flex items-center gap-2">
                      <FaUser className="text-blue-500" />
                      {News.author}
                    </span>
                  )}
                </div>

                {/* Description */}
                {News.description && (
                  <p className="text-lg text-gray-700">{News.description}</p>
                )}
              </div>
              {/* Featured Image */}
              <div className="rounded-lg shadow-lg lg:hidden">
                <Image
                  src={
                    News.images ||
                    "https://res.cloudinary.com/dsyidnrat/image/upload/v1739939406/hopden_kf6fuy.jpg"
                  }
                  alt={News.title}
                  width={500}
                  height={300}
                  className="object-fill"
                />
              </div>
            </div>
          </header>

          {/* Main Content + Sidebar */}
          <div className="mx-auto flex flex-col gap-8 px-4 py-4 xl:container lg:flex-row">
            {/* TabBarLeft */}
            <div className="hidden lg:block">
              <TabarLeftNew tags={News.tags || []} hotness={News.hotness} />
            </div>

            {/* Article Content */}
            <div className="rounded-lg shadow-sm lg:w-[80vw]">
              {/* Main Content */}
              <div className="prose prose-lg -mt-12 max-w-none prose-headings:text-gray-900 prose-p:text-gray-700 prose-a:text-blue-600 prose-img:rounded-lg">
                <div dangerouslySetInnerHTML={{ __html: News.content }} />
              </div>

              {/* Tags */}
              {News.tags && News.tags.length > 0 && (
                <div className="mt-8 border-t border-gray-200 pt-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-gray-600">Tags:</span>
                    {News.tags.map((tag) => (
                      <p className="rounded-full bg-gray-100 px-3 py-1 text-sm text-gray-700 hover:bg-gray-200">
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              )}
              {/* Share Buttons */}
              <div className="mb-6 mt-5 flex items-center gap-4">
                <span className="flex items-center gap-2 text-gray-600">
                  <FaShareAlt />
                  Chia sẻ:
                </span>
                <div className="flex gap-2">
                  <ShareButtons />
                </div>
              </div>
            </div>
          </div>

          {/* Related News Section */}
          <section className="bg-gray-100 py-8">
            <div className="container mx-auto px-4">
              <h2 className="mb-6 text-center text-2xl font-bold">
                Tin tức liên quan
              </h2>
              <RelatedNews
                NewsID={News.id || ""}
                category={News.category || ""}
              />
            </div>
          </section>

          {/* CTA Section */}
          <section
            className="bg-gradient-to-r from-red-600 to-red-800 py-16 text-white"
            aria-label="Liên hệ"
          >
            <div className="container mx-auto px-4 text-center">
              <h2 className="mb-8 text-3xl font-bold uppercase">
                Bạn muốn làm bảng hiệu quảng cáo
              </h2>
              <p className="mb-8 text-lg">
                Liên hệ ngay với chúng tôi để được tư vấn chi tiết và báo giá
                tốt nhất
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/lien-he"
                  className="rounded-full bg-white px-8 py-3 font-semibold text-red-600 transition-colors hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Chuyển đến trang liên hệ"
                >
                  Liên Hệ Ngay
                </Link>
                <a
                  href="tel:+0827034567"
                  className="rounded-full border-2 border-white px-8 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-red-600 focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Gọi điện thoại cho chúng tôi"
                >
                  Gọi Điện Thoại
                </a>
              </div>
            </div>
          </section>
        </article>
      </main>
    </>
  );
}
