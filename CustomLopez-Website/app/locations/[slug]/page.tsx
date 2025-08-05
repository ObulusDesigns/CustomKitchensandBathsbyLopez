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
    slug: string;
  };
}

export async function generateStaticParams() {
  const slugs = getAllLocationSlugs();
  return slugs.map((slug) => ({
    slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const location = getLocationBySlug(params.slug);
  
  if (!location) {
    return {
      title: 'Location Not Found',
    };
  }

  const title = `Kitchen & Bathroom Remodeling in ${location.name}, ${location.stateAbbr} | Near Me`;
  const description = `Professional kitchen and bathroom remodeling services in ${location.name}, ${location.stateAbbr}. Custom cabinetry, luxury renovations, and expert craftsmanship. Serving ${location.nearbyTowns.slice(0, 3).join(', ')} and surrounding areas.`;

  return {
    title,
    description,
    keywords: `${location.name} kitchen remodeling, ${location.name} bathroom renovation, remodeling near me, ${location.name} ${location.stateAbbr}, ${location.zipCodes.join(', ')}`,
    openGraph: {
      title,
      description,
      url: `${process.env.NEXT_PUBLIC_SITE_URL}/locations/${location.slug}`,
      images: ['/images/gallery/IMG_0428.jpeg'],
    },
    alternates: {
      canonical: `${process.env.NEXT_PUBLIC_SITE_URL}/locations/${location.slug}`,
    },
  };
}

export default function LocationPage({ params }: PageProps) {
  const location = getLocationBySlug(params.slug);
  
  if (!location) {
    notFound();
  }

  const nearbyLocations = getNearbyLocations(location.slug);

  return (
    <>
      <LocalBusinessSchema location={location} />
      <PageLayout
        hero={{
          title: `Remodeling Services in ${location.name}`,
          subtitle: `Transform your home with expert kitchen and bathroom remodeling in ${location.name}, ${location.stateAbbr}`,
          breadcrumbs: [
            { text: 'Locations', href: '/locations' },
            { text: location.name, href: `/locations/${location.slug}` }
          ],
          backgroundImage: '/images/gallery/IMG_0424.jpeg'
        }}
      >
        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Professional Remodeling Services in {location.name}
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  {location.description} {BUSINESS_INFO.name} has been transforming homes 
                  in {location.name} for over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, 
                  bringing exceptional craftsmanship and personalized service to every project.
                </p>
                <p className="text-gray-600 mb-8">
                  Whether you're updating a kitchen in {location.landmarks[0] ? `near ${location.landmarks[0]}` : location.name}, 
                  renovating a bathroom, or installing custom cabinetry throughout your home, 
                  our local team understands the unique style and needs of {location.name} residents.
                </p>
                
                {/* Local Features */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Local {location.name} Team</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    <span className="text-gray-700">Quick Response Time</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">Knows {location.name} Codes</span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                    </svg>
                    <span className="text-gray-700">Community Reputation</span>
                  </div>
                </div>
              </div>
              
              <div className="relative h-96 lg:h-full rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_6415.jpeg"
                  alt={`Kitchen remodeling in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services in Location */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Services in {location.name}
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive remodeling services to homeowners throughout {location.name} 
                and the surrounding {location.nearbyTowns.slice(0, 2).join(' and ')} areas.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {SERVICES.primary.map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}/${location.slug}`}
                  className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-8">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mb-6 group-hover:bg-gold/30 transition-colors">
                      <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-burgundy mb-3 group-hover:text-gold transition-colors">
                      {service.name} in {location.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                    <span className="text-gold font-medium group-hover:translate-x-2 inline-block transition-transform duration-200">
                      Learn More →
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us in Location */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_0426.jpeg"
                  alt={`Our team working in ${location.name}`}
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Why {location.name} Homeowners Choose Us
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Local Knowledge & Expertise
                    </h3>
                    <p className="text-gray-600">
                      We understand {location.name}'s unique architectural styles, from 
                      {location.landmarks.length > 0 ? ` homes near ${location.landmarks[0]}` : ' historic properties'} to 
                      modern developments. Our team knows local building codes and permit requirements.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Serving Your Neighborhood
                    </h3>
                    <p className="text-gray-600">
                      With projects completed throughout {location.name} and nearby {location.nearbyTowns[0]}, 
                      we're just minutes away. This means faster response times and better ongoing support.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Community Reputation
                    </h3>
                    <p className="text-gray-600">
                      Ask your neighbors in {location.name} – many have trusted us with their 
                      kitchen and bathroom renovations. We're proud of our reputation in the community.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Quality That Lasts
                    </h3>
                    <p className="text-gray-600">
                      We use materials and techniques suited to {location.county}'s climate 
                      and conditions, ensuring your renovation stands the test of time.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </section>

        {/* Local Area Information */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-3 text-burgundy mb-4">
                Serving {location.name} and Surrounding Areas
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                In addition to {location.name} (ZIP: {location.zipCodes.join(', ')}), 
                we proudly serve these nearby communities with the same dedication to quality and service.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {nearbyLocations.map((nearby) => (
                <Link
                  key={nearby.id}
                  href={`/locations/${nearby.slug}`}
                  className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-200 group"
                >
                  <h3 className="text-lg font-semibold text-burgundy mb-2 group-hover:text-gold transition-colors">
                    {nearby.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    {nearby.population?.toLocaleString()} residents
                  </p>
                  <span className="text-gold text-sm">
                    View Services →
                  </span>
                </Link>
              ))}
            </div>

            {location.landmarks.length > 0 && (
              <div className="mt-12 bg-white rounded-lg p-8 shadow-md">
                <h3 className="text-xl font-semibold text-burgundy mb-4">
                  {location.name} Landmarks We Serve Near
                </h3>
                <div className="grid md:grid-cols-3 gap-4">
                  {location.landmarks.map((landmark) => (
                    <div key={landmark} className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">{landmark}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Frequently Asked Questions in {location.name}
            </h2>

            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Do you offer free consultations in {location.name}?
                </h3>
                <p className="text-gray-600">
                  Yes! We provide free in-home consultations throughout {location.name} and 
                  {location.nearbyTowns.length > 0 ? ` nearby ${location.nearbyTowns[0]}` : ' surrounding areas'}. 
                  Our design experts will visit your home to discuss your project, take measurements, 
                  and provide a detailed quote.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  How long have you been serving {location.name}?
                </h3>
                <p className="text-gray-600">
                  {BUSINESS_INFO.name} has been serving {location.name} and all of {location.county} 
                  for over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years. We've 
                  completed hundreds of kitchen and bathroom renovations in the area.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Are you familiar with {location.name} building codes?
                </h3>
                <p className="text-gray-600">
                  Absolutely. Our team is well-versed in all local building codes and permit 
                  requirements for {location.name} and {location.county}. We handle all permit 
                  applications and coordinate inspections to ensure your project meets all regulations.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  What areas near {location.name} do you service?
                </h3>
                <p className="text-gray-600">
                  In addition to {location.name}, we serve all nearby communities including 
                  {location.nearbyTowns.join(', ')}. Our service area covers a {BUSINESS_INFO.serviceRadius}-mile 
                  radius, ensuring we can respond quickly to your needs.
                </p>
              </div>

              <div className="border-b border-gray-200 pb-6">
                <h3 className="text-xl font-semibold text-burgundy mb-3">
                  Can you provide references from {location.name} homeowners?
                </h3>
                <p className="text-gray-600">
                  Of course! We're happy to provide references from satisfied customers in {location.name} and 
                  surrounding areas. Many of our clients are happy to share their remodeling experience 
                  and show off their beautiful new kitchens and bathrooms.
                </p>
              </div>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}