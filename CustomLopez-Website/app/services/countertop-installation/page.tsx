import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceCTA from '@/components/sections/ServiceCTA';
import { BUSINESS_INFO, SERVICE_AREAS, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Countertop Installation | Granite, Quartz & Marble | Monmouth County NJ',
  description: 'Professional countertop installation in Monmouth County, NJ. Expert installation of granite, quartz, marble, and solid surface countertops. Transform your kitchen or bathroom with premium surfaces.',
  keywords: 'countertop installation, granite countertops, quartz countertops, marble countertops, countertop replacement, Monmouth County NJ, kitchen countertops near me',
  openGraph: {
    title: 'Premium Countertop Installation Services | Custom Kitchens & Baths by Lopez',
    description: 'Transform your kitchen with professional countertop installation. Granite, quartz, marble, and more. Serving all of Monmouth County, NJ.',
    images: ['/images/gallery/IMG_0028.jpeg'],
  },
};

const countertopTypes = [
  {
    name: 'Granite Countertops',
    description: 'Natural beauty with unmatched durability. Each slab is unique with stunning patterns.',
    features: ['Heat resistant', 'Scratch resistant', 'Unique patterns', '15-25 year lifespan'],
    priceRange: '$40-$100 per sq ft',
  },
  {
    name: 'Quartz Countertops',
    description: 'Engineered perfection combining beauty and performance. Non-porous and low maintenance.',
    features: ['Non-porous surface', 'Consistent patterns', 'Stain resistant', 'No sealing required'],
    priceRange: '$50-$120 per sq ft',
  },
  {
    name: 'Marble Countertops',
    description: 'Timeless elegance for luxury kitchens. Perfect for baking and classic aesthetics.',
    features: ['Cool surface', 'Elegant veining', 'Timeless appeal', 'Increases home value'],
    priceRange: '$60-$150 per sq ft',
  },
  {
    name: 'Solid Surface',
    description: 'Seamless installation with invisible joints. Great for modern, minimalist designs.',
    features: ['Seamless joints', 'Repairable surface', 'Custom shapes', 'Integrated sinks'],
    priceRange: '$35-$85 per sq ft',
  },
];

const process = [
  {
    step: 1,
    title: 'Free Consultation',
    description: 'Visit our showroom or schedule an in-home consultation to explore materials and discuss your vision.',
  },
  {
    step: 2,
    title: 'Precise Measurement',
    description: 'Our experts take detailed measurements and create templates to ensure perfect fit.',
  },
  {
    step: 3,
    title: 'Material Selection',
    description: 'Choose from hundreds of slabs in our supplier network. We help you find the perfect match.',
  },
  {
    step: 4,
    title: 'Fabrication',
    description: 'Your countertops are precision-cut, polished, and prepared with your chosen edge profile.',
  },
  {
    step: 5,
    title: 'Professional Installation',
    description: 'Our certified installers ensure perfect placement, secure mounting, and flawless finishing.',
  },
  {
    step: 6,
    title: 'Final Inspection',
    description: 'We thoroughly inspect every detail and provide care instructions for your new countertops.',
  },
];

const faqs = [
  {
    question: 'How long does countertop installation take?',
    answer: 'Most countertop installations are completed in 1-2 days. The entire process from template to installation typically takes 1-2 weeks, depending on material availability and fabrication requirements.',
  },
  {
    question: 'What is the most durable countertop material?',
    answer: 'Quartz and granite are the most durable options. Quartz is non-porous and requires no sealing, while granite offers superior heat resistance. Both materials can last 25+ years with proper care.',
  },
  {
    question: 'How much do new countertops cost in Monmouth County?',
    answer: 'Countertop costs vary by material and project size. Basic installations start around $2,000, while premium materials for large kitchens can reach $8,000+. We provide free quotes for accurate pricing.',
  },
  {
    question: 'Can you install countertops without replacing cabinets?',
    answer: 'Yes! We frequently install new countertops on existing cabinets. We\'ll inspect your cabinets to ensure they\'re structurally sound and make any necessary reinforcements before installation.',
  },
  {
    question: 'Do you remove old countertops?',
    answer: 'Absolutely. Our service includes removal and disposal of your old countertops. We handle everything from disconnecting sinks and cooktops to ensuring proper disposal of materials.',
  },
];


export default function CountertopInstallationPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Countertop Installation"
        description="Professional countertop installation services in Monmouth County, NJ. Expert installation of granite, quartz, marble, and solid surface countertops for kitchens and bathrooms."
        areaServed={SERVICE_AREAS.primary}
        aggregateRating={{
          ratingValue: TRUST_SIGNALS.stats.averageRating,
          reviewCount: TRUST_SIGNALS.stats.totalReviews,
        }}
      />
      <FAQSchema faqs={faqs} />
      
      <PageLayout
        hero={{
          title: 'Countertop Installation Services',
          subtitle: 'Transform your kitchen or bathroom with premium granite, quartz, and marble countertops',
          breadcrumbs: [
            { text: 'Services', href: '/services' },
            { text: 'Countertop Installation', href: '/services/countertop-installation' }
          ],
          backgroundImage: '/images/gallery/IMG_0028.jpeg'
        }}
      >
        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div>
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-2 text-burgundy mb-6">
                  Premium Countertop Installation in Monmouth County
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Your countertops are the centerpiece of your kitchen and bathroom. At {BUSINESS_INFO.name}, 
                  we specialize in professional countertop installation that combines beauty, durability, and functionality.
                </p>
                <p className="text-gray-600 mb-6">
                  With over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years of experience 
                  installing countertops throughout Monmouth County, we've mastered the art of perfect installation. 
                  From classic granite to modern quartz, we work with all premium materials to create surfaces 
                  that enhance your home's value and your daily life.
                </p>
                <p className="text-gray-600 mb-8">
                  Our certified installers ensure precise measurements, flawless cuts, and seamless installation 
                  that will last for decades. Whether you're updating your kitchen, renovating a bathroom, or 
                  building new, we deliver exceptional results every time.
                </p>
                
                <div className="grid sm:grid-cols-2 gap-6 mb-8">
                  <div className="text-center p-4 bg-cream rounded-lg">
                    <div className="text-3xl font-bold text-gold mb-2">500+</div>
                    <div className="text-gray-600">Countertops Installed</div>
                  </div>
                  <div className="text-center p-4 bg-cream rounded-lg">
                    <div className="text-3xl font-bold text-gold mb-2">100%</div>
                    <div className="text-gray-600">Satisfaction Rate</div>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Get Your Free Quote
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Countertop Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Choose Your Perfect Countertop Material
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                We offer a wide selection of premium countertop materials to match your style, 
                budget, and lifestyle. Each material has unique benefits and characteristics.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {countertopTypes.map((type) => (
                <div key={type.name} className="bg-white rounded-lg shadow-md p-8">
                  <h3 className="text-2xl font-semibold text-burgundy mb-3">{type.name}</h3>
                  <p className="text-gray-600 mb-4">{type.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-burgundy mb-2">Key Features:</h4>
                    <ul className="space-y-2">
                      {type.features.map((feature) => (
                        <li key={feature} className="flex items-start space-x-2">
                          <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="border-t pt-4">
                    <span className="text-sm text-gray-600">Price Range: </span>
                    <span className="text-lg font-semibold text-gold">{type.priceRange}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6">
                Not sure which material is right for you? Visit our showroom to see and feel samples.
              </p>
              <Link href="/contact" className="btn-secondary">
                Schedule Showroom Visit
              </Link>
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Professional Installation Process
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                From initial consultation to final inspection, we manage every detail of your 
                countertop installation to ensure perfect results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item) => (
                <div key={item.step} className="text-center">
                  <div className="w-16 h-16 bg-gold text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-burgundy mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features & Benefits */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div>
              <div className="max-w-4xl mx-auto">
                <h2 className="heading-2 text-burgundy mb-6">
                  Why Choose Us for Your Countertop Installation?
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Certified Installers</h3>
                      <p className="text-gray-600">
                        Our installation team is factory-trained and certified by major manufacturers. 
                        We follow best practices to ensure your warranty remains valid.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Laser Precision</h3>
                      <p className="text-gray-600">
                        We use laser templating technology for perfect measurements and cuts. 
                        This ensures seamless fits around sinks, cooktops, and edges.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Lifetime Support</h3>
                      <p className="text-gray-600">
                        Our relationship doesn't end at installation. We provide ongoing support, 
                        maintenance tips, and are always available for questions or concerns.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z" />
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Competitive Pricing</h3>
                      <p className="text-gray-600">
                        Direct relationships with suppliers mean better prices for you. 
                        We offer transparent pricing with no hidden fees or surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Recent Countertop Installations
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Browse our portfolio of completed countertop installations throughout Monmouth County. 
                Each project showcases our attention to detail and commitment to quality.
              </p>
            </div>

            
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn-secondary">
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Frequently Asked Questions
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-burgundy mb-3">
                    {faq.question}
                  </h3>
                  <p className="text-gray-600">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <p className="text-gray-600 mb-4">Have more questions about countertop installation?</p>
              <Link href="/contact" className="btn-primary">
                Contact Our Experts
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-3 text-burgundy mb-4">
                Countertop Installation Throughout Monmouth County
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We provide professional countertop installation services to homeowners across 
                Monmouth County. No matter where you're located, we bring the same commitment 
                to quality and service.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SERVICE_AREAS.primary.map((town) => (
                <Link
                  key={town}
                  href={`/services/countertop-installation/${town.toLowerCase().replace(/\s+/g, '-')}`}
                  className="text-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-cream hover:shadow-md transition-all duration-200 group"
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
          title="Ready to Upgrade Your Countertops?"
          description="Transform your kitchen or bathroom with beautiful new countertops. Schedule your free consultation today and let's discuss your vision."
        />
      </PageLayout>
    </>
  );
}