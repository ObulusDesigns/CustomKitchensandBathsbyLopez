import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const serviceImages = {
    'kitchen-remodeling': '/images/gallery/IMG_4149.jpeg',
    'bathroom-remodeling': '/images/gallery/IMG_0428.jpeg',
    'custom-cabinetry': '/images/gallery/IMG_6415.jpeg',
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-burgundy mb-4">
            Our Expert Remodeling Services
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            From complete kitchen transformations to luxurious bathroom renovations, 
            we bring your vision to life with exceptional craftsmanship and attention to detail.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {SERVICES.primary.map((service) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer block"
            >
              {/* Service Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={serviceImages[service.id as keyof typeof serviceImages]}
                  alt={`${service.name} in Monmouth County NJ`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                <h3 className="absolute bottom-4 left-6 right-6 text-2xl font-heading text-white">
                  {service.name}
                </h3>
              </div>

              {/* Service Content */}
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                {/* Features List */}
                <ul className="space-y-2 mb-6">
                  {service.features.slice(0, 4).map((feature) => (
                    <li key={feature} className="flex items-start space-x-2">
                      <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Link */}
                <div className="inline-flex items-center space-x-2 text-burgundy group-hover:text-gold transition-colors duration-300 font-semibold">
                  <span>Learn More</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-12">
          <Link href="/services" className="btn-primary">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
}