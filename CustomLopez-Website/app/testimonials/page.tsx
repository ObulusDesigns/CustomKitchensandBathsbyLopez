import { Metadata } from 'next';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import TestimonialCard, { Testimonial } from '@/components/ui/TestimonialCard';
import ReviewSchema from '@/components/seo/ReviewSchema';
import { BUSINESS_INFO, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Customer Testimonials & Reviews | Kitchen & Bath Remodeling in Monmouth County',
  description: 'Read what our satisfied customers say about their kitchen and bathroom remodeling experiences with Custom Kitchens & Baths by Lopez throughout Monmouth County, NJ.',
  keywords: 'customer reviews, testimonials, kitchen remodeling reviews, bathroom renovation testimonials, Monmouth County',
};

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah Thompson',
    location: 'Colts Neck, NJ',
    rating: 5,
    date: '2024-01-15',
    service: 'Kitchen Remodeling',
    text: 'Lopez and his team transformed our outdated kitchen into a stunning modern masterpiece. Their attention to detail, professionalism, and craftsmanship exceeded all our expectations. The project was completed on time and within budget.',
    beforeImage: '/images/gallery/IMG_0424.jpeg',
    afterImage: '/images/gallery/IMG_0428.jpeg',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Rodriguez',
    location: 'Rumson, NJ',
    rating: 5,
    date: '2024-02-03',
    service: 'Bathroom Remodeling',
    text: 'Our master bathroom is now our private spa retreat. The quality of work is exceptional, from the custom tile work to the luxurious fixtures. The team was professional, clean, and respectful of our home throughout the entire process.',
    beforeImage: '/images/gallery/IMG_0183.jpeg',
    afterImage: '/images/gallery/IMG_0184.jpeg',
    verified: true
  },
  {
    id: 3,
    name: 'Jennifer Kim',
    location: 'Holmdel, NJ',
    rating: 5,
    date: '2023-12-20',
    service: 'Kitchen Remodeling',
    text: 'They perfectly captured our vision for a warm, traditional kitchen that still feels fresh and modern. The custom cabinetry is beautiful, and the granite countertops are exactly what we wanted. Highly recommend!',
    verified: true
  },
  {
    id: 4,
    name: 'Robert Davis',
    location: 'Wall Township, NJ',
    rating: 5,
    date: '2024-01-28',
    service: 'Custom Cabinetry',
    text: 'The custom cabinetry transformed our spare room into an elegant library. Beautiful craftsmanship and attention to every detail. Lopez personally ensured everything was perfect before considering the job complete.',
    verified: true
  },
  {
    id: 5,
    name: 'Lisa Martinez',
    location: 'Spring Lake, NJ',
    rating: 5,
    date: '2023-11-15',
    service: 'Bathroom Remodeling',
    text: 'They created the perfect beach house bathroom that reflects our coastal lifestyle. Every detail from the ship-lap walls to the nautical fixtures was thoughtfully selected and expertly installed.',
    beforeImage: '/images/gallery/IMG_0435.jpeg',
    afterImage: '/images/gallery/IMG_6420.jpeg',
    verified: true
  },
  {
    id: 6,
    name: 'David Sullivan',
    location: 'Marlboro, NJ',
    rating: 5,
    date: '2024-01-10',
    service: 'Kitchen Remodeling',
    text: 'Our kitchen is now the showpiece of our home. The contemporary design with the waterfall island is exactly what we envisioned. The team handled every challenge with professionalism and expertise.',
    verified: true
  },
  {
    id: 7,
    name: 'Patricia Johnson',
    location: 'Freehold, NJ',
    rating: 5,
    date: '2023-10-22',
    service: 'Kitchen & Bath Remodeling',
    text: 'We hired them for both our kitchen and master bath renovations. Both projects were completed beautifully. Their project management kept everything on schedule, and communication was excellent throughout.',
    verified: true
  },
  {
    id: 8,
    name: 'James Wilson',
    location: 'Red Bank, NJ',
    rating: 5,
    date: '2023-12-05',
    service: 'Custom Cabinetry',
    text: 'The built-in entertainment center they created is a work of art. Perfect fit, beautiful finish, and incredible attention to detail. Worth every penny!',
    verified: true
  },
  {
    id: 9,
    name: 'Maria Garcia',
    location: 'Middletown, NJ',
    rating: 5,
    date: '2024-02-12',
    service: 'Bathroom Remodeling',
    text: 'From design to completion, the experience was fantastic. They helped us maximize our small bathroom space with clever storage solutions and made it feel luxurious. Couldn\'t be happier!',
    verified: true
  },
  {
    id: 10,
    name: 'Thomas Anderson',
    location: 'Manalapan, NJ',
    rating: 5,
    date: '2023-11-30',
    service: 'Kitchen Remodeling',
    text: 'Professional, punctual, and passionate about their work. Our kitchen renovation was completed ahead of schedule and the results are stunning. The custom island with seating is perfect for our family.',
    verified: true
  }
];

const stats = [
  { label: 'Total Reviews', value: TRUST_SIGNALS.stats.totalReviews + '+' },
  { label: 'Average Rating', value: TRUST_SIGNALS.stats.averageRating + '/5' },
  { label: 'Satisfaction Rate', value: '100%' },
  { label: 'Would Recommend', value: '100%' }
];

export default function TestimonialsPage() {
  // Group testimonials by service
  const kitchenTestimonials = testimonials.filter(t => t.service.includes('Kitchen'));
  const bathroomTestimonials = testimonials.filter(t => t.service.includes('Bathroom'));
  const cabinetryTestimonials = testimonials.filter(t => t.service.includes('Cabinetry'));

  return (
    <>
      <ReviewSchema reviews={testimonials} />
      <PageLayout
        hero={{
          title: 'Customer Testimonials',
          subtitle: 'Hear from our satisfied customers throughout Monmouth County',
          breadcrumbs: [
            { text: 'Testimonials', href: '/testimonials' }
          ],
          backgroundImage: '/images/gallery/IMG_0426.jpeg'
        }}
      >
        {/* Stats Section */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <div className="text-center mb-12">
              <h2 className="heading-2 text-burgundy mb-4">
                Trusted by Hundreds of Homeowners
              </h2>
              <p className="body-large text-gray-600 max-w-3xl mx-auto">
                For over {new Date().getFullYear() - BUSINESS_INFO.yearEstablished} years, we've been transforming homes 
                and exceeding expectations. Here's what our customers have to say about their experience 
                with {BUSINESS_INFO.name}.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Testimonials */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <h2 className="heading-2 text-burgundy mb-10 text-center">
              Featured Transformations
            </h2>
            
            <div className="space-y-12">
              {testimonials
                .filter(t => t.beforeImage && t.afterImage)
                .slice(0, 3)
                .map((testimonial) => (
                  <TestimonialCard
                    key={testimonial.id}
                    testimonial={testimonial}
                    variant="detailed"
                  />
                ))}
            </div>
          </div>
        </section>

        {/* Kitchen Remodeling Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-3 text-burgundy mb-8 text-center">
              Kitchen Remodeling Reviews
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {kitchenTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Bathroom Remodeling Testimonials */}
        <section className="section-padding bg-cream">
          <div className="container-custom">
            <h2 className="heading-3 text-burgundy mb-8 text-center">
              Bathroom Remodeling Reviews
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {bathroomTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Custom Cabinetry Testimonials */}
        <section className="section-padding bg-white">
          <div className="container-custom">
            <h2 className="heading-3 text-burgundy mb-8 text-center">
              Custom Cabinetry Reviews
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cabinetryTestimonials.map((testimonial) => (
                <TestimonialCard
                  key={testimonial.id}
                  testimonial={testimonial}
                  variant="default"
                />
              ))}
            </div>
          </div>
        </section>

        {/* Review Platforms */}
        <section className="section-padding bg-gray-50">
          <div className="container-custom">
            <div className="text-center mb-10">
              <h2 className="heading-3 text-burgundy mb-4">
                Find Us on Review Platforms
              </h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                We're proud of our reputation across multiple review platforms. 
                Check out what customers are saying about us online.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <a
                href="https://www.google.com/search?q=Custom+Kitchens+%26+Baths+by+Lopez+Monmouth+County+NJ"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-gold mb-2">5.0</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-semibold text-burgundy mb-1">Google Reviews</p>
                <p className="text-sm text-gray-600">50+ Reviews</p>
              </a>

              <a
                href="https://www.houzz.com/professionals/kitchen-and-bath-remodelers/custom-kitchens-and-baths-by-lopez-pfvwus-pf~1741812585"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-gold mb-2">5.0</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-semibold text-burgundy mb-1">Houzz</p>
                <p className="text-sm text-gray-600">40+ Reviews</p>
              </a>

              <a
                href="https://www.bbb.org/us/nj/freehold/profile/kitchen-remodeling/custom-kitchens-baths-by-lopez-0221-90173851"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-3xl font-bold text-gold mb-2">A+</div>
                <div className="flex justify-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="font-semibold text-burgundy mb-1">BBB</p>
                <p className="text-sm text-gray-600">Accredited Business</p>
              </a>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-burgundy text-white">
          <div className="container-custom text-center">
            <h2 className="heading-2 mb-6">
              Join Our Growing List of Satisfied Customers
            </h2>
            <p className="body-large mb-8 max-w-3xl mx-auto">
              Experience the {BUSINESS_INFO.name} difference for yourself. Schedule your free 
              consultation today and let's create something beautiful together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary">
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                Call {BUSINESS_INFO.phone}
              </Link>
            </div>
          </div>
        </section>
      </PageLayout>
    </>
  );
}