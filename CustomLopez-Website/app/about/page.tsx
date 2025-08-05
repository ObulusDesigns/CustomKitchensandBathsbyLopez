import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO, TRUST_SIGNALS } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'About Us | Custom Kitchens & Baths by Lopez - Monmouth County NJ',
  description: 'Learn about Custom Kitchens & Baths by Lopez, your trusted kitchen and bathroom remodeling experts serving Monmouth County since 2005. Family-owned, licensed, and insured.',
  keywords: 'about us, kitchen remodeling company, bathroom contractors, Monmouth County, family-owned, Lopez',
};

const milestones = [
  { year: 2005, event: 'Founded by Lopez with a vision for quality craftsmanship' },
  { year: 2008, event: 'Expanded services to include custom cabinetry' },
  { year: 2012, event: 'Celebrated 100th successful project completion' },
  { year: 2015, event: 'Received Best of Monmouth County award' },
  { year: 2018, event: 'Expanded team to 15 skilled craftsmen' },
  { year: 2020, event: 'Adapted services for safe home improvements during pandemic' },
  { year: 2023, event: 'Celebrated 500+ completed projects across Monmouth County' },
];

const values = [
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Quality First',
    description: 'We never compromise on materials or craftsmanship. Every project receives our full attention to detail.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
      </svg>
    ),
    title: 'Family Values',
    description: 'As a family-owned business, we treat every customer like family and every home with respect.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Licensed & Insured',
    description: 'Fully licensed, bonded, and insured for your complete peace of mind and protection.',
  },
  {
    icon: (
      <svg className="w-8 h-8 text-gold" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clipRule="evenodd" />
      </svg>
    ),
    title: 'Passionate Craftsmanship',
    description: 'Our passion for creating beautiful spaces drives us to exceed expectations on every project.',
  },
];

export default function AboutPage() {
  return (
    <PageLayout
      hero={{
        title: 'About Our Company',
        subtitle: 'Family-owned excellence in kitchen and bathroom remodeling since 2005',
        breadcrumbs: [
          { text: 'About Us', href: '/about' }
        ],
        backgroundImage: '/images/gallery/IMG_0426.jpeg'
      }}
    >
      {/* Company Story Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 text-burgundy mb-6">
                Our Story: Building Dreams Since {BUSINESS_INFO.yearEstablished}
              </h2>
              <p className="body-large text-gray-700 mb-6">
                {BUSINESS_INFO.name} began with a simple vision: to transform houses into dream homes 
                through exceptional craftsmanship and personalized service. Founded by Lopez in {BUSINESS_INFO.yearEstablished}, 
                our company has grown from a one-man operation to Monmouth County's trusted name in 
                kitchen and bathroom remodeling.
              </p>
              <p className="text-gray-600 mb-6">
                What started as a passion for woodworking and design has evolved into a full-service 
                remodeling company, yet we've never lost sight of our core values. Every cabinet we 
                install, every tile we place, and every detail we perfect reflects our commitment to 
                quality and our respect for your home.
              </p>
              <p className="text-gray-600 mb-8">
                Today, our team of skilled craftsmen continues Lopez's legacy of excellence, bringing 
                decades of combined experience to every project. From historic homes in Red Bank to 
                modern estates in Colts Neck, we've had the privilege of transforming hundreds of 
                kitchens and bathrooms throughout Monmouth County.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">
                    {new Date().getFullYear() - BUSINESS_INFO.yearEstablished}+
                  </div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">
                    {TRUST_SIGNALS.stats.projectsCompleted}
                  </div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">
                    100%
                  </div>
                  <div className="text-gray-600">Customer Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-gold mb-2">
                    {TRUST_SIGNALS.stats.totalReviews}+
                  </div>
                  <div className="text-gray-600">5-Star Reviews</div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="relative h-96 lg:h-[500px] rounded-xl overflow-hidden shadow-xl">
                <Image
                  src="/images/gallery/IMG_0424.jpeg"
                  alt="Lopez and team at work"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Experience Badge */}
              <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-gold rounded-full flex items-center justify-center shadow-lg">
                <div className="text-center">
                  <div className="text-3xl font-bold text-burgundy">
                    {new Date().getFullYear() - BUSINESS_INFO.yearEstablished}
                  </div>
                  <div className="text-sm text-burgundy font-semibold">Years</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="heading-3 text-burgundy mb-4">Our Mission</h3>
              <p className="text-gray-700">
                To transform Monmouth County homes with exceptional craftsmanship, innovative design, 
                and unparalleled customer service, creating spaces where families thrive and memories are made.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-burgundy rounded-full flex items-center justify-center mx-auto mb-6">
                <svg className="w-10 h-10 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                </svg>
              </div>
              <h3 className="heading-3 text-burgundy mb-4">Our Vision</h3>
              <p className="text-gray-700">
                To be Monmouth County's most trusted and recommended remodeling company, known for 
                turning renovation dreams into reality while building lasting relationships with every client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              The Values That Guide Us
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Every decision we make and every project we undertake is guided by these core principles 
              that have defined our company since day one.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Our Journey Through the Years
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              From humble beginnings to becoming Monmouth County's trusted remodeling partner, 
              here are the milestones that have shaped our company.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex items-start mb-8 last:mb-0">
                <div className="flex-shrink-0 w-24 text-right pr-8">
                  <span className="text-2xl font-bold text-gold">{milestone.year}</span>
                </div>
                <div className="flex-shrink-0 relative">
                  <div className="w-4 h-4 bg-gold rounded-full"></div>
                  {index < milestones.length - 1 && (
                    <div className="absolute top-4 left-1.5 w-1 h-full bg-gold/30"></div>
                  )}
                </div>
                <div className="flex-grow pl-8">
                  <p className="text-gray-700">{milestone.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Owner Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Meet the Owner
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Custom Kitchens & Baths by Lopez is more than just a business – it's a family legacy 
              built on passion, craftsmanship, and a personal commitment to every client.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <div className="relative h-[500px] rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/images/team/IMG_5360.jpeg"
                alt="Enrique Lopez - Owner of Custom Kitchens & Baths by Lopez"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <div>
              <h3 className="heading-3 text-burgundy mb-4">Enrique Lopez</h3>
              <p className="text-xl text-gold mb-6">Owner & Master Craftsman</p>
              
              <div className="space-y-4 text-gray-700">
                <p>
                  With over 50 years of combined experience in the remodeling industry, Enrique Lopez 
                  has built Custom Kitchens & Baths by Lopez into Monmouth County's trusted name for 
                  quality home renovations.
                </p>
                
                <p>
                  "Every home tells a story, and every project is an opportunity to help write a new 
                  chapter for our clients," says Lopez. "When you work with us, you're not just hiring 
                  a contractor – you're partnering with someone who genuinely cares about bringing your 
                  vision to life."
                </p>
                
                <p>
                  As a family-owned business, we understand the importance of trust, communication, and 
                  attention to detail. Enrique personally oversees every project, ensuring that the high 
                  standards that have defined our company for decades are maintained in every kitchen 
                  and bathroom we transform.
                </p>
                
                <p>
                  From the initial consultation to the final walkthrough, Enrique's hands-on approach 
                  and dedication to customer satisfaction have earned the loyalty of hundreds of 
                  homeowners throughout Freehold, Colts Neck, Holmdel, and beyond.
                </p>
              </div>
              
              <div className="mt-8 p-6 bg-cream rounded-lg">
                <p className="text-burgundy font-semibold mb-2">Personal Commitment:</p>
                <p className="text-gray-700 italic">
                  "I treat every project as if it were my own home. That's not just a business 
                  philosophy – it's a promise I make to every client who trusts us with their 
                  renovation."
                </p>
                <p className="text-right text-gold font-semibold mt-3">- Enrique Lopez</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Awards */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              Certifications & Recognition
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Our commitment to excellence has earned us recognition from industry leaders 
              and the trust of homeowners throughout Monmouth County.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h3 className="text-xl font-semibold text-burgundy mb-6">Professional Certifications</h3>
              <div className="space-y-4">
                {TRUST_SIGNALS.certifications.map((cert, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{cert.name}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-burgundy mb-6">Awards & Recognition</h3>
              <div className="space-y-4">
                {TRUST_SIGNALS.awards.map((award, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                    <span className="text-gray-700">{award}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              {BUSINESS_INFO.license} • {BUSINESS_INFO.insurance}
            </p>
            <Link href="/contact" className="btn-primary">
              Work with Award-Winning Professionals
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Ready to Experience the {BUSINESS_INFO.name} Difference?
          </h2>
          <p className="body-large mb-8 max-w-3xl mx-auto">
            Join hundreds of satisfied Monmouth County homeowners who have trusted us with their 
            kitchen and bathroom renovations. Let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </Link>
            <Link href="/contact" className="btn-secondary">
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}