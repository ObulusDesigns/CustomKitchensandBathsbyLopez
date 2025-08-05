import { BUSINESS_INFO, TRUST_SIGNALS } from '@/lib/constants';

export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${BUSINESS_INFO.website}/#organization`,
    "name": BUSINESS_INFO.name,
    "alternateName": "Lopez Kitchen & Bath",
    "url": BUSINESS_INFO.website,
    "logo": `${BUSINESS_INFO.website}/images/logo.png`,
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": BUSINESS_INFO.phone,
      "contactType": "customer service",
      "areaServed": "US",
      "availableLanguage": ["English", "Spanish"]
    },
    "address": {
      "@type": "PostalAddress",
      "streetAddress": BUSINESS_INFO.address.street,
      "addressLocality": BUSINESS_INFO.address.city,
      "addressRegion": BUSINESS_INFO.address.stateAbbr,
      "postalCode": BUSINESS_INFO.address.zip,
      "addressCountry": BUSINESS_INFO.address.country
    },
    "sameAs": Object.values(BUSINESS_INFO.socialMedia),
    "foundingDate": BUSINESS_INFO.yearEstablished.toString(),
    "founder": {
      "@type": "Person",
      "name": BUSINESS_INFO.owner
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 15
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": TRUST_SIGNALS.stats.averageRating,
      "reviewCount": TRUST_SIGNALS.stats.totalReviews,
      "bestRating": "5",
      "worstRating": "1"
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}