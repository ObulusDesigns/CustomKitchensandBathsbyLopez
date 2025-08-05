import { Testimonial } from '@/components/ui/TestimonialCard';
import { BUSINESS_INFO } from '@/lib/constants';

interface ReviewSchemaProps {
  reviews: Testimonial[];
}

export default function ReviewSchema({ reviews }: ReviewSchemaProps) {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://customkitchensbylopez.co';
  
  // Calculate aggregate rating
  const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
  const averageRating = reviews.length > 0 ? (totalRating / reviews.length).toFixed(1) : '5.0';
  
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${baseUrl}/#organization`,
    name: BUSINESS_INFO.name,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: averageRating,
      reviewCount: reviews.length,
      bestRating: '5',
      worstRating: '1'
    },
    review: reviews.map(review => ({
      '@type': 'Review',
      reviewRating: {
        '@type': 'Rating',
        ratingValue: review.rating.toString(),
        bestRating: '5',
        worstRating: '1'
      },
      author: {
        '@type': 'Person',
        name: review.name
      },
      datePublished: review.date,
      reviewBody: review.text,
      itemReviewed: {
        '@type': 'Service',
        name: review.service,
        provider: {
          '@type': 'LocalBusiness',
          name: BUSINESS_INFO.name
        }
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}