'use client';

import Link from 'next/link';
import { SERVICE_AREAS, BUSINESS_INFO } from '@/lib/constants';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap';

export default function ServiceAreas() {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-burgundy mb-4">
            Proudly Serving All of Monmouth County
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            With our central location in {BUSINESS_INFO.address.city}, we provide prompt, 
            professional kitchen and bathroom remodeling services throughout Monmouth County 
            and surrounding areas.
          </p>
        </div>

        {/* Service Area Map */}
        <div className="mb-12">
          <ServiceAreaMap height="400px" showControls={true} />
        </div>

        {/* Service Areas Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div>
            <h3 className="font-semibold text-burgundy mb-4 text-lg">Central Monmouth</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.primary.slice(0, 5).map((town) => (
                <li key={town}>
                  <Link
                    href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-gold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{town}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-burgundy mb-4 text-lg">Eastern Shore</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.primary.slice(5, 10).map((town) => (
                <li key={town}>
                  <Link
                    href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-gold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{town}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-burgundy mb-4 text-lg">Western Communities</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.primary.slice(10, 15).map((town) => (
                <li key={town}>
                  <Link
                    href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-gold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{town}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-burgundy mb-4 text-lg">Additional Areas</h3>
            <ul className="space-y-2">
              {SERVICE_AREAS.primary.slice(15, 20).map((town) => (
                <li key={town}>
                  <Link
                    href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-gray-700 hover:text-gold transition-colors duration-200 flex items-center space-x-1"
                  >
                    <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span>{town}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Box */}
        <div className="bg-cream rounded-xl p-8 text-center">
          <h3 className="heading-3 text-burgundy mb-4">
            Don't See Your Town Listed?
          </h3>
          <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
            We serve all of Monmouth County and may be able to accommodate projects in neighboring counties. 
            Contact us to discuss your project location.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="tel:7329950300" className="btn-primary">
              Get Free Consultation
            </Link>
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-outline"
            >
              Call {BUSINESS_INFO.phone}
            </a>
          </div>
        </div>

        {/* SEO Text */}
        <div className="mt-12 text-center text-sm text-gray-600">
          <p>
            Serving kitchen and bathroom remodeling needs throughout {SERVICE_AREAS.counties.join(', ')} 
            {' '}with a focus on quality craftsmanship and customer satisfaction.
          </p>
        </div>
      </div>
    </section>
  );
}