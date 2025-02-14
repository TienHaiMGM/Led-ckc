import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Bảng Hiệu Alu - Thiết Kế & Thi Công Bảng Hiệu Alu Chuyên Nghiệp',
  description: 'Chuyên thiết kế và thi công bảng hiệu alu chất lượng cao, giá cả cạnh tranh. Đa dạng mẫu mã, kích thước tùy chọn, bảo hành dài hạn.',
  keywords: [
    'bảng hiệu alu',
    'làm bảng hiệu alu',
    'thiết kế bảng hiệu alu',
    'thi công bảng hiệu alu',
    'giá bảng hiệu alu',
    'mẫu bảng hiệu alu đẹp'
  ],
  openGraph: {
    title: 'Bảng Hiệu Alu - Thiết Kế & Thi Công Chuyên Nghiệp',
    description: 'Chuyên thiết kế và thi công bảng hiệu alu chất lượng cao, giá cả cạnh tranh.',
    images: [
      {
        url: '/images/bang-hieu-alu.jpg',
        width: 1200,
        height: 630,
        alt: 'Bảng hiệu alu chất lượng cao',
      }
    ],
    locale: 'vi_VN',
    type: 'article',
    publishedTime: new Date().toISOString(),
    authors: ['Siêu Thị Bảng Hiệu'],
    tags: [
      'bảng hiệu alu',
      'thiết kế bảng hiệu',
      'thi công bảng hiệu',
      'bảng hiệu quảng cáo'
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bảng Hiệu Alu - Thiết Kế & Thi Công Chuyên Nghiệp',
    description: 'Chuyên thiết kế và thi công bảng hiệu alu chất lượng cao, giá cả cạnh tranh.',
    images: ['/images/bang-hieu-alu.jpg'],
    creator: '@sieuthibanghieu'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sieuthibanghieu.vn/pages/lam-bang-hieu/bang-hieu-alu',
  },
  authors: [{ name: 'Siêu Thị Bảng Hiệu' }],
  category: 'Bảng Hiệu',
  creator: 'Siêu Thị Bảng Hiệu',
  formatDetection: {
    telephone: true,
    date: false,
    email: true,
    address: true,
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || '',
  },
  other: {
    'fb:app_id': process.env.NEXT_PUBLIC_FACEBOOK_APP_ID || ''
  }
};
