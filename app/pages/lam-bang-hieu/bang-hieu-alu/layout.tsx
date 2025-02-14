"use client";

import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import Menu from '@/components/common/Menu';
import Breadcrumb from '@/components/common/Breadcrumb';
import JsonLdScript from '@/components/common/JsonLdScript';
import { generateLocalBusinessSchema } from '@/utils/seo';
import { SITE_CONFIG } from '@/utils/constants';

export default function BangHieuAluLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const breadcrumbItems = [
    { name: 'Trang chủ', url: '/' },
    { name: 'Làm bảng hiệu', url: '/pages/lam-bang-hieu' },
    { name: 'Bảng hiệu alu', url: '/pages/lam-bang-hieu/bang-hieu-alu' },
  ];

  const schemaData = {
    ...generateLocalBusinessSchema(),
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    description: 'Chuyên thiết kế và thi công bảng hiệu alu chất lượng cao, giá cả cạnh tranh.',
    image: 'https://sieuthibanghieu.vn/images/bang-hieu-alu.jpg',
    telephone: SITE_CONFIG.contactPhone,
    email: SITE_CONFIG.contactEmail,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressCountry: 'VN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 10.7769,
      longitude: 106.7009,
    },
    url: 'https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-alu',
    priceRange: '$$',
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '20:00',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Bảng hiệu alu',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thiết kế bảng hiệu alu',
            description: 'Dịch vụ thiết kế bảng hiệu alu theo yêu cầu',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Thi công bảng hiệu alu',
            description: 'Dịch vụ thi công bảng hiệu alu chuyên nghiệp',
          },
        },
      ],
    },
  };

  return (
    <>
      <JsonLdScript type="LocalBusiness" data={schemaData} />
      <div className="flex min-h-screen flex-col">
        <Header />
        <Menu />
        <main className="flex-grow bg-gray-50">
          <div className="container mx-auto px-4">
            <Breadcrumb items={breadcrumbItems} />
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </>
  );
}
