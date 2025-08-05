import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceCTA from '@/components/sections/ServiceCTA';
import { BUSINESS_INFO, SERVICE_AREAS, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Tile & Flooring Installation | Kitchen & Bathroom | Monmouth County NJ',
  description: 'Expert tile and flooring installation in Monmouth County, NJ. Ceramic, porcelain, natural stone, hardwood, and luxury vinyl. Transform your floors with professional installation.',
  keywords: 'tile installation, flooring installation, bathroom tile, kitchen flooring, hardwood floors, luxury vinyl, Monmouth County NJ, flooring contractors near me',
  openGraph: {
    title: 'Professional Tile & Flooring Installation | Custom Kitchens & Baths by Lopez',
    description: 'Expert tile and flooring installation for kitchens and bathrooms. Quality materials and professional installation throughout Monmouth County.',
    images: ['/images/gallery/tile-flooring-hero.jpg'],
  },
};

const flooringTypes = [
  {
    name: 'Ceramic & Porcelain Tile',
    description: 'Versatile and durable options perfect for kitchens, bathrooms, and high-traffic areas.',
    features: ['Water resistant', 'Easy maintenance', 'Endless design options', 'Suitable for radiant heat'],
    bestFor: 'Bathrooms, kitchens, entryways',
    priceRange: '$3-$15 per sq ft installed',
  },
  {
    name: 'Natural Stone',
    description: 'Timeless elegance with marble, travertine, slate, and granite tiles.',
    features: ['Unique natural patterns', 'Increases home value', 'Extremely durable', 'Cool underfoot'],
    bestFor: 'Luxury bathrooms, formal areas',
    priceRange: '$8-$25 per sq ft installed',
  },
  {
    name: 'Hardwood Flooring',
    description: 'Classic beauty that adds warmth and value to any room in your home.',
    features: ['Timeless appeal', 'Can be refinished', 'Adds home value', 'Natural warmth'],
    bestFor: 'Living areas, bedrooms, dining rooms',
    priceRange: '$6-$18 per sq ft installed',
  },
  {
    name: 'Luxury Vinyl Plank',
    description: 'Modern technology delivers wood and stone looks with superior performance.',
    features: ['100% waterproof', 'Scratch resistant', 'Comfortable underfoot', 'DIY friendly'],
    bestFor: 'Basements, bathrooms, entire home',
    priceRange: '$4-$10 per sq ft installed',
  },
];

const tilePatterns = [
  { name: 'Herringbone', description: 'Classic zigzag pattern adds movement and elegance' },
  { name: 'Subway', description: 'Timeless brick pattern, perfect for backsplashes and showers' },
  { name: 'Hexagon', description: 'Modern geometric look gaining popularity' },
  { name: 'Basketweave', description: 'Traditional pattern perfect for vintage styles' },
  { name: 'Chevron', description: 'V-shaped pattern creates visual interest' },
  { name: 'Diagonal', description: 'Makes small spaces appear larger' },
];

const process = [
  {
    step: 1,
    title: 'Design Consultation',
    description: 'Explore materials, patterns, and layouts that complement your space and style.',
  },
  {
    step: 2,
    title: 'Surface Preparation',
    description: 'Proper subfloor preparation ensures a level surface and lasting installation.',
  },
  {
    step: 3,
    title: 'Layout Planning',
    description: 'Strategic tile placement minimizes cuts and creates balanced, beautiful patterns.',
  },
  {
    step: 4,
    title: 'Professional Installation',
    description: 'Precise cutting, proper spacing, and expert techniques ensure flawless results.',
  },
  {
    step: 5,
    title: 'Grouting & Sealing',
    description: 'Color-matched grout and proper sealing protect your investment.',
  },
  {
    step: 6,
    title: 'Final Details',
    description: 'Transitions, trim work, and thorough cleanup complete your project.',
  },
];

const faqs = [
  {
    question: 'How long does tile installation take?',
    answer: 'Most bathroom floors can be completed in 2-3 days, while larger areas like kitchens may take 3-5 days. This includes surface preparation, installation, grouting, and sealing. The area must cure for 24-48 hours before use.',
  },
  {
    question: 'What\'s the best flooring for bathrooms?',
    answer: 'Porcelain and ceramic tiles are ideal for bathrooms due to their water resistance. Luxury vinyl plank is another excellent waterproof option. Natural stone like marble adds luxury but requires more maintenance.',
  },
  {
    question: 'Can you install tile over existing flooring?',
    answer: 'In some cases, yes. We can install tile over existing tile, vinyl, or hardwood if the surface is stable and level. However, removing old flooring often provides better results and prevents height issues.',
  },
  {
    question: 'How do I choose the right tile size?',
    answer: 'Larger tiles (12"x24" or bigger) make spaces feel larger and have fewer grout lines. Smaller tiles work better for shower floors and curved areas. We help you choose sizes that complement your space.',
  },
  {
    question: 'What\'s included in your flooring installation service?',
    answer: 'Our service includes material delivery, old floor removal if needed, subfloor preparation, professional installation, grouting/sealing, transition strips, and complete cleanup. We handle every aspect of your project.',
  },
];

const galleryImages = [
  {
    src: '/images/gallery/IMG_6162.jpeg',
    alt: 'Marble hexagon bathroom floor tile installation',
    title: 'Marble Hexagon - Master Bath',
  },
  {
    src: '/images/gallery/IMG_6163.jpeg',
    alt: 'Large format porcelain kitchen floor tiles',
    title: 'Modern Kitchen - Porcelain',
  },
  {
    src: '/images/gallery/IMG_6164.jpeg',
    alt: 'Herringbone pattern wood-look tile',
    title: 'Herringbone Pattern - LVP',
  },
  {
    src: '/images/gallery/IMG_6420.jpeg',
    alt: 'Natural stone shower installation',
    title: 'Spa Shower - Natural Stone',
  },
];

export default function TileFlooringPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Tile and Flooring Installation"
        description="Professional tile and flooring installation services in Monmouth County, NJ. Expert installation of ceramic, porcelain, natural stone, hardwood, and luxury vinyl flooring."
        areaServed={SERVICE_AREAS.primary}
        aggregateRating={{
          ratingValue: TRUST_SIGNALS.stats.averageRating,
          reviewCount: TRUST_SIGNALS.stats.totalReviews,
        }}
      />
      <FAQSchema faqs={faqs} />
      
      <PageLayout
        hero={{
          title: 'Tile & Flooring Installation',
          subtitle: 'Beautiful floors that stand the test of time - Expert installation for every room',
          breadcrumbs: [
            { text: 'Services', href: '/services' },
            { text: 'Tile & Flooring', href: '/services/tile-flooring' }
          ],
          backgroundImage: '/images/gallery/IMG_4149.jpeg'
        }}
      >
        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Transform Your Space with Expert Flooring Installation
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  The right flooring sets the foundation for your entire room's design. At {BUSINESS_INFO.name}, 
                  we specialize in professional tile and flooring installation that combines aesthetic appeal 
                  with long-lasting performance.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're dreaming of a spa-like bathroom with heated marble floors, a kitchen with 
                  easy-to-clean porcelain tile, or warm hardwood throughout your home, our expert installers 
                  bring your vision to life with precision and care.
                </p>
                <p className="text-gray-600 mb-8">
                  Serving Monmouth County for over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, 
                  we've installed thousands of square feet of flooring in homes from historic Victorians in 
                  Red Bank to modern estates in Colts Neck. Our experience means your project is done right the first time.
                </p>
                
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">25k+</div>
                    <div className="text-sm text-gray-600">Sq Ft Installed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">15+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">100%</div>
                    <div className="text-sm text-gray-600">Satisfaction</div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/portfolio" className="btn-primary">
                    View Our Work
                  </Link>
                </div>
              </div>
              
              <div className="relative h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_4150.jpeg"
                  alt="Professional tile installation in Monmouth County"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Flooring Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Flooring Options for Every Style & Budget
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                From classic to contemporary, we offer a wide range of flooring materials to suit 
                your lifestyle, design preferences, and budget.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {flooringTypes.map((type) => (
                <div key={type.name} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-burgundy mb-3">{type.name}</h3>
                    <p className="text-gray-600 mb-4">{type.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-burgundy mb-2">Key Benefits:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {type.features.map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <span className="text-sm text-gray-600">Best for:</span>
                        <p className="text-sm font-semibold text-burgundy">{type.bestFor}</p>
                      </div>
                      <div>
                        <span className="text-sm text-gray-600">Investment:</span>
                        <p className="text-sm font-semibold text-gold">{type.priceRange}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tile Patterns Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Popular Tile Patterns & Layouts
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                The right pattern can transform ordinary tile into a stunning design feature. 
                We expertly install all patterns, from classic to contemporary.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tilePatterns.map((pattern) => (
                <div key={pattern.name} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-20 h-20 bg-burgundy/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-10 h-10 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-burgundy mb-2">{pattern.name}</h3>
                  <p className="text-gray-600">{pattern.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Installation Process */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Professional Installation Process
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Quality installation is the difference between floors that last decades and those that 
                fail within years. Our proven process ensures lasting beauty and performance.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-6 text-center shadow-md">
                  <div className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-burgundy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-2 text-burgundy mb-6">
                  Why Monmouth County Trusts Us with Their Flooring
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Master Craftsmen
                    </h3>
                    <p className="text-gray-600">
                      Our installers are true artisans with years of specialized training. 
                      We handle complex patterns, custom inlays, and challenging layouts with expertise.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Proper Preparation
                    </h3>
                    <p className="text-gray-600">
                      We never cut corners on substrate preparation. Level surfaces, moisture barriers, 
                      and proper underlayment ensure your floors perform beautifully for decades.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Premium Materials
                    </h3>
                    <p className="text-gray-600">
                      We partner with leading manufacturers and use only professional-grade adhesives, 
                      grouts, and sealers. Quality materials mean lasting results.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Clean Job Sites
                    </h3>
                    <p className="text-gray-600">
                      We protect your home during installation and leave it cleaner than we found it. 
                      Daily cleanup and final detailing are standard with every project.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/testimonials" className="btn-secondary">
                    Read Customer Reviews
                  </Link>
                </div>
              </div>

              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl order-1 lg:order-2">
                <Image
                  src="/images/gallery/IMG_4151.jpeg"
                  alt="Our expert flooring installation team"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Recent Flooring Projects
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                See examples of our tile and flooring installations in homes throughout Monmouth County. 
                Each project showcases our commitment to quality and attention to detail.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn-primary">
                View Complete Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Common Questions About Tile & Flooring
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-6">
                  <h3 className="text-xl font-semibold text-burgundy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-3 text-burgundy mb-4">
                Professional Flooring Installation Across Monmouth County
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From beach homes in Spring Lake to suburban residences in Marlboro, 
                we bring expert flooring installation to every corner of Monmouth County.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SERVICE_AREAS.primary.map((town) => (
                <Link
                  key={town}
                  href={`/services/tile-flooring/${town.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-center py-3 px-4 bg-white rounded-lg hover:shadow-md transition-all duration-200 group"
                >
                  <span className="text-gray-700 group-hover:text-burgundy transition-colors">
                    {town}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <ServiceCTA 
          title="Ready for Beautiful New Floors?"
          description="Whether it's a bathroom refresh or whole-home flooring, we're here to help. Schedule your free consultation and let's explore the possibilities."
          primaryButtonText="Get Your Free Quote"
          secondaryButtonText="Browse Flooring Options"
        />
      </PageLayout>
    </>
  );
}