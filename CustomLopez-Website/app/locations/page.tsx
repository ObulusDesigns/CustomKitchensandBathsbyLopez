import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import ServiceAreaMap from '@/components/ui/ServiceAreaMap';
import { monmouthCountyLocations } from '@/lib/locations';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Service Areas in Monmouth County NJ | Kitchen & Bath Remodeling Locations',
  description: 'Professional kitchen and bathroom remodeling services throughout Monmouth County, NJ. Serving Freehold, Colts Neck, Holmdel, Red Bank, and all surrounding communities.',
  keywords: 'Monmouth County remodeling, service areas, kitchen remodeling locations, bathroom renovation near me',
};

// Group locations by type
const primaryLocations = monmouthCountyLocations.slice(0, 10);
const shoreLocations = monmouthCountyLocations.filter(loc => 
  ['spring-lake', 'sea-girt', 'manasquan'].includes(loc.id)
);
const additionalLocations = monmouthCountyLocations.filter(loc => 
  !primaryLocations.includes(loc) && !shoreLocations.includes(loc)
);

export default function LocationsPage() {
  return (
    <PageLayout
      hero={{
        title: 'Our Service Areas',
        subtitle: `Proudly serving all of Monmouth County with expert kitchen and bathroom remodeling for over ${new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years`,
        breadcrumbs: [
          { text: 'Locations', href: '/locations' }
        ],
        backgroundImage: '/images/gallery/IMG_0424.jpeg'
      }}
    >
      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h2 className="heading-2 text-burgundy mb-6">
              Serving All of Monmouth County, New Jersey
            </h2>
            <p className="body-large text-gray-700 mb-8">
              From the historic streets of Freehold to the coastal communities of Spring Lake, 
              {BUSINESS_INFO.name} brings exceptional craftsmanship and personalized service to 
              every corner of Monmouth County. No matter where you're located, we're committed 
              to transforming your house into your dream home.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-lg">
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{monmouthCountyLocations.length}+ Communities Served</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">{BUSINESS_INFO.serviceRadius} Mile Service Radius</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-700">Same-Day Consultations</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Primary Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Primary Service Areas
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              These are our most frequently served communities where we've completed hundreds 
              of kitchen and bathroom renovations. Click any location to learn more about our 
              services in your area.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {primaryLocations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
              >
                <div className="relative h-48 rounded-t-lg overflow-hidden">
                  <Image
                    src="/images/gallery/IMG_0428.jpeg"
                    alt={`Kitchen remodeling in ${location.name}`}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-2xl font-bold">{location.name}</h3>
                    <p className="text-sm opacity-90">{location.zipCodes.join(', ')}</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {location.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Near: {location.nearbyTowns.slice(0, 2).join(', ')}
                    </span>
                    <span className="text-gold group-hover:translate-x-2 transition-transform duration-200">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Shore Communities */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-3 text-burgundy mb-4">
              Shore Communities
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Specializing in coastal home renovations that withstand salt air and moisture 
              while maintaining luxury and style.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {shoreLocations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="group bg-cream rounded-lg p-6 hover:shadow-md transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-burgundy mb-2 group-hover:text-gold transition-colors">
                  {location.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3">
                  {location.description.substring(0, 100)}...
                </p>
                <div className="flex items-center text-sm text-gray-500">
                  <svg className="w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {location.landmarks[0]}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* All Service Areas */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-3 text-burgundy mb-4">
              All Service Areas
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We're proud to serve every community in Monmouth County. If your town isn't listed, 
              please contact us – we likely service your area too!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {monmouthCountyLocations.map((location) => (
              <Link
                key={location.id}
                href={`/locations/${location.slug}`}
                className="text-center py-3 px-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-gold transition-colors duration-200">
                  {location.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Our Service Area Map
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We proudly serve all of Monmouth County with a 30-mile service radius from our 
              Freehold location. Click on any marker to learn more about our services in that area.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-burgundy mb-6">
                Why Choose a Local Remodeling Expert?
              </h2>
              <div className="space-y-4 text-gray-600">
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-1">Local Knowledge</h3>
                    <p>We understand Monmouth County building codes, permit requirements, and architectural styles.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-1">Quick Response</h3>
                    <p>Being local means we can respond quickly to consultations and any service needs.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-1">Community Reputation</h3>
                    <p>Our reputation in Monmouth County is built on hundreds of successful projects and happy neighbors.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-burgundy mb-1">Local Suppliers</h3>
                    <p>Strong relationships with local suppliers mean better prices and faster material delivery.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <ServiceAreaMap 
              height="500px" 
              showControls={true} 
            />
          </div>
        </div>
      </section>
    </PageLayout>
  );
}