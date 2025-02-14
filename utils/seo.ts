import { Metadata } from 'next';
import { SITE_CONFIG } from './constants';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  image?: string;
  url?: string;
  type?: 'website' | 'article' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
}

interface OpenGraphArticle {
  publishedTime?: string;
  modifiedTime?: string;
  authors?: string[];
  tags?: string[];
}

interface OpenGraphMetadata {
  title: string;
  description: string;
  url: string;
  siteName: string;
  images: Array<{
    url: string;
    width: number;
    height: number;
    alt: string;
  }>;
  locale: string;
  type: 'website' | 'article' | 'product';
  article?: OpenGraphArticle;
}

export function generateMetadata({
  title,
  description,
  keywords = [],
  image,
  url,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const siteUrl = SITE_CONFIG.url;
  const finalTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.name;
  const finalDescription = description || SITE_CONFIG.description;
  const finalImage = image ? new URL(image, siteUrl).toString() : `${siteUrl}/images/og-image.jpg`;
  const canonicalUrl = url ? new URL(url, siteUrl).toString() : siteUrl;

  const openGraph: OpenGraphMetadata = {
    title: finalTitle,
    description: finalDescription,
    url: canonicalUrl,
    siteName: SITE_CONFIG.name,
    images: [
      {
        url: finalImage,
        width: 1200,
        height: 630,
        alt: finalTitle,
      },
    ],
    locale: SITE_CONFIG.locale,
    type,
  };

  if (type === 'article') {
    openGraph.article = {
      publishedTime,
      modifiedTime,
      authors: [author || SITE_CONFIG.name],
    };
  }

  return {
    title: finalTitle,
    description: finalDescription,
    keywords: keywords,
    authors: author ? [{ name: author }] : [{ name: SITE_CONFIG.name }],
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph,
    twitter: {
      card: 'summary_large_image',
      title: finalTitle,
      description: finalDescription,
      images: [finalImage],
      creator: '@sieuthibanghieu',
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
    verification: {
      google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    },
  };
}

export function generateArticleSchema(article: {
  title: string;
  description: string;
  image: string;
  url: string;
  author: string;
  publishDate: string;
  modifiedDate: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    image: article.image,
    author: {
      '@type': 'Person',
      name: article.author,
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_CONFIG.name,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_CONFIG.url}/images/logo.png`,
      },
    },
    datePublished: article.publishDate,
    dateModified: article.modifiedDate,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': article.url,
    },
  };
}

export function generateBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: new URL(item.url, SITE_CONFIG.url).toString(),
    })),
  };
}

export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/images/logo.png`,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: SITE_CONFIG.contactPhone,
      contactType: 'customer service',
      email: SITE_CONFIG.contactEmail,
      areaServed: 'VN',
      availableLanguage: ['Vietnamese'],
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address,
      addressCountry: 'VN',
    },
    sameAs: [
      'https://www.facebook.com/sieuthibanghieu',
      'https://twitter.com/sieuthibanghieu',
      'https://www.instagram.com/sieuthibanghieu',
    ],
  };
}

export function generateProductSchema(product: {
  name: string;
  description: string;
  image: string;
  url: string;
  price: number;
  priceCurrency?: string;
  sku: string;
  brand?: string;
  availability?: 'InStock' | 'OutOfStock';
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: product.name,
    description: product.description,
    image: product.image,
    sku: product.sku,
    ...(product.brand && { brand: {
      '@type': 'Brand',
      name: product.brand,
    }}),
    offers: {
      '@type': 'Offer',
      price: product.price,
      priceCurrency: product.priceCurrency || 'VND',
      availability: `https://schema.org/${product.availability || 'InStock'}`,
      url: product.url,
      seller: {
        '@type': 'Organization',
        name: SITE_CONFIG.name,
      },
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: SITE_CONFIG.name,
    image: `${SITE_CONFIG.url}/images/storefront.jpg`,
    '@id': SITE_CONFIG.url,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.contactPhone,
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
    priceRange: '$$',
  };
}
