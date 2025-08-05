import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ServiceSchema from '@/components/seo/ServiceSchema';
import FAQSchema from '@/components/seo/FAQSchema';
import ServiceCTA from '@/components/sections/ServiceCTA';
import { BUSINESS_INFO, SERVICE_AREAS, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Interior Remodeling & Home Renovation | Monmouth County NJ',
  description: 'Complete interior remodeling services in Monmouth County, NJ. Living rooms, bedrooms, dining rooms, and whole-home renovations. Transform your entire home with expert craftsmanship.',
  keywords: 'interior remodeling, home renovation, living room remodel, bedroom renovation, dining room update, whole home remodel, Monmouth County NJ, interior contractors near me',
  openGraph: {
    title: 'Professional Interior Remodeling Services | Custom Kitchens & Baths by Lopez',
    description: 'Transform every room in your home with expert interior remodeling. From single rooms to whole-home renovations. Serving all of Monmouth County, NJ.',
    images: ['/images/gallery/interior-remodeling-hero.jpg'],
  },
};

const remodelingServices = [
  {
    name: 'Living Room Renovations',
    description: 'Create the perfect gathering space for family and friends with custom design.',
    features: [
      'Built-in entertainment centers',
      'Custom fireplace surrounds',
      'Coffered ceilings',
      'Hardwood floor refinishing',
      'Accent wall treatments',
      'Recessed lighting design'
    ],
    popularProjects: ['Open concept conversions', 'Modern farmhouse updates', 'Traditional elegance'],
  },
  {
    name: 'Bedroom Transformations',
    description: 'Design a peaceful retreat with custom storage and luxurious finishes.',
    features: [
      'Walk-in closet systems',
      'Custom built-in storage',
      'Tray ceilings',
      'Ensuite bathroom additions',
      'Soundproofing solutions',
      'Mood lighting systems'
    ],
    popularProjects: ['Master suite expansions', 'Guest room upgrades', 'Children\'s room themes'],
  },
  {
    name: 'Dining Room Updates',
    description: 'Create an elegant space for memorable meals and entertainment.',
    features: [
      'Wainscoting and millwork',
      'Built-in china cabinets',
      'Statement lighting',
      'Crown molding',
      'Chair rail installation',
      'Hardwood floor installation'
    ],
    popularProjects: ['Formal dining rooms', 'Open concept dining', 'Banquette seating'],
  },
  {
    name: 'Home Office Conversions',
    description: 'Design productive workspaces that inspire creativity and focus.',
    features: [
      'Custom desk systems',
      'Built-in shelving',
      'Sound insulation',
      'Dedicated lighting',
      'Technology integration',
      'Climate control'
    ],
    popularProjects: ['Executive offices', 'Dual workstations', 'Creative studios'],
  },
  {
    name: 'Whole Home Renovations',
    description: 'Complete transformation of your entire home with cohesive design.',
    features: [
      'Open floor plan creation',
      'Consistent flooring throughout',
      'Unified color schemes',
      'Updated trim and moldings',
      'Modern electrical/lighting',
      'Smart home integration'
    ],
    popularProjects: ['Historic home updates', 'Modern makeovers', 'Multi-generational living'],
  },
];

const designStyles = [
  { name: 'Modern Farmhouse', description: 'Shiplap, barn doors, and rustic elegance' },
  { name: 'Contemporary', description: 'Clean lines, minimal ornamentation, open spaces' },
  { name: 'Traditional', description: 'Classic details, rich woods, timeless appeal' },
  { name: 'Transitional', description: 'Perfect blend of traditional and contemporary' },
  { name: 'Coastal', description: 'Light, airy, beach-inspired living' },
  { name: 'Industrial', description: 'Exposed elements, raw materials, urban edge' },
];

const process = [
  {
    step: 1,
    title: 'Design Consultation',
    description: 'Explore your style, needs, and vision for your interior spaces.',
  },
  {
    step: 2,
    title: 'Space Planning',
    description: 'Create optimal layouts that improve flow and functionality.',
  },
  {
    step: 3,
    title: 'Material Selection',
    description: 'Choose finishes, fixtures, and materials that reflect your style.',
  },
  {
    step: 4,
    title: 'Detailed Proposal',
    description: 'Review comprehensive plans, timeline, and investment details.',
  },
  {
    step: 5,
    title: 'Expert Construction',
    description: 'Skilled craftsmen bring your vision to life with precision.',
  },
  {
    step: 6,
    title: 'Final Walkthrough',
    description: 'Ensure every detail meets your expectations perfectly.',
  },
];

const beforeAfterProjects = [
  {
    room: 'Living Room',
    transformation: 'Closed-off space to open concept with vaulted ceilings',
    timeline: '6 weeks',
    keyFeatures: ['Removed wall', 'Added beams', 'New flooring'],
  },
  {
    room: 'Master Bedroom',
    transformation: 'Dated 80s style to modern luxury suite',
    timeline: '4 weeks',
    keyFeatures: ['Tray ceiling', 'Walk-in closet', 'Sitting area'],
  },
  {
    room: 'Whole First Floor',
    transformation: 'Traditional layout to contemporary open plan',
    timeline: '12 weeks',
    keyFeatures: ['Removed 3 walls', 'New kitchen', 'Consistent flooring'],
  },
];

const faqs = [
  {
    question: 'How much does interior remodeling cost?',
    answer: 'Interior remodeling costs vary widely based on scope and finishes. Single room updates might range from $5,000-25,000, while whole-home renovations can range from $50,000-200,000+. We provide detailed quotes after understanding your specific goals and reviewing your space.',
  },
  {
    question: 'How long does an interior remodel take?',
    answer: 'Timeline depends on project scope. Single room updates typically take 2-4 weeks, multiple rooms 6-10 weeks, and whole-home renovations 3-6 months. We provide realistic timelines and work efficiently to minimize disruption to your daily life.',
  },
  {
    question: 'Can I live in my home during interior remodeling?',
    answer: 'Most clients remain in their homes during remodeling. We work room by room when possible, maintain clean job sites, and schedule work considerately. For extensive whole-home projects, temporary relocation might be more comfortable for 2-4 weeks during the most disruptive phases.',
  },
  {
    question: 'Do you provide design services?',
    answer: 'Yes! Our design team helps you plan layouts, select materials, choose colors, and coordinate all design elements. We can work with your ideas or provide complete design solutions. 3D renderings help you visualize the finished space before construction begins.',
  },
  {
    question: 'What\'s included in your interior remodeling service?',
    answer: 'Our comprehensive service includes design consultation, space planning, material selection, all construction work, electrical/plumbing updates as needed, painting, finish carpentry, and final cleanup. We handle permits and coordinate all subcontractors for a seamless experience.',
  },
];

const galleryImages = [
  {
    src: '/images/gallery/IMG_0444.jpeg',
    alt: 'Modern living room renovation with built-ins',
    title: 'Contemporary Living Room - Red Bank',
  },
  {
    src: '/images/gallery/IMG_0445.jpeg',
    alt: 'Master bedroom with tray ceiling and custom closet',
    title: 'Luxury Master Suite - Rumson',
  },
  {
    src: '/images/gallery/IMG_0446.jpeg',
    alt: 'Open concept first floor renovation',
    title: 'Open Concept Design - Holmdel',
  },
  {
    src: '/images/gallery/IMG_0447.jpeg',
    alt: 'Traditional dining room with wainscoting',
    title: 'Elegant Dining Room - Colts Neck',
  },
];

export default function InteriorRemodelingPage() {
  return (
    <>
      <ServiceSchema
        serviceName="Interior Remodeling and Renovation"
        description="Complete interior remodeling services in Monmouth County, NJ. Professional renovation of living rooms, bedrooms, dining rooms, and whole-home transformations."
        areaServed={SERVICE_AREAS.primary}
        aggregateRating={{
          ratingValue: TRUST_SIGNALS.stats.averageRating,
          reviewCount: TRUST_SIGNALS.stats.totalReviews,
        }}
      />
      <FAQSchema faqs={faqs} />
      
      <PageLayout
        hero={{
          title: 'Interior Remodeling Services',
          subtitle: 'Transform your entire home with expert design and craftsmanship',
          breadcrumbs: [
            { text: 'Services', href: '/services' },
            { text: 'Interior Remodeling', href: '/services/interior-remodeling' }
          ],
          backgroundImage: '/images/gallery/IMG_6887.jpeg'
        }}
      >
        {/* Introduction Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Reimagine Every Room in Your Home
                </h2>
                <p className="body-large text-gray-700 mb-6">
                  Your home should evolve with your lifestyle. At {BUSINESS_INFO.name}, we specialize 
                  in transforming outdated interiors into beautiful, functional spaces that reflect 
                  your personal style and meet your family's changing needs.
                </p>
                <p className="text-gray-600 mb-6">
                  Whether you're updating a single room or renovating your entire home, our expert 
                  team combines creative design with superior craftsmanship to deliver stunning 
                  transformations. From opening up floor plans to adding architectural details, 
                  we handle every aspect of your interior remodel.
                </p>
                <p className="text-gray-600 mb-8">
                  With over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years serving 
                  Monmouth County families, we understand how to work with the unique characteristics 
                  of local homes – from Victorian-era classics in Red Bank to modern estates in 
                  Colts Neck.
                </p>
                
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-cream rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-gold mb-2">250+</div>
                    <div className="text-gray-600">Homes Transformed</div>
                  </div>
                  <div className="bg-cream rounded-lg p-6 text-center">
                    <div className="text-3xl font-bold text-gold mb-2">98%</div>
                    <div className="text-gray-600">Client Satisfaction</div>
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
                  src="/images/gallery/IMG_0442.jpeg"
                  alt="Beautiful interior remodeling project in Monmouth County"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Interior Remodeling Services
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                From single-room updates to complete home transformations, we bring expertise 
                and attention to detail to every interior remodeling project.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {remodelingServices.map((service) => (
                <div key={service.name} className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="p-8">
                    <h3 className="text-2xl font-semibold text-burgundy mb-3">{service.name}</h3>
                    <p className="text-gray-600 mb-6">{service.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-burgundy mb-2">Popular Features:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(0, 3).map((feature) => (
                            <li key={feature} className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-burgundy mb-2">More Options:</h4>
                        <ul className="space-y-1">
                          {service.features.slice(3).map((feature) => (
                            <li key={feature} className="flex items-start space-x-2">
                              <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                              </svg>
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <div className="pt-4 border-t">
                      <p className="text-sm text-gray-600 mb-1">Popular projects include:</p>
                      <p className="text-sm font-semibold text-gold">
                        {service.popularProjects.join(' • ')}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Styles */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Design Styles We Master
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Whether your taste is traditional or trendy, we bring your vision to life 
                with expert execution of any design style.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {designStyles.map((style) => (
                <div key={style.name} className="bg-cream rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-xl font-semibold text-burgundy mb-2">{style.name}</h3>
                  <p className="text-gray-600">{style.description}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* Before & After Showcase */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Dramatic Transformations
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                See how we've transformed outdated interiors into stunning living spaces 
                for Monmouth County families.
              </p>
            </div>

            <div className="space-y-8">
              {beforeAfterProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="relative h-64 md:h-80">
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent z-10"></div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="bg-burgundy text-white px-3 py-1 rounded text-sm font-semibold">
                          BEFORE
                        </span>
                      </div>
                      <Image
                        src={`/images/gallery/IMG_048${index}.jpeg`}
                        alt={`Before renovation - ${project.room}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="relative h-64 md:h-80">
                      <div className="absolute inset-0 bg-gradient-to-l from-black/50 to-transparent z-10"></div>
                      <div className="absolute bottom-4 right-4 z-20">
                        <span className="bg-gold text-white px-3 py-1 rounded text-sm font-semibold">
                          AFTER
                        </span>
                      </div>
                      <Image
                        src={`/images/gallery/IMG_045${index}.jpeg`}
                        alt={`After renovation - ${project.room}`}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-burgundy mb-2">{project.room}</h3>
                    <p className="text-gray-600 mb-4">{project.transformation}</p>
                    <div className="flex flex-wrap gap-4">
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Timeline: {project.timeline}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">Key features: {project.keyFeatures.join(', ')}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Our Interior Remodeling Process
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                We've perfected our process to ensure smooth projects and exceptional results, 
                every time.
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

        {/* Why Choose Us */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_0443.jpeg"
                  alt="Our interior remodeling team at work"
                  fill
                  className="object-cover"
                />
              </div>

              <div>
                <h2 className="heading-2 text-burgundy mb-6">
                  Why Choose Us for Your Interior Remodel
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Design Vision</h3>
                      <p className="text-gray-600">
                        Our designers help you discover your style and create cohesive designs 
                        that flow beautifully throughout your home.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Quality Craftsmanship</h3>
                      <p className="text-gray-600">
                        Our skilled craftsmen take pride in their work, ensuring every detail 
                        is perfect from crown molding to custom built-ins.
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
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Budget Transparency</h3>
                      <p className="text-gray-600">
                        Detailed proposals with clear pricing ensure no surprises. We work with 
                        your budget to maximize value and impact.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-gold" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-burgundy mb-2">Timely Completion</h3>
                      <p className="text-gray-600">
                        We respect your time and daily routine. Projects are completed on schedule 
                        with minimal disruption to your lifestyle.
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
                Interior Remodeling Portfolio
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                Browse our portfolio of interior transformations throughout Monmouth County. 
                Each project showcases our commitment to quality and attention to detail.
              </p>
            </div>
            <div className="text-center mt-10">
              <Link href="/portfolio" className="btn-primary">
                View Full Portfolio
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom max-w-4xl">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Interior Remodeling FAQs
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
                Interior Remodeling Throughout Monmouth County
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                From historic homes in Red Bank to modern residences in Holmdel, 
                we bring interior remodeling expertise to every corner of Monmouth County.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              {SERVICE_AREAS.primary.map((town) => (
                <Link
                  key={town}
                  href={`/services/interior-remodeling/${town.toLowerCase().replace(/\s+/g, '-')}`}
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
          title="Ready to Transform Your Home?"
          description="Let's create the interior spaces you've always dreamed of. Schedule your consultation today."
          primaryButtonText="Start Your Transformation"
          secondaryButtonText="Call (732) 984-1043"
        />
      </PageLayout>
    </>
  );
}