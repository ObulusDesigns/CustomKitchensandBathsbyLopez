export default function ServiceSchema({ 
  serviceName, 
  description,
  areaServed,
  priceRange = "$$$$",
  aggregateRating
}: {
  serviceName: string;
  description: string;
  areaServed?: string | string[];
  priceRange?: string;
  aggregateRating?: {
    ratingValue: number;
    reviewCount: number;
  };
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Custom Kitchens & Baths by Lopez",
      "telephone": "+1-732-707-7777",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "2 Claire Rd",
        "addressLocality": "East Brunswick",
        "addressRegion": "NJ",
        "postalCode": "08816",
        "addressCountry": "US"
      },
      "url": "https://customkitchensbylopez.co",
      "priceRange": priceRange,
      "image": "https://customkitchensbylopez.co/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp"
    },
    "areaServed": areaServed ? (
      Array.isArray(areaServed) ? 
        areaServed.map(area => ({
          "@type": "Place",
          "name": area
        })) : {
          "@type": "Place",
          "name": areaServed
        }
    ) : {
      "@type": "AdministrativeArea",
      "name": "Monmouth County, NJ"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${serviceName} Services`,
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": `Professional ${serviceName}`,
            "description": `Expert ${serviceName.toLowerCase()} services with quality materials and craftsmanship`
          }
        }
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": aggregateRating?.ratingValue || 5.0,
      "reviewCount": aggregateRating?.reviewCount || 127,
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