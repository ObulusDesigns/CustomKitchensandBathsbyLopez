import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Bathroom Remodeling in Monmouth County NJ | Custom Kitchens & Baths by Lopez',
  description: 'Transform your bathroom with expert remodeling services in Monmouth County. Custom vanities, luxury showers, and complete renovations. Serving Freehold, Colts Neck, Holmdel, and all surrounding areas.',
  keywords: 'bathroom remodeling, bathroom renovation, custom bathrooms, Monmouth County, NJ, Freehold, Colts Neck, luxury showers, custom vanities',
  openGraph: {
    title: 'Bathroom Remodeling Services | Custom Kitchens & Baths by Lopez',
    description: 'Expert bathroom remodeling in Monmouth County, NJ. Transform your space with custom designs and quality craftsmanship.',
    images: ['/images/gallery/IMG_0428.jpeg'],
  },
};

const bathroomService = SERVICES.primary.find(s => s.id === 'bathroom-remodeling')!;

// Sample projects for showcase
const bathroomProjects = [
  {
    id: 1,
    title: 'Luxury Master Bath in Colts Neck',
    image: '/images/gallery/IMG_0428.jpeg',
    location: 'Colts Neck, NJ',
    features: ['Freestanding Tub', 'Walk-in Shower', 'Double Vanity']
  },
  {
    id: 2,
    title: 'Spa Bathroom Retreat in Rumson',
    image: '/images/gallery/IMG_0427.jpeg',
    location: 'Rumson, NJ',
    features: ['Steam Shower', 'Heated Floors', 'Custom Vanities']
  },
  {
    id: 3,
    title: 'Modern Bathroom Suite in Holmdel',
    image: '/images/gallery/IMG_0430.jpeg',
    location: 'Holmdel, NJ',
    features: ['Curbless Shower', 'Floating Vanity', 'Smart Mirror']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Meet with our design team to discuss your vision, needs, and budget for your new bathroom.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Create detailed 3D designs and select materials, finishes, and fixtures for your dream bathroom.'
  },
  {
    number: '03',
    title: 'Professional Installation',
    description: 'Our skilled craftsmen handle everything from demolition to the final touches with precision.'
  },
  {
    number: '04',
    title: 'Final Walkthrough',
    description: 'Ensure every detail meets your expectations and learn about your warranty coverage.'
  }
];

export default function BathroomRemodelingPage() {
  return (
    <PageLayout
      hero={{
        title: 'Bathroom Remodeling Services',
        subtitle: 'Transform your bathroom into a luxurious retreat with custom designs and expert craftsmanship throughout Monmouth County',
        breadcrumbs: [
          { text: 'Services', href: '/services' },
          { text: 'Bathroom Remodeling', href: '/services/bathroom-remodeling' }
        ],
        backgroundImage: '/images/gallery/IMG_0428.jpeg'
      }}
    >
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-burgundy mb-6">
                Expert Bathroom Remodeling in Monmouth County
              </h2>
              <p className="body-large text-gray-700 mb-6">
                For over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, {BUSINESS_INFO.name} has been transforming bathrooms 
                throughout Monmouth County into stunning, spa-like retreats that families love. From complete gut renovations 
                to simple updates, we bring your vision to life with unmatched craftsmanship and attention to detail.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're dreaming of a luxury master bath in Colts Neck, a spa-inspired retreat in Rumson, 
                or a modern powder room in Sea Bright, our team has the expertise to deliver exceptional results 
                that exceed your expectations.
              </p>
              
              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {bathroomService.features.map((feature) => (
                  <div key={feature} className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Our Bathroom Remodeling Process
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We've perfected our process over hundreds of bathroom renovations to ensure 
              a smooth, stress-free experience from start to finish.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step) => (
              <div key={step.number} className="text-center">
                <div className="w-20 h-20 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{step.number}</span>
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-3">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Recent Bathroom Transformations
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of bathroom remodeling projects completed throughout Monmouth County. 
              Each project showcases our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {bathroomProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-burgundy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-3 flex items-center">
                  <svg className="w-4 h-4 mr-2 text-gold" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  {project.location}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <span key={feature} className="text-sm bg-cream px-3 py-1 rounded-full text-burgundy">
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-3 text-burgundy mb-4">
              Bathroom Remodeling Services Throughout Monmouth County
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We proudly serve all of Monmouth County with professional bathroom remodeling services. 
              No matter where you're located, we bring the same level of expertise and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.primary.map((town) => (
              <Link
                key={town}
                href={`/services/bathroom-remodeling/${town.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center py-3 px-4 bg-white rounded-lg hover:shadow-md transition-shadow duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-gold transition-colors duration-200">
                  {town}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-2 text-burgundy mb-10 text-center">
            Bathroom Remodeling FAQs
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                How long does a typical bathroom remodel take?
              </h3>
              <p className="text-gray-600">
                A typical bathroom remodel in Monmouth County takes 2-4 weeks from start to finish, 
                depending on the scope of work. A simple refresh may take 1-2 weeks, while complete 
                master bath renovations can take up to 6 weeks. We provide a detailed timeline during your consultation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                What's the average cost of a bathroom remodel in Monmouth County?
              </h3>
              <p className="text-gray-600">
                Bathroom remodeling costs vary based on size and finishes. In Monmouth County, 
                most bathroom remodels range from $15,000 to $35,000, with luxury master baths exceeding $50,000. 
                We provide free, detailed quotes tailored to your specific project and budget.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                Do you handle permits and inspections?
              </h3>
              <p className="text-gray-600">
                Yes, we handle all necessary permits and coordinate inspections required by your local 
                municipality. Our team is familiar with building codes throughout Monmouth County, 
                ensuring your project meets all requirements.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                Can I use my bathroom during the remodel?
              </h3>
              <p className="text-gray-600">
                For homes with multiple bathrooms, you can continue living normally. For single bathroom homes, 
                we work quickly and can arrange temporary facilities if needed. We always discuss logistics 
                during planning to ensure minimal disruption to your daily routine.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}