import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import PageLayout from '@/components/layout/PageLayout';
import { SERVICES, SERVICE_AREAS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Remodeling Services in Monmouth County NJ | Kitchen & Bath Experts',
  description: 'Professional kitchen remodeling, bathroom renovation, and custom cabinetry services throughout Monmouth County. Licensed, insured, and trusted since 2005.',
  keywords: 'remodeling services, kitchen remodeling, bathroom renovation, custom cabinetry, Monmouth County, NJ',
};

const serviceImages = {
  'kitchen-remodeling': '/images/gallery/IMG_4149.jpeg',
  'bathroom-remodeling': '/images/gallery/IMG_0428.jpeg',
  'custom-cabinetry': '/images/gallery/IMG_6415.jpeg',
  'countertop-installation': '/images/gallery/IMG_0028.jpeg',
  'tile-flooring': '/images/gallery/IMG_6162.jpeg',
  'home-additions': '/images/gallery/IMG_6483.jpeg',
  'basement-finishing': '/images/gallery/IMG_6885.jpeg',
  'interior-remodeling': '/images/gallery/IMG_6887.jpeg',
};

export default function ServicesPage() {
  return (
    <PageLayout
      hero={{
        title: 'Our Remodeling Services',
        subtitle: 'Transform your home with expert craftsmanship and personalized service throughout Monmouth County',
        breadcrumbs: [
          { text: 'Services', href: '/services' }
        ],
        backgroundImage: '/images/gallery/IMG_6661.jpeg'
      }}
    >
      {/* Services Overview */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-6">
              Comprehensive Remodeling Solutions
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we offer full-service remodeling solutions that transform 
              your house into your dream home. Our expert team handles every aspect of your project 
              with precision and care.
            </p>
          </div>

          {/* Primary Service Cards */}
          <h3 className="heading-3 text-burgundy mb-8 text-center">Our Core Services</h3>
          <div className="space-y-16 mb-20">
            {SERVICES.primary.map((service, index) => (
              <div key={service.id} className={`grid lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <h3 className="heading-3 text-burgundy mb-4">
                    {service.name}
                  </h3>
                  <p className="body-large text-gray-700 mb-6">
                    {service.description}
                  </p>
                  
                  <div className="grid sm:grid-cols-2 gap-4 mb-8">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-start space-x-2">
                        <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link 
                    href={`/services/${service.id}`} 
                    className="btn-primary inline-flex items-center space-x-2"
                  >
                    <span>Learn More About {service.name}</span>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>

                <div className={`relative h-96 rounded-xl overflow-hidden shadow-xl ${
                  index % 2 === 1 ? 'lg:order-1' : ''
                }`}>
                  <Image
                    src={serviceImages[service.id as keyof typeof serviceImages]}
                    alt={`${service.name} in Monmouth County`}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-3 text-burgundy mb-4">
              Additional Services We Offer
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Beyond our core specialties, we provide a range of home improvement services 
              to complete your renovation project.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {SERVICES.additional.map((service) => (
              <Link 
                key={service.id} 
                href={`/services/${service.id}`}
                className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-200 block"
              >
                <div className="w-12 h-12 bg-gold/20 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-burgundy mb-2">{service.name}</h3>
                <p className="text-gray-600 text-sm">
                  {service.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-burgundy mb-6">
                Why Monmouth County Homeowners Choose Us
              </h2>
              <p className="body-large text-gray-700 mb-8">
                With hundreds of successful projects throughout Monmouth County, we've built our 
                reputation on quality, reliability, and exceptional customer service. When you 
                choose us, you're choosing a partner committed to bringing your vision to life.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">Licensed & Insured</h3>
                    <p className="text-gray-600">Fully licensed, bonded, and insured for your complete peace of mind.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">Expert Craftsmen</h3>
                    <p className="text-gray-600">Skilled professionals with decades of combined experience.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">Local Expertise</h3>
                    <p className="text-gray-600">Deep knowledge of Monmouth County homes and local building codes.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/gallery/IMG_0426.jpeg"
                alt="Our team at work on a kitchen remodel"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-cream">
        <div className="container-custom text-center">
          <h2 className="heading-3 text-burgundy mb-4">
            Proudly Serving All of Monmouth County
          </h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            No matter where you're located in Monmouth County, we bring the same level of 
            expertise and dedication to every project.
          </p>
          
          <div className="flex flex-wrap justify-center gap-3">
            {SERVICE_AREAS.primary.slice(0, 10).map((town) => (
              <span key={town} className="bg-white px-4 py-2 rounded-full text-gray-700 shadow-sm">
                {town}
              </span>
            ))}
            <Link href="/locations" className="bg-burgundy text-white px-4 py-2 rounded-full hover:bg-burgundy-dark transition-colors duration-200">
              View All Locations →
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}