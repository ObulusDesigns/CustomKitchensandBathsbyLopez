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
  title: 'Home Additions | Room Additions & Expansions | Monmouth County NJ',
  description: 'Expand your living space with professional home additions in Monmouth County, NJ. Room additions, second stories, sunrooms, and in-law suites. Licensed contractors for seamless home expansions.',
  keywords: 'home additions, room additions, second story addition, sunroom addition, in-law suite, home expansion, Monmouth County NJ, addition contractors near me',
  openGraph: {
    title: 'Professional Home Addition Services | Custom Kitchens & Baths by Lopez',
    description: 'Need more space? Our expert team builds beautiful home additions that blend seamlessly with your existing home. Serving all of Monmouth County, NJ.',
    images: ['/images/gallery/home-addition-hero.jpg'],
  },
};

const additionTypes = [
  {
    name: 'Room Additions',
    description: 'Add a new bedroom, home office, or family room to expand your living space.',
    features: [
      'Single or multi-room expansions',
      'Seamless integration with existing home',
      'Complete electrical and HVAC',
      'Matching exterior finishes'
    ],
    avgSize: '200-500 sq ft',
    timeline: '3-6 months',
  },
  {
    name: 'Second Story Additions',
    description: 'Double your living space by adding a complete second floor to your home.',
    features: [
      'Master suite additions',
      'Multiple bedrooms and baths',
      'Structural engineering included',
      'Staircase design and installation'
    ],
    avgSize: '800-2000 sq ft',
    timeline: '4-8 months',
  },
  {
    name: 'Sunrooms & Four Seasons Rooms',
    description: 'Enjoy natural light year-round with a beautiful sunroom addition.',
    features: [
      'Climate-controlled comfort',
      'Energy-efficient windows',
      'Seamless home integration',
      'Custom lighting options'
    ],
    avgSize: '150-400 sq ft',
    timeline: '6-12 weeks',
  },
  {
    name: 'In-Law Suites & ADUs',
    description: 'Create independent living space for family members or rental income.',
    features: [
      'Private entrance options',
      'Full kitchen and bath',
      'Separate utilities possible',
      'Aging-in-place features'
    ],
    avgSize: '600-1200 sq ft',
    timeline: '3-6 months',
  },
  {
    name: 'Garage Conversions',
    description: 'Transform unused garage space into functional living areas.',
    features: [
      'Insulation and climate control',
      'New flooring and finishes',
      'Window and door additions',
      'Maintains home aesthetics'
    ],
    avgSize: '400-800 sq ft',
    timeline: '6-10 weeks',
  },
];

const process = [
  {
    step: 1,
    title: 'Initial Consultation',
    description: 'Discuss your needs, vision, and budget. We evaluate your property and existing structure.',
  },
  {
    step: 2,
    title: 'Design & Planning',
    description: 'Create detailed architectural plans that maximize space and complement your home\'s style.',
  },
  {
    step: 3,
    title: 'Permits & Approvals',
    description: 'We handle all necessary permits, HOA approvals, and township requirements.',
  },
  {
    step: 4,
    title: 'Foundation & Framing',
    description: 'Build a solid foundation and frame your addition to exact specifications.',
  },
  {
    step: 5,
    title: 'Systems Integration',
    description: 'Seamlessly connect electrical, plumbing, and HVAC to your existing systems.',
  },
  {
    step: 6,
    title: 'Finishing Touches',
    description: 'Complete interior and exterior finishes to match your existing home perfectly.',
  },
];

const benefits = [
  {
    title: 'Increased Home Value',
    description: 'Well-designed additions typically return 60-80% of investment at resale.',
    icon: 'trending-up',
  },
  {
    title: 'Avoid Moving Costs',
    description: 'Expand your current home instead of the expense and hassle of relocating.',
    icon: 'home',
  },
  {
    title: 'Custom Design',
    description: 'Create exactly the space you need, tailored to your family\'s lifestyle.',
    icon: 'palette',
  },
  {
    title: 'Stay in Your Neighborhood',
    description: 'Keep your community connections, schools, and familiar surroundings.',
    icon: 'map-pin',
  },
];

const faqs = [
  {
    question: 'How much does a home addition cost in Monmouth County?',
    answer: 'Home addition costs vary widely based on size and complexity. Basic room additions start around $15,000-25,000, while second-story additions can range from $100,000-300,000. We provide detailed quotes after evaluating your specific project needs.',
  },
  {
    question: 'Do I need permits for a home addition?',
    answer: 'Yes, all home additions in Monmouth County require permits. We handle the entire permit process, including architectural drawings, permit applications, and coordinating inspections throughout the project.',
  },
  {
    question: 'How long does it take to build an addition?',
    answer: 'Timeline depends on the project scope. Simple room additions take 2-3 months, while second-story additions may take 4-8 months. Weather, permits, and material availability can affect timelines. We provide realistic schedules upfront.',
  },
  {
    question: 'Can I live in my home during construction?',
    answer: 'Most clients continue living at home during additions. We minimize disruption by sealing off construction areas, maintaining clean job sites, and scheduling noisy work considerately. For major additions, temporary relocation might be more comfortable.',
  },
  {
    question: 'Will my addition match my existing home?',
    answer: 'Absolutely. We carefully match rooflines, siding, windows, and architectural details to ensure your addition looks original to the home. Our goal is seamless integration that enhances your home\'s appearance and value.',
  },
];

const additionBenefits = [
  {
    title: 'Increased Home Value',
    description: 'Well-designed additions typically return 60-80% of investment at resale',
    icon: 'trending-up',
  },
  {
    title: 'Avoid Moving Costs',
    description: 'Expand your current home instead of the expense and hassle of relocating',
    icon: 'home',
  },
  {
    title: 'Custom Design',
    description: 'Create exactly the space you need, tailored to your family\'s lifestyle',
    icon: 'palette',
  },
];

export default function HomeAdditionsPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Home Addition Construction"
        description="Professional home addition services in Monmouth County, NJ. Expert construction of room additions, second stories, sunrooms, and in-law suites. Licensed and insured contractors."
        areaServed={SERVICE_AREAS.primary}
        aggregateRating={{
          ratingValue: TRUST_SIGNALS.stats.averageRating,
          reviewCount: TRUST_SIGNALS.stats.totalReviews,
        }}
      />
      <FAQSchema faqs={faqs} />
      
      <PageLayout
        hero={{
          title: 'Home Addition Services',
          subtitle: 'Expand your living space with seamless additions that enhance your home and lifestyle',
          breadcrumbs: [
            { text: 'Services', href: '/services' },
            { text: 'Home Additions', href: '/services/home-additions' }
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
                  Create the Space Your Family Needs
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  When your family outgrows your home, you have two choices: move or improve. 
                  At {BUSINESS_INFO.name}, we help Monmouth County families choose improvement 
                  by creating beautiful, functional additions that feel like they've always been part of your home.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you need an extra bedroom for a growing family, a home office for remote work, 
                  or an in-law suite for aging parents, our expert team designs and builds additions 
                  that perfectly match your home's architecture while meeting your specific needs.
                </p>
                <p className="text-gray-600 mb-8">
                  With {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years of experience 
                  building additions throughout Monmouth County, we understand local building codes, 
                  architectural styles, and the unique challenges of expanding homes in our area.
                </p>
                
                <div className="bg-cream rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-burgundy mb-4">Why Choose an Addition?</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {benefits.map((benefit) => (
                      <div key={benefit.title} className="flex items-start space-x-3">
                        <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <div>
                          <h4 className="font-semibold text-burgundy">{benefit.title}</h4>
                          <p className="text-sm text-gray-600">{benefit.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>
              
              <div className="bg-gradient-to-br from-gold/10 to-burgundy/10 rounded-xl p-12 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-6">
                    <svg className="w-16 h-16 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-burgundy mb-4">{new Date().getFullYear() - BUSINESS_INFO.yearEstablished}+ Years</h3>
                  <p className="text-xl text-gray-600">Building Quality Additions</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Types of Additions */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Types of Home Additions We Build
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                From simple room extensions to complete second stories, we have the expertise 
                to handle any addition project. Each type offers unique benefits and possibilities.
              </p>
            </div>

            <div className="space-y-8">
              {additionTypes.map((type, index) => (
                <div key={type.name} className={`bg-white rounded-lg shadow-md overflow-hidden ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                  <div className="lg:flex">
                    <div className="lg:w-1/2 p-8">
                      <h3 className="text-2xl font-semibold text-burgundy mb-4">{type.name}</h3>
                      <p className="text-gray-600 mb-6">{type.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="font-semibold text-burgundy mb-3">Features & Benefits:</h4>
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
                      
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                        <div>
                          <span className="text-sm text-gray-600">Typical Size:</span>
                          <p className="font-semibold text-burgundy">{type.avgSize}</p>
                        </div>
                        <div>
                          <span className="text-sm text-gray-600">Timeline:</span>
                          <p className="font-semibold text-burgundy">{type.timeline}</p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="lg:w-1/2 bg-gradient-to-br from-gold/5 to-burgundy/5 flex items-center justify-center p-12">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                          <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
                          </svg>
                        </div>
                        <p className="text-lg font-semibold text-burgundy">Premium Quality</p>
                        <p className="text-gray-600 mt-2">Every Detail Matters</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Construction Process */}
        <section className="section-padding bg-gradient-to-br from-white to-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Proven Addition Process
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Building an addition is a major project. Our systematic approach ensures 
                everything runs smoothly from concept to completion.
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

            <div className="mt-12 bg-cream rounded-lg p-8">
              <h3 className="text-xl font-semibold text-burgundy mb-4 text-center">
                What Sets Our Process Apart
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <svg className="w-12 h-12 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-semibold text-burgundy mb-2">Fast Track Permits</h4>
                  <p className="text-sm text-gray-600">
                    Our relationships with local building departments expedite approvals
                  </p>
                </div>
                <div className="text-center">
                  <svg className="w-12 h-12 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-semibold text-burgundy mb-2">3D Visualization</h4>
                  <p className="text-sm text-gray-600">
                    See your addition before construction begins with realistic renderings
                  </p>
                </div>
                <div className="text-center">
                  <svg className="w-12 h-12 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <h4 className="font-semibold text-burgundy mb-2">Fixed Pricing</h4>
                  <p className="text-sm text-gray-600">
                    Detailed contracts with no hidden costs or surprise charges
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="bg-gradient-to-br from-burgundy/10 to-gold/10 rounded-xl p-12 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 w-full">
                  {[
                    { label: 'Projects Completed', value: '250+' },
                    { label: 'Years Experience', value: '50+' },
                    { label: 'Licensed & Insured', value: 'Yes' },
                    { label: 'Warranty', value: '10 Years' }
                  ].map((stat) => (
                    <div key={stat.label} className="text-center">
                      <p className="text-2xl font-bold text-gold mb-1">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Why Monmouth County Homeowners Trust Us
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Local Building Expertise
                    </h3>
                    <p className="text-gray-600">
                      We know Monmouth County's building codes, permit requirements, and architectural 
                      styles inside and out. From historic districts to shore communities, we build 
                      additions that comply with local regulations and complement neighborhood aesthetics.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Structural Integrity
                    </h3>
                    <p className="text-gray-600">
                      Every addition starts with proper engineering. We work with licensed structural 
                      engineers to ensure your addition is built to last, properly supported, and 
                      seamlessly integrated with your existing home's structure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Quality Craftsmanship
                    </h3>
                    <p className="text-gray-600">
                      Our skilled craftsmen take pride in their work. From foundation to finishes, 
                      every aspect of your addition is built with attention to detail and quality 
                      materials that stand the test of time.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-burgundy mb-2">
                      Project Management
                    </h3>
                    <p className="text-gray-600">
                      A dedicated project manager oversees your entire addition, coordinating 
                      subcontractors, managing timelines, and keeping you informed every step 
                      of the way. One point of contact for peace of mind.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link href="/portfolio" className="btn-secondary">
                    View Our Additions
                  </Link>
                  <Link href="/testimonials" className="btn-secondary">
                    Read Client Reviews
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <GradientCTA
          title="Ready to Expand Your Home?"
          description="Let's discuss your vision for more space. Schedule a free consultation to explore addition possibilities for your home."
          primaryButtonText="Schedule Consultation"
          primaryButtonLink={`tel:${BUSINESS_INFO.phone}`}
          secondaryButtonText="View Portfolio"
          secondaryButtonLink="/portfolio"
          variant="dark"
        />

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Home Addition FAQs
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
                Building Additions Throughout Monmouth County
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From the spacious lots of Colts Neck to the beach communities of Spring Lake, 
                we build additions that enhance homes throughout Monmouth County.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SERVICE_AREAS.primary.map((town) => (
                <Link
                  key={town}
                  href={`/services/home-additions/${town.toLowerCase().replace(/\s+/g, '-')}`}
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

      </PageLayout>
    </>
  );
}