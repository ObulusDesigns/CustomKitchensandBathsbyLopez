import { BUSINESS_INFO } from '@/lib/constants';

interface ServiceSchemaProps {
  serviceName: string;
  description: string;
  areaServed?: string[];
  priceRange?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}

export default function ServiceSchema({
  serviceName,
  description,
  areaServed = ['Monmouth County', 'Ocean County', 'Middlesex County'],
  priceRange = '$$',
  aggregateRating
}: ServiceSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": serviceName,
    "provider": {
      "@type": "LocalBusiness",
      "name": BUSINESS_INFO.name,
      "telephone": BUSINESS_INFO.phone,
      "email": BUSINESS_INFO.email,
      "address": {
        "@type": "PostalAddress",
        "streetAddress": BUSINESS_INFO.address.street,
        "addressLocality": BUSINESS_INFO.address.city,
        "addressRegion": BUSINESS_INFO.address.stateAbbr,
        "postalCode": BUSINESS_INFO.address.zip,
        "addressCountry": BUSINESS_INFO.address.country
      },
      "priceRange": priceRange,
      "url": BUSINESS_INFO.website
    },
    "description": description,
    "areaServed": areaServed.map(area => ({
      "@type": "City",
      "name": area
    })),
    ...(aggregateRating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": aggregateRating.ratingValue,
        "reviewCount": aggregateRating.reviewCount,
        "bestRating": "5",
        "worstRating": "1"
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}