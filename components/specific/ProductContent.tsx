"use client";
import React from "react";
import { FaTag, FaInfoCircle, FaList, FaCheck } from "react-icons/fa";
import Head from "next/head";
import { Metadata } from "next";

interface ProductContentProps {
  product: {
    id: string;
    title: string;
    description: string;
    content: {
      overview: string;
      chitietsanpham: string;
      features: string[];
      specifications: {
        material: string[];
        size: string;
        lighting: string;
        warranty: string;
      };
      applications: string[];
      keywords: string[];
    };
    seoMeta: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

const ProductContent: React.FC<ProductContentProps> = ({ product }) => {
  return (
    <>
      <Head>
        <title>{product.seoMeta.title}</title>
        <meta name="description" content={product.seoMeta.description} />
        <meta name="keywords" content={product.seoMeta.keywords} />
        {/* Open Graph tags for social sharing */}
        <meta property="og:title" content={product.seoMeta.title} />
        <meta property="og:description" content={product.seoMeta.description} />
        <meta property="og:type" content="product" />
      </Head>

      <article className="prose prose-lg mx-auto max-w-4xl px-4 py-8 lg:prose-xl">
        {/* SEO-optimized heading structure */}
        <h2 className="mb-6 text-3xl font-bold text-gray-900 lg:text-4xl">
          {product.title}
        </h2>
        <p>{product.content.chitietsanpham}</p>
        {/* Keywords section for SEO */}
        <div className="mb-8 flex flex-wrap gap-2">
          {product.content.keywords.map((keyword, index) => (
            <span
              key={index}
              className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-600"
            >
              <FaTag className="mr-1 inline-block h-3 w-3" />
              {keyword}
            </span>
          ))}
        </div>

        {/* Rich content sections */}
        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-semibold text-gray-800">
            <FaInfoCircle className="mr-2" />
            Tổng Quan Sản Phẩm
          </h2>
          <div
            className="text-gray-700"
            dangerouslySetInnerHTML={{ __html: product.content.overview }}
          />
        </section>

        <section className="mb-12">
          <h2 className="mb-4 flex items-center text-2xl font-semibold text-gray-800">
            <FaList className="mr-2" />
            Đặc Điểm Nổi Bật
          </h2>
          <ul className="space-y-4">
            {product.content.features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <FaCheck className="mr-2 mt-1 text-green-500" />
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Thông Số Kỹ Thuật
          </h2>
          <div className="rounded-lg bg-gray-50 p-6">
            <dl className="space-y-4">
              <div>
                <dt className="mb-2 font-medium text-gray-700">Chất liệu:</dt>
                <dd className="flex flex-wrap gap-2">
                  {product.content.specifications.material.map((mat, index) => (
                    <span
                      key={index}
                      className="rounded-full bg-blue-100 px-3 py-1 text-sm text-blue-700"
                    >
                      {mat}
                    </span>
                  ))}
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-medium text-gray-700">Kích thước:</dt>
                <dd className="text-gray-600">
                  {product.content.specifications.size}
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-medium text-gray-700">
                  Hệ thống chiếu sáng:
                </dt>
                <dd className="text-gray-600">
                  {product.content.specifications.lighting}
                </dd>
              </div>
              <div>
                <dt className="mb-2 font-medium text-gray-700">Bảo hành:</dt>
                <dd className="text-gray-600">
                  {product.content.specifications.warranty}
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="mb-12">
          <h2 className="mb-4 text-2xl font-semibold text-gray-800">
            Ứng Dụng Thực Tế
          </h2>
          <ul className="list-inside list-disc space-y-2 text-gray-700">
            {product.content.applications.map((app, index) => (
              <li key={index}>{app}</li>
            ))}
          </ul>
        </section>

        {/* Schema.org markup for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              name: product.title,
              description: product.description,
              offers: {
                "@type": "Offer",
                availability: "https://schema.org/InStock",
              },
            }),
          }}
        />
      </article>
    </>
  );
};

export default ProductContent;
