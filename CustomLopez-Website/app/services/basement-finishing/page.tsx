import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceCTA from '@/components/sections/ServiceCTA';
import { BUSINESS_INFO, SERVICE_AREAS, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Basement Finishing & Remodeling | Monmouth County NJ',
  description: 'Transform your basement into beautiful living space. Professional basement finishing in Monmouth County, NJ. Family rooms, home theaters, offices, and more. Waterproofing included.',
  keywords: 'basement finishing, basement remodeling, finished basement, basement renovation, basement waterproofing, Monmouth County NJ, basement contractors near me',
  openGraph: {
    title: 'Expert Basement Finishing Services | Custom Kitchens & Baths by Lopez',
    description: 'Unlock your home\'s potential with professional basement finishing. Create family rooms, entertainment spaces, or rental units. Serving all of Monmouth County, NJ.',
    images: ['/images/gallery/basement-finishing-hero.jpg'],
  },
};

const basementSpaces = [
  {
    name: 'Family & Recreation Rooms',
    description: 'Create the perfect gathering space for family time, games, and relaxation.',
    features: [
      'Open floor plans',
      'Built-in storage',
      'Comfortable flooring',
      'Proper lighting design',
      'Climate control'
    ],
    popularFeatures: ['Wet bars', 'Fireplace', 'Built-in shelving'],
  },
  {
    name: 'Home Theaters',
    description: 'Enjoy cinema-quality entertainment in your own private theater.',
    features: [
      'Acoustic treatments',
      'Surround sound wiring',
      'Tiered seating platforms',
      'Controlled lighting',
      'Projector installation'
    ],
    popularFeatures: ['Concession area', 'Stadium seating', 'Sound isolation'],
  },
  {
    name: 'Home Offices',
    description: 'Create a productive workspace away from household distractions.',
    features: [
      'Separate entrance options',
      'Built-in desks and storage',
      'Proper ventilation',
      'Natural light solutions',
      'Sound insulation'
    ],
    popularFeatures: ['Video conference setup', 'Client meeting area', 'Private bathroom'],
  },
  {
    name: 'Guest Suites',
    description: 'Comfortable accommodations for visitors or potential rental income.',
    features: [
      'Private bedroom area',
      'Full bathroom',
      'Kitchenette options',
      'Separate HVAC zone',
      'Private entrance'
    ],
    popularFeatures: ['In-law suite setup', 'Airbnb ready', 'Accessibility features'],
  },
  {
    name: 'Game & Entertainment Rooms',
    description: 'The ultimate space for entertainment and hobbies.',
    features: [
      'Pool table area',
      'Bar installation',
      'Gaming zones',
      'Trophy displays',
      'Multiple activity areas'
    ],
    popularFeatures: ['Sports bar setup', 'Arcade area', 'Wine cellar'],
  },
  {
    name: 'Home Gyms',
    description: 'Skip the membership fees with your own private fitness center.',
    features: [
      'Rubber flooring',
      'Mirror walls',
      'Equipment spacing',
      'Proper ventilation',
      'Sound dampening'
    ],
    popularFeatures: ['Sauna/steam room', 'Yoga studio', 'Equipment storage'],
  },
];

const basementChallenges = [
  {
    challenge: 'Moisture & Water',
    solution: 'Complete waterproofing system with drainage, vapor barriers, and dehumidification',
  },
  {
    challenge: 'Low Ceilings',
    solution: 'Creative design solutions, recessed lighting, and strategic ceiling treatments',
  },
  {
    challenge: 'Limited Natural Light',
    solution: 'Egress windows, light wells, and layered artificial lighting design',
  },
  {
    challenge: 'Temperature Control',
    solution: 'Proper insulation, HVAC extensions, and zone control systems',
  },
  {
    challenge: 'Sound Transmission',
    solution: 'Acoustic insulation, resilient channels, and sound-dampening materials',
  },
];

const process = [
  {
    step: 1,
    title: 'Inspection & Planning',
    description: 'Evaluate structure, check for moisture, measure ceiling height, plan layout.',
  },
  {
    step: 2,
    title: 'Waterproofing',
    description: 'Address any water issues with proper drainage and moisture barriers.',
  },
  {
    step: 3,
    title: 'Framing & Insulation',
    description: 'Build walls, install insulation, run rough electrical and plumbing.',
  },
  {
    step: 4,
    title: 'Electrical & HVAC',
    description: 'Install outlets, lighting, heating/cooling, and any special systems.',
  },
  {
    step: 5,
    title: 'Drywall & Flooring',
    description: 'Hang drywall, tape, mud, paint, and install your chosen flooring.',
  },
  {
    step: 6,
    title: 'Final Finishes',
    description: 'Install trim, doors, fixtures, and any custom features.',
  },
];

const faqs = [
  {
    question: 'How much does it cost to finish a basement in Monmouth County?',
    answer: 'Basement finishing costs typically range from $25-75 per square foot, depending on the level of finish and features. A basic 1,000 sq ft basement might cost $25,000-35,000, while a high-end finish with bathroom and wet bar could reach $75,000+. We provide detailed quotes based on your specific plans.',
  },
  {
    question: 'Do I need permits to finish my basement?',
    answer: 'Yes, finishing a basement in Monmouth County requires permits for framing, electrical, plumbing, and HVAC work. We handle all permit applications and coordinate required inspections. Proper permits ensure your finished basement is safe, legal, and adds value to your home.',
  },
  {
    question: 'How long does basement finishing take?',
    answer: 'Most basement finishing projects take 6-10 weeks from start to finish. Simple designs might be completed in 4-6 weeks, while complex projects with bathrooms, wet bars, or home theaters may take 10-12 weeks. Timeline depends on size, complexity, and permit approval speed.',
  },
  {
    question: 'What about basement moisture and waterproofing?',
    answer: 'Moisture control is critical for successful basement finishing. We always inspect for water issues and include proper waterproofing in our projects. This may include exterior drainage improvements, interior waterproofing systems, vapor barriers, and dehumidification. A dry basement is essential for lasting results.',
  },
  {
    question: 'What ceiling height do I need for a finished basement?',
    answer: 'Building codes require 7 feet of ceiling height for habitable spaces, with some exceptions for beams and ductwork. We work creatively with lower ceilings using recessed lighting, strategic layouts, and special ceiling treatments to maximize the feeling of height in your basement.',
  },
];

const galleryImages = [
  {
    src: '/images/gallery/IMG_0438.jpeg',
    alt: 'Luxury finished basement with home theater',
    title: 'Home Theater - Rumson',
  },
  {
    src: '/images/gallery/IMG_0439.jpeg',
    alt: 'Basement family room with wet bar',
    title: 'Entertainment Space - Holmdel',
  },
  {
    src: '/images/gallery/IMG_0440.jpeg',
    alt: 'Basement home office and gym',
    title: 'Office & Gym - Marlboro',
  },
  {
    src: '/images/gallery/IMG_0441.jpeg',
    alt: 'Finished basement guest suite',
    title: 'Guest Suite - Colts Neck',
  },
];

export default function BasementFinishingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Basement Finishing and Remodeling"
        description="Professional basement finishing services in Monmouth County, NJ. Transform unfinished basements into beautiful living spaces. Family rooms, home theaters, offices, and guest suites."
        areaServed={SERVICE_AREAS.primary}
        aggregateRating={{
          ratingValue: TRUST_SIGNALS.stats.averageRating,
          reviewCount: TRUST_SIGNALS.stats.totalReviews,
        }}
      />
      <FAQSchema faqs={faqs} />
      
      <PageLayout
        hero={{
          title: 'Basement Finishing Services',
          subtitle: 'Transform your basement into valuable living space your family will love',
          breadcrumbs: [
            { text: 'Services', href: '/services' },
            { text: 'Basement Finishing', href: '/services/basement-finishing' }
          ],
          backgroundImage: '/images/gallery/IMG_0426.jpeg'
        }}
      >
        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Unlock Your Home's Hidden Potential
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Your unfinished basement represents untapped potential – square footage you're already 
                  paying for that could become your family's favorite space. At {BUSINESS_INFO.name}, 
                  we transform dark, unused basements into bright, beautiful living areas that add 
                  comfort, functionality, and value to your home.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you envision a cozy family room for movie nights, a dedicated home office 
                  for remote work, or a complete guest suite for visitors, our expert team handles 
                  every aspect of basement finishing from waterproofing to final touches.
                </p>
                <p className="text-gray-600 mb-8">
                  With {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years of experience 
                  finishing basements throughout Monmouth County, we understand the unique challenges 
                  of our area's homes – from shore area moisture to older home foundations. We deliver 
                  beautiful, dry, comfortable spaces that last.
                </p>
                
                <div className="bg-cream rounded-lg p-6 mb-8">
                  <h3 className="text-xl font-semibold text-burgundy mb-4">Basement Finishing Benefits</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">70%+ ROI at resale</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Increase living space 30-50%</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Lower cost than additions</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-5 h-5 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700">Year-round comfort</span>
                    </div>
                  </div>
                </div>

                <Link href="/contact" className="btn-primary">
                  Get Your Free Basement Quote
                </Link>
              </div>
              
              <div className="relative h-96 lg:h-[600px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_6887.jpeg"
                  alt="Beautiful finished basement in Monmouth County home"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Popular Basement Spaces */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Popular Basement Transformations
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Your basement can become anything you imagine. Here are the most popular 
                transformations our Monmouth County clients choose.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {basementSpaces.map((space) => (
                <div key={space.name} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-burgundy mb-3">{space.name}</h3>
                    <p className="text-gray-600 mb-4">{space.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-burgundy mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {space.features.slice(0, 3).map((feature) => (
                          <li key={feature} className="flex items-center space-x-2">
                            <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                            </svg>
                            <span className="text-sm text-gray-700">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-1">Popular additions:</p>
                      <p className="text-sm font-semibold text-gold">
                        {space.popularFeatures.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-4">Have a unique vision for your basement?</p>
              <Link href="/contact" className="btn-secondary">
                Let's Discuss Your Ideas
              </Link>
            </div>
          </div>
        </section>

        {/* Common Challenges & Solutions */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Overcoming Basement Challenges
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Every basement has unique challenges. Our experience means we have proven 
                solutions for the most common issues in Monmouth County homes.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {basementChallenges.map((item, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-burgundy/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-burgundy mb-2">
                      Challenge: {item.challenge}
                    </h3>
                    <p className="text-gray-600">
                      <span className="font-semibold text-gold">Our Solution:</span> {item.solution}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 bg-cream rounded-lg p-8">
              <h3 className="text-xl font-semibold text-burgundy mb-4 text-center">
                The Importance of Professional Installation
              </h3>
              <p className="text-gray-700 text-center max-w-3xl mx-auto">
                Basement finishing isn't just about putting up walls. It requires expertise in 
                moisture control, proper insulation, code compliance, and system integration. 
                Our professional approach ensures your finished basement stays dry, comfortable, 
                and problem-free for decades.
              </p>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Basement Finishing Process
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                We've refined our process over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years 
                to ensure smooth, efficient basement transformations with stunning results.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {process.map((item) => (
                <div key={item.step} className="bg-white rounded-lg p-6 shadow-md text-center">
                  <div className="w-14 h-14 bg-gold text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-lg font-semibold text-burgundy mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="text-center">
                <svg className="w-12 h-12 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <h4 className="font-semibold text-burgundy mb-2">Warranty Protection</h4>
                <p className="text-sm text-gray-600">
                  10-year warranty on waterproofing and structural work
                </p>
              </div>
              <div className="text-center">
                <svg className="w-12 h-12 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg>
                <h4 className="font-semibold text-burgundy mb-2">Code Compliance</h4>
                <p className="text-sm text-gray-600">
                  All work meets or exceeds building codes
                </p>
              </div>
              <div className="text-center">
                <svg className="w-12 h-12 text-gold mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
                <h4 className="font-semibold text-burgundy mb-2">Fast Completion</h4>
                <p className="text-sm text-gray-600">
                  Most basements finished in 6-10 weeks
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Basement Transformations Gallery
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                See how we've transformed unfinished basements into beautiful living spaces 
                for families throughout Monmouth County.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn-primary">
                View More Basement Projects
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Basement Finishing FAQs
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
              <p className="text-gray-600 mb-4">Ready to discuss your basement project?</p>
              <Link href="/contact" className="btn-primary">
                Schedule Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-3 text-burgundy mb-4">
                Basement Finishing Throughout Monmouth County
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From waterfront homes dealing with moisture to inland properties with 
                expansive basements, we bring expertise to every project.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SERVICE_AREAS.primary.map((town) => (
                <Link
                  key={town}
                  href={`/services/basement-finishing/${town.toLowerCase().replace(/\s+/g, '-')}`}
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
          title="Ready to Transform Your Basement?"
          description="Don't let valuable square footage go to waste. Let's create the perfect basement space for your family's needs."
          primaryButtonText="Get Free Estimate"
          secondaryButtonText="View Basement Ideas"
        />
      </PageLayout>
    </>
  );
}