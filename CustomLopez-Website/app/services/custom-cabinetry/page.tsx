import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Custom Cabinetry in Monmouth County NJ | Handcrafted Kitchen & Bath Cabinets',
  description: 'Expert custom cabinet design and installation in Monmouth County. Handcrafted kitchen cabinets, bathroom vanities, built-ins, and storage solutions. Serving Holmdel, Manalapan, Wall Township, and surrounding areas.',
  keywords: 'custom cabinetry, custom cabinets, kitchen cabinets, bathroom vanities, built-in cabinets, Monmouth County, NJ, Holmdel, Manalapan, handcrafted cabinets',
  openGraph: {
    title: 'Custom Cabinetry Services | Custom Kitchens & Baths by Lopez',
    description: 'Handcrafted custom cabinets for kitchens, bathrooms, and living spaces throughout Monmouth County, NJ.',
    images: ['/images/gallery/IMG_6415.jpeg'],
  },
};

const cabinetryService = SERVICES.primary.find(s => s.id === 'custom-cabinetry')!;

// Cabinet styles and finishes
const cabinetStyles = [
  {
    name: 'Traditional',
    description: 'Timeless elegance with raised panel doors, crown molding, and classic details',
    features: ['Raised Panel Doors', 'Crown Molding', 'Decorative Hardware'],
    image: '/images/gallery/IMG_6415.jpeg'
  },
  {
    name: 'Modern',
    description: 'Clean lines, flat panel doors, and minimalist hardware for contemporary homes',
    features: ['Flat Panel Doors', 'Hidden Hinges', 'Push-to-Open'],
    image: '/images/gallery/IMG_6664.jpeg'
  },
  {
    name: 'Transitional',
    description: 'The perfect blend of traditional warmth and modern simplicity',
    features: ['Shaker Doors', 'Simple Lines', 'Mixed Materials'],
    image: '/images/gallery/IMG_5705.jpeg'
  }
];

const cabinetryProjects = [
  {
    id: 1,
    title: 'Full Kitchen Cabinet Suite in Holmdel',
    image: '/images/gallery/IMG_6417.jpeg',
    location: 'Holmdel, NJ',
    type: 'Kitchen Cabinetry',
    features: ['Soft-Close Drawers', 'Pull-Out Shelves', 'Custom Island']
  },
  {
    id: 2,
    title: 'Master Bath Vanities in Manalapan',
    image: '/images/gallery/IMG_0183.jpeg',
    location: 'Manalapan, NJ',
    type: 'Bathroom Vanities',
    features: ['Floating Design', 'Hidden Storage', 'Quartz Tops']
  },
  {
    id: 3,
    title: 'Library Built-Ins in Wall Township',
    image: '/images/gallery/IMG_6663.jpeg',
    location: 'Wall Township, NJ',
    type: 'Custom Built-Ins',
    features: ['Floor-to-Ceiling', 'LED Lighting', 'Adjustable Shelves']
  }
];

const customOptions = [
  {
    category: 'Wood Species',
    options: ['Maple', 'Cherry', 'Oak', 'Walnut', 'Hickory', 'Pine']
  },
  {
    category: 'Door Styles',
    options: ['Raised Panel', 'Recessed Panel', 'Shaker', 'Slab', 'Beadboard', 'Glass Insert']
  },
  {
    category: 'Finishes',
    options: ['Painted', 'Stained', 'Glazed', 'Distressed', 'Natural', 'Two-Tone']
  },
  {
    category: 'Storage Solutions',
    options: ['Pull-Out Drawers', 'Lazy Susans', 'Spice Racks', 'Trash Pull-Outs', 'Pantry Systems', 'Wine Racks']
  }
];

export default function CustomCabinetryPage() {
  return (
    <PageLayout
      hero={{
        title: 'Custom Cabinetry Services',
        subtitle: 'Handcrafted cabinets designed and built to perfection for homes throughout Monmouth County',
        breadcrumbs: [
          { text: 'Services', href: '/services' },
          { text: 'Custom Cabinetry', href: '/services/custom-cabinetry' }
        ],
        backgroundImage: '/images/gallery/IMG_6415.jpeg'
      }}
    >
      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-burgundy mb-6">
                Handcrafted Custom Cabinetry in Monmouth County
              </h2>
              <p className="body-large text-gray-700 mb-6">
                At {BUSINESS_INFO.name}, we believe that cabinets are more than just storage – they're 
                the foundation of your home's style and functionality. Our master craftsmen create 
                custom cabinetry that perfectly fits your space, lifestyle, and aesthetic vision.
              </p>
              <p className="text-gray-600 mb-8">
                Whether you're building a gourmet kitchen in Holmdel, designing a spa-like bathroom 
                in Manalapan, or adding built-in storage to your Wall Township home, we combine 
                old-world craftsmanship with modern techniques to deliver cabinetry that will last 
                for generations.
              </p>
              
              {/* Features List */}
              <div className="grid sm:grid-cols-2 gap-4">
                {cabinetryService.features.map((feature) => (
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

      {/* Cabinet Styles */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Cabinet Styles to Match Your Vision
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              From traditional elegance to modern minimalism, we craft cabinets in any style 
              to complement your home's architecture and your personal taste.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cabinetStyles.map((style) => (
              <div key={style.name} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-burgundy mb-3">{style.name}</h3>
                  <p className="text-gray-600 mb-4">{style.description}</p>
                  <div className="space-y-2">
                    {style.features.map((feature) => (
                      <div key={feature} className="flex items-center space-x-2">
                        <svg className="w-4 h-4 text-gold flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Options */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Endless Customization Options
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Every detail of your custom cabinets can be tailored to your exact specifications. 
              Choose from premium materials, finishes, and innovative storage solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customOptions.map((category) => (
              <div key={category.category} className="bg-cream rounded-lg p-6">
                <h3 className="text-lg font-semibold text-burgundy mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.options.map((option) => (
                    <li key={option} className="text-gray-600 text-sm flex items-center space-x-2">
                      <span className="w-1.5 h-1.5 bg-gold rounded-full"></span>
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div>
            <div className="max-w-4xl mx-auto">
              <h2 className="heading-2 text-burgundy mb-6">
                From Concept to Installation
              </h2>
              <p className="body-large text-gray-700 mb-8">
                Our comprehensive process ensures your custom cabinets are perfect in every way, 
                from the initial design to the final installation.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy mb-2">Consultation & Measurement</h3>
                    <p className="text-gray-600">We visit your home to discuss your needs, take precise measurements, and understand your vision.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy mb-2">Design & Planning</h3>
                    <p className="text-gray-600">Our designers create detailed 3D renderings and help you select materials, finishes, and hardware.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy mb-2">Craftsmanship</h3>
                    <p className="text-gray-600">Your cabinets are handcrafted in our workshop using premium materials and time-tested techniques.</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-gold font-bold">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-burgundy mb-2">Professional Installation</h3>
                    <p className="text-gray-600">Our expert installers ensure perfect fit and function, with attention to every detail.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Recent Custom Cabinetry Projects
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Browse our portfolio of custom cabinetry installations throughout Monmouth County. 
              Each project showcases our commitment to quality craftsmanship and attention to detail.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {cabinetryProjects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg p-6 shadow-md">
                <h3 className="text-xl font-semibold text-burgundy mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.type}</p>
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

      {/* Why Custom Cabinets */}
      <section className="section-padding bg-cream">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-2 text-burgundy mb-10 text-center">
            Why Choose Custom Cabinets?
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-burgundy mb-4">
                Perfect Fit for Your Space
              </h3>
              <p className="text-gray-600 mb-4">
                Unlike stock cabinets, custom cabinets are built to your exact specifications. 
                Every inch of space is utilized efficiently, and awkward gaps or fillers are eliminated.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Maximize storage in any space</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Accommodate unique room layouts</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Create built-in solutions</span>
                </li>
              </ul>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-burgundy mb-4">
                Superior Quality & Durability
              </h3>
              <p className="text-gray-600 mb-4">
                Our custom cabinets are built with premium materials and superior construction 
                methods that far exceed the quality of mass-produced alternatives.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Solid wood construction</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Dovetail drawer joints</span>
                </li>
                <li className="flex items-start space-x-2">
                  <svg className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-sm text-gray-600">Lifetime warranty options</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-3 text-burgundy mb-4">
              Custom Cabinetry Services Throughout Monmouth County
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              From historic homes to modern estates, we bring expert craftsmanship and custom 
              cabinet solutions to every community in Monmouth County.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.primary.map((town) => (
              <Link
                key={town}
                href={`/services/custom-cabinetry/${town.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center py-3 px-4 bg-cream rounded-lg hover:shadow-md transition-shadow duration-200 group"
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl">
          <h2 className="heading-2 text-burgundy mb-10 text-center">
            Custom Cabinetry FAQs
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                How long does it take to build custom cabinets?
              </h3>
              <p className="text-gray-600">
                Custom cabinets typically take 6-10 weeks from design approval to installation. 
                This includes 4-6 weeks for crafting in our workshop and 1-2 weeks for finishing 
                and installation. Rush orders may be available for an additional fee.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                Are custom cabinets worth the investment?
              </h3>
              <p className="text-gray-600">
                Absolutely. Custom cabinets offer superior quality, perfect fit, and personalized 
                design that adds significant value to your home. In Monmouth County's competitive 
                real estate market, quality custom cabinetry can increase your home's value by 
                5-10% while providing daily enjoyment and functionality.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                What's the difference between custom and semi-custom cabinets?
              </h3>
              <p className="text-gray-600">
                Custom cabinets are built from scratch to your exact specifications, while semi-custom 
                cabinets start with standard sizes that are modified. We offer true custom cabinetry, 
                meaning every dimension, material, and detail is tailored specifically for your home.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                Can you match existing cabinets?
              </h3>
              <p className="text-gray-600">
                Yes, we excel at matching existing cabinetry for additions or partial renovations. 
                We can replicate wood species, stain colors, door styles, and molding profiles to 
                ensure seamless integration with your current cabinets.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-xl font-semibold text-burgundy mb-3">
                Do you offer cabinet refacing services?
              </h3>
              <p className="text-gray-600">
                While we specialize in new custom cabinetry, we also offer cabinet refacing for 
                clients who want to update their look without full replacement. This involves 
                new doors, drawer fronts, and veneers while keeping existing cabinet boxes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}