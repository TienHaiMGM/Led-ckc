import { Metadata } from "next";
import Image from "next/image";
import Header from "@/components/common/Header";
import Footer from "@/components/common/Footer";
import Menu from "@/components/common/Menu";
import Breadcrumb from "@/components/common/Breadcrumb";
import SocialButtons from "@/components/common/SocialButtons";
import TabarLeft from "@/components/common/TabarLeft";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bảng Hiệu Alu - Giải Pháp Quảng Cáo Chuyên Nghiệp",
    description:
      "Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu Alu cao cấp, bền đẹp và tiết kiệm chi phí cho doanh nghiệp của bạn.",
    keywords: ["bảng hiệu alu", "quảng cáo", "thiết kế bảng hiệu"],
    openGraph: {
      title: "Bảng Hiệu Alu - Giải Pháp Quảng Cáo Chuyên Nghiệp",
      description:
        "Chuyên thiết kế và thi công các loại bảng hiệu Alu quảng cáo chất lượng cao.",
      url: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
      siteName: "Siêu Thị Bảng Hiệu",
      images: [
        {
          url: "https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg",
          width: 1200,
          height: 630,
          alt: "Bảng Hiệu Alu - Siêu Thị Bảng Hiệu",
        },
      ],
      locale: "vi_VN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: "Bảng Hiệu Alu - Giải Pháp Quảng Cáo Chuyên Nghiệp",
      description:
        "Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu Alu.",
      images: ["https://sieuthibanghieu.vn/images/sieuthibanghieu.jpg"],
    },
    alternates: {
      canonical: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
    },
  };
}
const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebPage",
      "@id": "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
      url: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
      name: "Bảng Hiệu Alu",
      description:
        "Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu Alu cao cấp.",
      isPartOf: {
        "@type": "WebSite",
        "@id": "https://sieuthibanghieu.vn/#website",
        url: "https://sieuthibanghieu.vn",
        name: "Siêu Thị Bảng Hiệu",
        description:
          "Chuyên thiết kế và thi công bảng hiệu quảng cáo chuyên nghiệp",
        publisher: {
          "@id": "https://sieuthibanghieu.vn/#organization",
        },
      },
    },
    {
      "@type": "BreadcrumbList",
      "@id":
        "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu#breadcrumb",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          item: {
            "@type": "WebPage",
            "@id": "https://sieuthibanghieu.vn/",
            url: "https://sieuthibanghieu.vn/",
            name: "Trang chủ",
          },
        },
        {
          "@type": "ListItem",
          position: 2,
          item: {
            "@type": "WebPage",
            "@id": "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
            url: "https://sieuthibanghieu.vn/lam-bang-hieu/bang-hieu-alu",
            name: "Bảng Hiệu Alu",
          },
        },
      ],
    },
  ],
};
const BangHieuMica = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <Menu />
      <Breadcrumb />
      <main className="container mx-auto flex-grow px-0 py-0 lg:py-6 xl:py-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          {/* {TabarLeft} */}
          <div className="hidden sm:hidden md:hidden lg:block xl:ml-28 xl:block">
            <TabarLeft />
          </div>
          {/* Main Content */}
          <article className="prose max-w-none lg:w-3/4">
            <div className="mb-8 rounded-lg bg-gradient-to-r from-blue-50 to-white p-6">
              <h1 className="mb-4 text-3xl font-bold text-blue-800 lg:text-4xl">
                Bảng Hiệu Mica - Giải Pháp Quảng Cáo Hiện Đại
              </h1>
              <p className="mb-6 text-lg text-gray-600">
                Khám phá giải pháp bảng hiệu chuyên nghiệp với chất liệu mica
                cao cấp, đa dạng màu sắc và hiệu ứng ánh sáng độc đáo cho doanh
                nghiệp của bạn.
              </p>
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">12+</div>
                  <div className="text-gray-600">Năm Kinh Nghiệm</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">3000+</div>
                  <div className="text-gray-600">Khách Hàng</div>
                </div>
                <div className="rounded-lg bg-white p-4 shadow-sm">
                  <div className="text-xl font-bold text-blue-600">100%</div>
                  <div className="text-gray-600">Hài Lòng</div>
                </div>
              </div>
            </div>

            <div className="mb-12 grid gap-8 lg:grid-cols-2">
              <div>
                <Image
                  src="/images/banghieu.jpg"
                  alt="Bảng hiệu Mica chuyên nghiệp"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-4">
                <h2 className="text-2xl font-bold text-gray-800">
                  Bảng Hiệu Mica Là Gì?
                </h2>
                <p className="text-gray-600">
                  Bảng hiệu Mica là loại bảng hiệu được làm từ chất liệu nhựa
                  acrylic trong suốt hoặc màu, có khả năng tạo nhiều hiệu ứng
                  ánh sáng độc đáo và đa dạng về màu sắc.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Đa dạng màu sắc và hiệu ứng
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Tích hợp đèn LED dễ dàng
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="mr-2 h-5 w-5 text-green-500"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Chi phí hợp lý, dễ thay thế
                  </li>
                </ul>
              </div>
            </div>

            {/* {TabarLeft} */}
            <div className="block sm:block md:block lg:hidden xl:hidden">
              <TabarLeft />
            </div>
          </article>
        </div>
      </main>
      <SocialButtons />
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </div>
  );
};

export default BangHieuMica;
