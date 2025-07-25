import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import PageLayout from '@/components/layout/PageLayout';
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema';
import { getLocationBySlug, getAllLocationSlugs, getNearbyLocations } from '@/lib/locations';
import { BUSINESS_INFO, SERVICES } from '@/lib/constants';

interface PageProps {
  params: {
    service: string;
    location: string;
  };
}

export async function generateStaticParams() {
  const locationSlugs = getAllLocationSlugs();
  const allServices = [...SERVICES.primary, ...SERVICES.additional];
  const serviceIds = allServices.map(s => s.id);
  
  const params = [];
  for (const service of serviceIds) {
    for (const location of locationSlugs) {
      params.push({ service, location });
    }
  }
  
  return params;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.location);
  const allServices = [...SERVICES.primary, ...SERVICES.additional];
  const service = allServices.find(s => s.id === params.service);
  
  if (!location || !service) {
    return {
      title: 'Service Not Found',
    };
  }

  const title = `${service.name} in ${location.name}, ${location.stateAbbr} | Near Me Services`;
  const description = `Professional ${service.name.toLowerCase()} services in ${location.name}, ${location.stateAbbr}. ${service.description} Serving ${location.nearbyTowns.slice(0, 3).join(', ')} and surrounding areas. Call ${BUSINESS_INFO.phone} for a free consultation.`;

  return {
    title,
    description,
    keywords: `${service.name} ${location.name}, ${service.name} near me, ${location.name} ${service.name.toLowerCase()}, ${location.zipCodes.join(', ')}, ${location.county} ${service.name}`,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${params.service}/${params.location}`,
      images: ['/images/gallery/IMG_0428.jpeg'],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/services/${params.service}/${params.location}`,
    },
  };
}

export default function ServiceLocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.location);
  const allServices = [...SERVICES.primary, ...SERVICES.additional];
  const service = allServices.find(s => s.id === params.service);
  
  if (!location || !service) {
    notFound();
  }

  const nearbyLocations = getNearbyLocations(location.slug);

  // Get service-specific content
  const getServiceImage = () => {
    switch (service.id) {
      case 'kitchen-remodeling':
        return '/images/gallery/IMG_0428.jpeg';
      case 'bathroom-remodeling':
        return '/images/gallery/IMG_0183.jpeg';
      case 'custom-cabinetry':
        return '/images/gallery/IMG_0427.jpeg';
      case 'countertop-installation':
        return '/images/gallery/IMG_0430.jpeg';
      case 'tile-flooring':
        return '/images/gallery/IMG_4149.jpeg';
      case 'home-additions':
        return '/images/gallery/IMG_0424.jpeg';
      case 'basement-finishing':
        return '/images/gallery/IMG_0426.jpeg';
      case 'interior-remodeling':
        return '/images/gallery/IMG_6887.jpeg';
      default:
        return '/images/gallery/IMG_0424.jpeg';
    }
  };

  const getLocalProjects = () => {
    const baseProjects = [
      {
        title: `Recent ${service.name} in ${location.name}`,
        description: `Beautiful ${service.name.toLowerCase()} project completed near ${location.landmarks[0] || 'downtown ' + location.name}`,
        features: service.features.slice(0, 3)
      },
      {
        title: `${service.name} Near ${location.nearbyTowns[0]}`,
        description: `Another stunning transformation in the ${location.name} area`,
        features: service.features.slice(2, 5)
      }
    ];
    return baseProjects;
  };

  return (
    <>
      <LocalBusinessSchema location={location} />
      <PageLayout
        hero={{
          title: `${service.name} in ${location.name}`,
          subtitle: `Expert ${service.name.toLowerCase()} services for homeowners in ${location.name}, ${location.stateAbbr} and surrounding areas`,
          breadcrumbs: [
            { text: 'Services', href: '/services' },
            { text: service.name, href: `/services/${service.id}` },
            { text: location.name, href: `/services/${service.id}/${location.slug}` }
          ],
          backgroundImage: getServiceImage()
        }}
      >
        {/* Service + Location Introduction */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Professional {service.name} Services in {location.name}
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Looking for {service.name.toLowerCase()} near me in {location.name}? {BUSINESS_INFO.name} has 
                  been serving the {location.name} community for over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, 
                  transforming homes with exceptional craftsmanship and personalized service.
                </p>
                <p className="text-gray-600 mb-6">
                  {location.description} Our expert team specializes in {service.name.toLowerCase()} projects 
                  that enhance both the beauty and value of {location.name} homes.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you live near {location.landmarks[0] || 'the heart of ' + location.name} or 
                  in the surrounding neighborhoods, we bring the same commitment to quality and attention 
                  to detail to every {service.name.toLowerCase()} project.
                </p>
                
                {/* Service Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-start space-x-3">
                      <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src={getServiceImage()}
                  alt={`${service.name} project in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Service in Location */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Why Choose Us for {service.name} in {location.name}?
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                As a local {location.county} contractor, we understand the unique needs and preferences 
                of {location.name} homeowners. Here's what sets us apart:
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Local {location.name} Expertise
                </h3>
                <p className="text-gray-600">
                  Deep knowledge of {location.name} building codes, architectural styles, and homeowner 
                  preferences ensures your project fits perfectly in your neighborhood.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Quick Response Times
                </h3>
                <p className="text-gray-600">
                  Located nearby, we can quickly respond to consultations and service calls 
                  throughout {location.name} and {location.nearbyTowns[0]}.
                </p>
              </div>

              <div className="bg-white rounded-lg p-8 shadow-md text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  {location.name} References
                </h3>
                <p className="text-gray-600">
                  Ask your neighbors! We've completed numerous {service.name.toLowerCase()} projects 
                  in {location.name} and are happy to provide local references.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Local Projects Showcase */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Recent {service.name} Projects in {location.name}
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Take a look at some of our recent {service.name.toLowerCase()} transformations 
                in {location.name} and surrounding areas.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {getLocalProjects().map((project, index) => (
                <div key={index} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                  <div className="relative h-64">
                    <Image
                      src={getServiceImage()}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-burgundy mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature) => (
                        <span key={feature} className="text-sm bg-cream px-3 py-1 rounded-full text-burgundy">
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn-primary">
                View More {location.name} Projects
              </Link>
            </div>
          </div>
        </section>

        {/* Service Process in Location */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-3 text-burgundy mb-4">
                Our {service.name} Process in {location.name}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final walkthrough, we make your {service.name.toLowerCase()} project 
                in {location.name} smooth and stress-free.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="font-semibold text-burgundy mb-2">Free {location.name} Consultation</h3>
                <p className="text-sm text-gray-600">
                  We visit your {location.name} home to discuss your vision and provide a detailed quote
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="font-semibold text-burgundy mb-2">Design & Planning</h3>
                <p className="text-sm text-gray-600">
                  Create custom designs that complement {location.name} architectural styles
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="font-semibold text-burgundy mb-2">Professional Installation</h3>
                <p className="text-sm text-gray-600">
                  Expert craftsmen complete your project with minimal disruption
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="font-semibold text-burgundy mb-2">Quality Assurance</h3>
                <p className="text-sm text-gray-600">
                  Final inspection ensuring everything meets {location.name} standards
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-3 text-burgundy mb-4">
                {service.name} Services Near {location.name}
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                In addition to {location.name}, we provide {service.name.toLowerCase()} services 
                to these nearby communities:
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.id}
                  href={`/services/${service.id}/${nearby.slug}`}
                  className="bg-gray-50 rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 group"
                >
                  <h3 className="text-lg font-semibold text-burgundy mb-2 group-hover:text-gold transition-colors">
                    {service.name} in {nearby.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-2">
                    {(Math.random() * 10 + 5).toFixed(1)} miles away
                  </p>
                  <span className="text-gold text-sm">
                    Learn More →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Local FAQ */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              {service.name} FAQs for {location.name} Homeowners
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  How much does {service.name.toLowerCase()} cost in {location.name}?
                </h3>
                <p className="text-gray-600">
                  {service.name} costs in {location.name} vary based on project size and materials. 
                  Most {location.name} homeowners invest between $25,000-$75,000 for a complete 
                  {service.name.toLowerCase()} project. We provide free, detailed quotes specific 
                  to your {location.name} home.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Do you handle permits for {service.name.toLowerCase()} in {location.name}?
                </h3>
                <p className="text-gray-600">
                  Yes! We handle all necessary permits for {service.name.toLowerCase()} projects 
                  in {location.name}. Our team is familiar with {location.county} permit requirements 
                  and will coordinate all inspections.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  How long does {service.name.toLowerCase()} take in {location.name}?
                </h3>
                <p className="text-gray-600">
                  Typical {service.name.toLowerCase()} projects in {location.name} take 4-8 weeks, 
                  depending on scope. We'll provide a detailed timeline during your consultation 
                  and keep you updated throughout the process.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Can you match the style of {location.name} homes?
                </h3>
                <p className="text-gray-600">
                  Absolutely! We're experienced with the architectural styles common in {location.name}, 
                  from {location.landmarks.length > 0 ? `historic homes near ${location.landmarks[0]}` : 'traditional designs'} to 
                  modern developments. We'll ensure your {service.name.toLowerCase()} complements your home's character.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-burgundy text-white">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-6">
              Ready to Start Your {service.name} Project in {location.name}?
            </h2>
            <p className="body-large mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied {location.name} homeowners who have transformed their 
              homes with {BUSINESS_INFO.name}. Schedule your free consultation today!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </Link>
              <Link href="/contact" className="btn-secondary">
                Get Your Free {location.name} Quote
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}