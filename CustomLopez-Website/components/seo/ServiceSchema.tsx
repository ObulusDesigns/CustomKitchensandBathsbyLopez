export default function ServiceSchema({ 
  serviceName, 
  description,
  areaServed,
  priceRange = "$$$$"
}: {
  serviceName: string;
  description: string;
  areaServed?: string;
  priceRange?: string;
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
      "url": "https://customkitchensbylopez.com",
      "priceRange": priceRange,
      "image": "https://customkitchensbylopez.com/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp"
    },
    "areaServed": areaServed ? {
      "@type": "Place",
      "name": areaServed
    } : {
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
      "ratingValue": "5.0",
      "reviewCount": "127",
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