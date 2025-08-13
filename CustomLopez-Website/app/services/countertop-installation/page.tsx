import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import IconServiceCard from '@/components/ui/IconServiceCard';
import ProcessSteps from '@/components/ui/ProcessSteps';
import GradientCTA from '@/components/sections/GradientCTA';
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
    title: 'Consultation & Measurement',
    description: 'Precise templating and material selection to ensure perfect fit and style.',
  },
  {
    step: 2,
    title: 'Material Selection',
    description: 'Choose from premium slabs and colors that complement your design vision.',
  },
  {
    step: 3,
    title: 'Fabrication',
    description: 'Custom cutting and edging using state-of-the-art equipment for precision.',
  },
  {
    step: 4,
    title: 'Professional Installation',
    description: 'Expert installation ensuring level surfaces and seamless joints.',
  },
  {
    step: 5,
    title: 'Sealing & Finishing',
    description: 'Proper sealing and final detailing for lasting beauty and protection.',
  },
];

const edgeProfiles = [
  { name: 'Straight Edge', description: 'Clean, modern look' },
  { name: 'Beveled Edge', description: 'Angled cut for sophistication' },
  { name: 'Bullnose', description: 'Rounded edge for safety and style' },
  { name: 'Ogee', description: 'S-shaped curve for elegance' },
  { name: 'Waterfall', description: 'Dramatic vertical drop' },
  { name: 'Mitered', description: 'Thick appearance without weight' },
];

const faqs = [
  {
    question: 'How long does countertop installation take?',
    answer: 'Most countertop installations are completed in 1-2 days. This includes removal of old countertops, installation of new ones, and connecting sinks and appliances. Custom fabrication typically takes 1-2 weeks after templating.',
  },
  {
    question: 'What\'s the difference between granite and quartz?',
    answer: 'Granite is 100% natural stone, each slab unique, requiring periodic sealing. Quartz is engineered stone (95% quartz, 5% resin), offering consistent patterns, no sealing required, and superior stain resistance. Both are extremely durable.',
  },
  {
    question: 'Can you install countertops over existing ones?',
    answer: 'In some cases, yes. We can install new countertops over existing laminate if they\'re in good condition. However, removing old countertops usually provides better results and allows us to inspect and repair the cabinets if needed.',
  },
  {
    question: 'Do you provide sink and faucet installation?',
    answer: 'Yes! We handle complete installation including undermount or drop-in sinks, faucets, and soap dispensers. We can also recommend and source fixtures that complement your new countertops.',
  },
  {
    question: 'What maintenance do stone countertops require?',
    answer: 'Granite needs sealing every 1-2 years. Quartz requires no sealing. Marble needs regular sealing and careful maintenance. All stone countertops should be cleaned with mild soap and water, avoiding harsh chemicals.',
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
          title: 'Countertop Installation',
          subtitle: 'Premium surfaces that combine beauty with performance for your kitchen and bath',
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
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Premium Countertops That Transform Your Space
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Your countertops are the workhorse of your kitchen and the centerpiece of your design. 
                  At {BUSINESS_INFO.name}, we specialize in professional countertop installation that 
                  delivers both stunning aesthetics and lasting performance.
                </p>
                <p className="text-gray-600 mb-6">
                  From the natural beauty of granite to the consistent perfection of quartz, we offer 
                  a wide selection of premium materials to suit every style and budget. Our expert 
                  installers ensure flawless results that will serve your family beautifully for decades.
                </p>
                <p className="text-gray-600 mb-8">
                  Serving Monmouth County for over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, 
                  we've installed thousands of countertops in homes from Red Bank to Colts Neck, 
                  earning a reputation for precision, professionalism, and stunning results.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="/portfolio" className="btn-primary">
                    View Our Work
                  </Link>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-gold/10 to-burgundy/10 rounded-xl p-12">
                <div className="text-center">
                  <div className="w-32 h-32 bg-burgundy/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-burgundy" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                      <path d="M7 12h10v2H7zm0-4h10v2H7zm0 8h7v2H7z"/>
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-burgundy mb-4">Premium Materials</h3>
                  <p className="text-xl text-gray-600">Quality That Lasts</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Countertop Types */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Premium Countertop Materials
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Choose from a wide selection of premium materials, each offering unique benefits 
                and aesthetic appeal for your kitchen or bathroom.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {countertopTypes.map((type, index) => (
                <IconServiceCard
                  key={index}
                  icon={
                    <svg className="w-full h-full" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
                    </svg>
                  }
                  title={type.name}
                  description={`${type.description} Investment: ${type.priceRange}`}
                  features={type.features.slice(0, 3)}
                  accentColor={index % 2 === 0 ? 'burgundy' : 'gold'}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Edge Profiles */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Custom Edge Profiles
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                The edge profile is the finishing touch that defines your countertop's style. 
                We offer a variety of edge treatments to complement your design.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {edgeProfiles.map((profile) => (
                <div key={profile.name} className="bg-cream rounded-lg p-6 text-center hover:shadow-md transition-shadow">
                  <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-burgundy mb-2">{profile.name}</h3>
                  <p className="text-gray-600 text-sm">{profile.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Installation Process */}
        <section className="section-padding bg-gradient-to-br from-gray-50 to-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Installation Process
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Professional installation is crucial for countertops that look beautiful and 
                perform flawlessly for years to come.
              </p>
            </div>

            <ProcessSteps
              steps={process.map(item => ({
                number: item.step.toString(),
                title: item.title,
                description: item.description
              }))}
              variant="timeline"
            />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="heading-2 text-burgundy mb-6">
                  Why Choose Us for Your Countertops
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Direct Supplier Relationships
                    </h3>
                    <p className="text-gray-600">
                      We work directly with quarries and manufacturers to offer the best selection 
                      and pricing on premium materials.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Precision Installation
                    </h3>
                    <p className="text-gray-600">
                      Our certified installers use laser templating and professional techniques 
                      for perfect fit and finish every time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Lifetime Support
                    </h3>
                    <p className="text-gray-600">
                      We stand behind our work with comprehensive warranties and ongoing support 
                      for maintenance and care.
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  <Link href="/testimonials" className="btn-secondary">
                    Read Customer Reviews
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-xl p-12 order-1 lg:order-2">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">1000+</div>
                    <p className="text-gray-600">Countertops Installed</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-burgundy mb-2">50+</div>
                    <p className="text-gray-600">Years Experience</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-gold mb-2">100%</div>
                    <p className="text-gray-600">Satisfaction Rate</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-burgundy mb-2">10yr</div>
                    <p className="text-gray-600">Warranty</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Countertop Installation FAQs
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
                From coastal homes to inland estates, we bring premium countertop installation 
                to every corner of Monmouth County.
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

        <GradientCTA
          title="Ready for Beautiful New Countertops?"
          description="Transform your kitchen or bathroom with premium countertops. Schedule your free consultation today."
          primaryButtonText="Get Free Quote"
          primaryButtonLink={`tel:${BUSINESS_INFO.phone}`}
          secondaryButtonText="View Portfolio"
          secondaryButtonLink="/portfolio"
          variant="burgundy"
        />
      </PageLayout>
    </>
  );
}