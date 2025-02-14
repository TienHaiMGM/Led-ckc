"use client";

import Image from 'next/image';
import Link from 'next/link';
import ContactForm from '@/components/common/ContactForm';

const features = [
  {
    title: 'Bền Bỉ',
    description: 'Chất liệu alu có độ bền cao, chịu được mọi điều kiện thời tiết, không bị oxy hóa hay han gỉ theo thời gian.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
  },
  {
    title: 'Thẩm Mỹ',
    description: 'Bề mặt phẳng, màu sắc đa dạng, dễ dàng tạo hình và in ấn, mang lại vẻ đẹp sang trọng, hiện đại.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: 'Giá Cả',
    description: 'Chi phí hợp lý, phù hợp với mọi ngân sách, đem lại hiệu quả quảng cáo cao với giá thành tối ưu.',
    icon: (
      <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const productInfo = {
  material: [
    'Tấm alu composite cao cấp',
    'Độ dày từ 3mm - 4mm',
    'Màu sắc đa dạng theo yêu cầu',
    'Khung xương chắc chắn',
  ],
  applications: [
    'Bảng hiệu cửa hàng, shop',
    'Bảng hiệu công ty, văn phòng',
    'Bảng hiệu nhà hàng, quán ăn',
    'Bảng hiệu showroom, cửa hàng',
  ],
  services: [
    'Tư vấn thiết kế miễn phí',
    'Khảo sát tận nơi',
    'Thi công nhanh chóng',
    'Bảo hành dài hạn',
  ],
  process: [
    'Tư vấn và báo giá',
    'Thiết kế và duyệt mẫu',
    'Sản xuất và thi công',
    'Nghiệm thu và bảo hành',
  ],
};

export default function BangHieuAluPage() {
  return (
    <div className="py-8">
      {/* Hero Section */}
      <section className="relative mb-12 h-[60vh] min-h-[400px] w-full overflow-hidden rounded-xl">
        <Image
          src="/images/bang-hieu-alu.jpg"
          alt="Bảng hiệu alu chất lượng cao"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50">
          <div className="container mx-auto flex h-full items-center px-4">
            <div className="max-w-2xl text-white">
              <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                Bảng Hiệu Alu Chất Lượng Cao
              </h1>
              <p className="mb-8 text-lg md:text-xl">
                Chuyên thiết kế và thi công bảng hiệu alu với chất lượng cao, 
                giá cả cạnh tranh. Đa dạng mẫu mã, kích thước tùy chọn.
              </p>
              <Link
                href="#contact"
                className="rounded-lg bg-blue-600 px-6 py-3 text-white transition hover:bg-blue-700"
              >
                Liên Hệ Ngay
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Tại Sao Chọn Bảng Hiệu Alu?</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="rounded-lg bg-white p-6 shadow-lg transition hover:shadow-xl">
              <div className="mb-4 text-blue-600">{feature.icon}</div>
              <h3 className="mb-4 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Product Info */}
      <section className="mb-16">
        <h2 className="mb-8 text-3xl font-bold">Thông Tin Sản Phẩm</h2>
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-6">
            <InfoSection title="Chất Liệu" items={productInfo.material} />
            <InfoSection title="Ứng Dụng" items={productInfo.applications} />
          </div>
          <div className="space-y-6">
            <InfoSection title="Dịch Vụ" items={productInfo.services} />
            <InfoSection title="Quy Trình" items={productInfo.process} />
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact">
        <ContactForm
          title="Liên Hệ Tư Vấn"
          subtitle="Để lại thông tin để được tư vấn chi tiết về sản phẩm và báo giá tốt nhất"
          className="mx-auto max-w-2xl"
        />
      </section>
    </div>
  );
}

function InfoSection({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-4 text-2xl font-semibold">{title}</h3>
      <ul className="list-inside list-disc space-y-2 text-gray-600">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
