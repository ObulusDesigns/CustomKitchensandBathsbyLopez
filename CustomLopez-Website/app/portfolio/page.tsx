'use client';

import { useState } from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
// import { portfolioProjects, getProjectsByCategory } from '@/lib/portfolio-data';
import { customerReviews, getReviewsByCategory } from '@/lib/real-portfolio-data';
import { BUSINESS_INFO } from '@/lib/constants';
import { GAEvent } from '@/components/analytics/GoogleAnalytics';

// Since we're using 'use client' for interactivity, we need to move metadata to layout.tsx
// export const metadata: Metadata = {
//   title: 'Kitchen & Bath Remodeling Portfolio | Our Work in Monmouth County NJ',
//   description: 'Browse our portfolio of completed kitchen and bathroom remodeling projects throughout Monmouth County. See our craftsmanship and design expertise in action.',
//   keywords: 'remodeling portfolio, kitchen gallery, bathroom gallery, before and after, Monmouth County projects',
// };

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'kitchen', name: 'Kitchen Remodeling' },
  { id: 'bathroom', name: 'Bathroom Remodeling' },
  { id: 'home-renovation', name: 'Home Renovations' },
  { id: 'custom-work', name: 'Custom Work' }
];

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const filteredReviews = getReviewsByCategory(selectedCategory);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    GAEvent.viewService(`Portfolio - ${category}`);
  };

  return (
    <PageLayout
      hero={{
        title: 'Our Portfolio',
        subtitle: `See the quality and craftsmanship that ${BUSINESS_INFO.name} brings to every project`,
        breadcrumbs: [
          { text: 'Portfolio', href: '/portfolio' }
        ],
        backgroundImage: '/images/gallery/IMG_5705.jpeg'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 text-burgundy mb-6">
            Transforming Monmouth County Homes Since {BUSINESS_INFO.yearEstablished}
          </h2>
          <p className="body-large text-gray-700 max-w-4xl mx-auto mb-8">
            Browse our portfolio of completed kitchen and bathroom remodeling projects throughout 
            Monmouth County. Each project showcases our commitment to quality craftsmanship, 
            attention to detail, and personalized design solutions that reflect our clients' unique styles and needs.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">500+</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">{new Date().getFullYear() - BUSINESS_INFO.yearEstablished}+</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">100%</div>
              <div className="text-gray-600">Customer Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-gold mb-2">5★</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50 sticky top-20 z-20">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-burgundy text-white border-burgundy'
                    : 'bg-white text-burgundy border-burgundy hover:bg-burgundy hover:text-white'
                }`}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReviews.map((review) => (
              <div
                key={review.id}
                className="group cursor-pointer"
                onClick={() => GAEvent.viewProject(review.projectType)}
              >
                <div className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  {/* Header with Google "G" icon */}
                  <div className="bg-gradient-to-r from-burgundy to-burgundy-dark p-6 text-white">
                    <div className="flex items-start justify-between">
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold mb-1">{review.customerName}</h3>
                        <p className="text-burgundy-light text-sm">{review.reviewDate}</p>
                      </div>
                      <div className="bg-white rounded-full p-2 ml-4">
                        <svg className="w-6 h-6" viewBox="0 0 24 24">
                          <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                          <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                          <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                          <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                        </svg>
                      </div>
                    </div>
                    
                    {/* Category Badge */}
                    <div className="mt-3">
                      <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm capitalize">
                        {review.projectType}
                      </span>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 flex-grow flex flex-col">
                    {/* Rating */}
                    <div className="flex items-center space-x-1 text-gold mb-3">
                      {[...Array(review.rating)].map((_, i) => (
                        <svg key={i} className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="text-sm text-gray-600 ml-2">Google Review</span>
                    </div>
                    
                    <p className="text-gray-700 mb-4 flex-grow line-clamp-4">
                      "{review.reviewText}"
                    </p>
                    
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {review.highlights.slice(0, 3).map((highlight, index) => (
                        <span key={index} className="bg-cream px-2 py-1 rounded text-xs text-burgundy">
                          {highlight}
                        </span>
                      ))}
                      {review.highlights.length > 3 && (
                        <span className="bg-cream px-2 py-1 rounded text-xs text-burgundy">
                          +{review.highlights.length - 3} more
                        </span>
                      )}
                    </div>
                    
                    {/* Photo count if available */}
                    {review.photoCount && (
                      <div className="flex items-center text-sm text-gray-600">
                        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                        </svg>
                        {review.photoCount} photos
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* No Results Message */}
          {filteredReviews.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">No projects found in this category.</p>
            </div>
          )}
          
          {/* View More Reviews Button */}
          <div className="text-center mt-12">
            <a 
              href="https://www.google.com/search?q=customkitchensbylope#lkt=LocalPoiReviews&lpg=cid:CgIgAQ%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 bg-white border-2 border-burgundy text-burgundy px-8 py-3 rounded-full hover:bg-burgundy hover:text-white transition-all duration-200 font-semibold"
              onClick={() => GAEvent.viewService('Google Reviews')}
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <span>View All Google Reviews</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Ready to See Your Home in Our Portfolio?
          </h2>
          <p className="body-large mb-8 max-w-3xl mx-auto">
            Let's discuss your kitchen or bathroom remodeling project and create something 
            beautiful together. Schedule your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href={`tel:${BUSINESS_INFO.phone}`} 
              className="btn-secondary"
              onClick={() => GAEvent.phoneClick(BUSINESS_INFO.phone)}
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}