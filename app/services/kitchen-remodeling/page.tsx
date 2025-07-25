import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Kitchen Remodeling in Monmouth County NJ | Custom Kitchens & Baths by Lopez',
  description: 'Transform your kitchen with expert remodeling services in Monmouth County. Custom cabinetry, granite countertops, and complete renovations. Serving Freehold, Colts Neck, Holmdel, and all surrounding areas.',
  keywords: 'kitchen remodeling, kitchen renovation, custom kitchens, Monmouth County, NJ, Freehold, Colts Neck, granite countertops, custom cabinetry',
  openGraph: {
    title: 'Kitchen Remodeling Services | Custom Kitchens & Baths by Lopez',
    description: 'Expert kitchen remodeling in Monmouth County, NJ. Transform your space with custom designs and quality craftsmanship.',
    images: ['/images/gallery/IMG_4149.jpeg'],
  },
};

const kitchenService = SERVICES.primary.find(s => s.id === 'kitchen-remodeling')!;

// Sample projects for showcase
const kitchenProjects = [
  {
    id: 1,
    title: 'Modern White Kitchen in Colts Neck',
    image: '/images/gallery/IMG_4149.jpeg',
    location: 'Colts Neck, NJ',
    features: ['Quartz Countertops', 'Custom Island', 'Soft-Close Cabinets']
  },
  {
    id: 2,
    title: 'Traditional Kitchen Renovation in Rumson',
    image: '/images/gallery/IMG_5705.jpeg',
    location: 'Rumson, NJ',
    features: ['Granite Counters', 'Crown Molding', 'Professional Appliances']
  },
  {
    id: 3,
    title: 'Contemporary Kitchen in Holmdel',
    image: '/images/gallery/IMG_6661.jpeg',
    location: 'Holmdel, NJ',
    features: ['Waterfall Island', 'Hidden Storage', 'LED Lighting']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Free Consultation',
    description: 'Meet with our design team to discuss your vision, needs, and budget for your new kitchen.'
  },
  {
    number: '02',
    title: 'Design & Planning',
    description: 'Create detailed 3D designs and select materials, finishes, and appliances for your dream kitchen.'
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

export default function KitchenRemodelingPage() {
  return (
    <PageLayout
      hero={{
        title: 'Kitchen Remodeling Services',
        subtitle: 'Transform your kitchen into the heart of your home with custom designs and expert craftsmanship throughout Monmouth County',
        breadcrumbs: [
          { text: 'Services', href: '/services' },
          { text: 'Kitchen Remodeling', href: '/services/kitchen-remodeling' }
        ],
        backgroundImage: '/images/gallery/IMG_4149.jpeg'
      }}
    >
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-burgundy mb-6">
                Expert Kitchen Remodeling in Monmouth County
              </h2>
              <p className="body-large text-gray-700 mb-6">
                For over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, {BUSINESS_INFO.name} has been transforming kitchens 
                throughout Monmouth County into stunning, functional spaces that families love. From complete gut renovations 
                to cabinet refacing, we bring your vision to life with unmatched craftsmanship and attention to detail.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're dreaming of a modern open-concept kitchen in Colts Neck, a traditional design in Rumson, 
                or a coastal-inspired space in Sea Bright, our team has the expertise to deliver exceptional results 
                that exceed your expectations.
              </p>
              
              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {kitchenService.features.map((feature) => (
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
              Our Kitchen Remodeling Process
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              We've perfected our process over hundreds of kitchen renovations to ensure 
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
              Recent Kitchen Transformations
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of kitchen remodeling projects completed throughout Monmouth County. 
              Each project showcases our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {kitchenProjects.map((project) => (
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
              Kitchen Remodeling Services Throughout Monmouth County
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              We proudly serve all of Monmouth County with professional kitchen remodeling services. 
              No matter where you're located, we bring the same level of expertise and dedication to every project.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.primary.map((town) => (
              <Link
                key={town}
                href={`/services/kitchen-remodeling/${town.toLowerCase().replace(/\s+/g, '-')}`}
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
            Kitchen Remodeling FAQs
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                How long does a typical kitchen remodel take?
              </h3>
              <p className="text-gray-600">
                A typical kitchen remodel in Monmouth County takes 6-12 weeks from start to finish, 
                depending on the scope of work. Minor updates may take 3-4 weeks, while complete 
                gut renovations can take up to 16 weeks. We provide a detailed timeline during your consultation.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                What's the average cost of a kitchen remodel in Monmouth County?
              </h3>
              <p className="text-gray-600">
                Kitchen remodeling costs vary widely based on size, materials, and scope. In Monmouth County, 
                most kitchen remodels range from $35,000 to $85,000, with luxury renovations exceeding $100,000. 
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
                Can I live in my home during the kitchen remodel?
              </h3>
              <p className="text-gray-600">
                Most of our clients continue living at home during their kitchen remodel. We set up 
                temporary kitchen facilities and work efficiently to minimize disruption. We'll discuss 
                your specific situation during the planning phase to ensure your comfort throughout the project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}