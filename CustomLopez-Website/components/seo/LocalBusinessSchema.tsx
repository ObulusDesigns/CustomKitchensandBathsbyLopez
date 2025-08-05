import { BUSINESS_INFO, SERVICE_AREAS, TRUST_SIGNALS } from '@/lib/constants';

interface LocalBusinessSchemaProps {
  type?: 'Organization' | 'LocalBusiness' | 'HomeAndConstructionBusiness';
  location?: {
    name: string;
    coordinates?: {
      lat: number;
      lng: number;
    };
  };
}

export default function LocalBusinessSchema({ 
  type = 'HomeAndConstructionBusiness',
  location 
}: LocalBusinessSchemaProps = {}) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': type,
    '@id': `${process.env.NEXT_PUBLIC_SITE_URL || 'https://customkitchensbylopez.co'}/#organization`,
    name: BUSINESS_INFO.name,
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://customkitchensbylopez.co',
    telephone: BUSINESS_INFO.phone,
    email: BUSINESS_INFO.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BUSINESS_INFO.address.street,
      addressLocality: BUSINESS_INFO.address.city,
      addressRegion: BUSINESS_INFO.address.stateAbbr,
      postalCode: BUSINESS_INFO.address.zip,
      addressCountry: BUSINESS_INFO.address.country
    },
    geo: location?.coordinates ? {
      '@type': 'GeoCoordinates',
      latitude: location.coordinates.lat,
      longitude: location.coordinates.lng
    } : {
      '@type': 'GeoCoordinates',
      latitude: 40.2659, // Monmouth County center
      longitude: -74.1241
    },
    image: [
      `${process.env.NEXT_PUBLIC_SITE_URL}/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/images/gallery/IMG_0428.jpeg`,
      `${process.env.NEXT_PUBLIC_SITE_URL}/images/gallery/IMG_0430.jpeg`
    ],
    description: `${BUSINESS_INFO.name} provides professional kitchen and bathroom remodeling services throughout Monmouth County, NJ. Specializing in custom cabinetry, luxury renovations, and expert craftsmanship since ${BUSINESS_INFO.yearEstablished}.`,
    priceRange: '$$',
    openingHoursSpecification: BUSINESS_INFO.hours.map(hours => ({
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: hours.day,
      opens: hours.open === 'Closed' ? undefined : hours.open,
      closes: hours.close === 'Closed' ? undefined : hours.close
    })).filter(hours => hours.opens),
    areaServed: [
      {
        '@type': 'State',
        name: SERVICE_AREAS.state
      },
      ...SERVICE_AREAS.counties.map(county => ({
        '@type': 'AdministrativeArea',
        name: county
      })),
      ...SERVICE_AREAS.primary.map(town => ({
        '@type': 'City',
        name: town
      }))
    ],
    serviceArea: {
      '@type': 'GeoCircle',
      geoMidpoint: {
        '@type': 'GeoCoordinates',
        latitude: 40.2659,
        longitude: -74.1241
      },
      geoRadius: `${BUSINESS_INFO.serviceRadius}mi`
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Remodeling Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Kitchen Remodeling',
            description: 'Complete kitchen renovations including custom cabinetry, countertops, and appliances'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Bathroom Remodeling',
            description: 'Luxury bathroom transformations with custom vanities, tile work, and fixtures'
          }
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Custom Cabinetry',
            description: 'Handcrafted custom cabinets for kitchens, bathrooms, and living spaces'
          }
        }
      ]
    },
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: TRUST_SIGNALS.stats.averageRating,
      reviewCount: TRUST_SIGNALS.stats.totalReviews,
      bestRating: '5',
      worstRating: '1'
    },
    review: [
      {
        '@type': 'Review',
        reviewRating: {
          '@type': 'Rating',
          ratingValue: '5'
        },
        author: {
          '@type': 'Person',
          name: 'Sarah Thompson'
        },
        reviewBody: 'Lopez and his team transformed our outdated kitchen into a stunning modern masterpiece. Their attention to detail and professionalism exceeded our expectations.'
      }
    ],
    sameAs: Object.values(BUSINESS_INFO.socialMedia),
    founder: {
      '@type': 'Person',
      name: 'Lopez',
      jobTitle: 'Owner & Master Craftsman'
    },
    foundingDate: BUSINESS_INFO.yearEstablished.toString(),
    knowsAbout: [
      'Kitchen Remodeling',
      'Bathroom Renovation',
      'Custom Cabinetry',
      'Home Improvement',
      'Interior Design',
      'Construction'
    ],
    hasCredential: TRUST_SIGNALS.certifications.map(cert => ({
      '@type': 'EducationalOccupationalCredential',
      name: cert
    })),
    award: TRUST_SIGNALS.awards.map(award => award)
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        suppressHydrationWarning
      />
    </>
  );
}