'use client';

import Link from 'next/link';
import PageLayout from '@/components/layout/PageLayout';
import ContactForm from '@/components/forms/ContactForm';
import GoogleMap from '@/components/ui/GoogleMap';
import { BUSINESS_INFO, SERVICE_AREAS } from '@/lib/constants';
import { GAEvent } from '@/components/analytics/GoogleAnalytics';

// Note: Metadata must be moved to a separate layout.tsx file when using 'use client'
// export const metadata: Metadata = {
//   title: 'Contact Us | Kitchen & Bath Remodeling in Monmouth County NJ',
//   description: 'Contact Custom Kitchens & Baths by Lopez for a free consultation. Serving all of Monmouth County, NJ. Call (732) 481-1422 or fill out our contact form.',
//   keywords: 'contact us, kitchen remodeling consultation, bathroom renovation quote, Monmouth County contractors',
// };

const contactMethods = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.54 1.06l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Call Us',
    details: BUSINESS_INFO.phone,
    action: `tel:${BUSINESS_INFO.phone}`,
    actionText: 'Call Now',
    description: 'Speak directly with our team'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Email Us',
    details: BUSINESS_INFO.email,
    action: `mailto:${BUSINESS_INFO.email}`,
    actionText: 'Send Email',
    description: 'Get a response within 24 hours'
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Visit Our Showroom',
    details: `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}`,
    action: `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(`${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.stateAbbr} ${BUSINESS_INFO.address.zip}`)}`,
    actionText: 'Get Directions',
    description: 'See samples and meet our team'
  }
];

export default function ContactPage() {
  return (
    <PageLayout
      hero={{
        title: 'Contact Us',
        subtitle: 'Get your free consultation and transform your kitchen or bathroom today',
        breadcrumbs: [
          { text: 'Contact', href: '/contact' }
        ],
        backgroundImage: '/images/gallery/IMG_0425.jpeg'
      }}
    >
      {/* Contact Methods */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 text-burgundy mb-4">
              We're Here to Help
            </h2>
            <p className="body-large text-gray-600 max-w-3xl mx-auto">
              Ready to start your kitchen or bathroom remodeling project? Contact us today for a 
              free consultation. We serve all of Monmouth County with pride and professionalism.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold">
                  {method.icon}
                </div>
                <h3 className="text-xl font-semibold text-burgundy mb-2">{method.title}</h3>
                <p className="text-gray-700 font-medium mb-1">{method.details}</p>
                <p className="text-sm text-gray-600 mb-4">{method.description}</p>
                <a
                  href={method.action}
                  target={method.title === 'Visit Our Showroom' ? '_blank' : undefined}
                  rel={method.title === 'Visit Our Showroom' ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center space-x-2 text-gold hover:text-gold-dark transition-colors"
                  onClick={() => {
                    if (method.title === 'Call Us') {
                      GAEvent.phoneClick(BUSINESS_INFO.phone);
                    }
                  }}
                >
                  <span>{method.actionText}</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            ))}
          </div>

          {/* Business Hours */}
          <div className="bg-cream rounded-xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-burgundy mb-6 text-center">Business Hours</h3>
            <div className="grid grid-cols-2 gap-4">
              {BUSINESS_INFO.hours.map((hours) => (
                <div key={hours.day} className="flex justify-between">
                  <span className="text-gray-700 font-medium">{hours.day}:</span>
                  <span className="text-gray-600">
                    {hours.open === 'Closed' ? 'Closed' : `${hours.open} - ${hours.close}`}
                  </span>
                </div>
              ))}
            </div>
            <p className="text-sm text-gray-600 mt-6 text-center">
              * Emergency services available outside regular hours
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="heading-3 text-burgundy mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours. For immediate 
                assistance, please call us at {BUSINESS_INFO.phone}.
              </p>
              
              <div className="bg-white rounded-xl shadow-lg p-8">
                <ContactForm />
              </div>
            </div>

            {/* Map and Location Info */}
            <div>
              <h2 className="heading-3 text-burgundy mb-6">
                Find Us
              </h2>
              <p className="text-gray-600 mb-8">
                Visit our showroom to see samples, meet our team, and discuss your project in person. 
                We're conveniently located in {BUSINESS_INFO.address.city}.
              </p>
              
              <GoogleMap height="500px" className="mb-8" />
              
              {/* Additional Location Info */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="font-semibold text-burgundy mb-4">Showroom Location</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div>
                      <p className="text-gray-700">{BUSINESS_INFO.address.street}</p>
                      <p className="text-gray-700">
                        {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    <p className="text-gray-700">Free parking available</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-gray-700">Wheelchair accessible</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-3 text-burgundy mb-4">
              Proudly Serving All of Monmouth County
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              No matter where you're located in Monmouth County, we're ready to transform your 
              kitchen or bathroom. Our service area includes:
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {SERVICE_AREAS.primary.map((town) => (
              <Link
                key={town}
                href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-center py-3 px-4 bg-gray-50 rounded-lg hover:bg-cream hover:shadow-md transition-all duration-200 group"
              >
                <span className="text-gray-700 group-hover:text-burgundy transition-colors">
                  {town}
                </span>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-4">
              Don't see your town listed? We serve all of Monmouth County!
            </p>
            <Link href="/locations" className="text-gold hover:text-gold-dark font-medium">
              View All Service Areas →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-burgundy text-white">
        <div className="container-custom text-center">
          <h2 className="heading-2 mb-6">
            Ready to Transform Your Home?
          </h2>
          <p className="body-large mb-8 max-w-3xl mx-auto">
            Don't wait to create the kitchen or bathroom of your dreams. Contact us today for 
            your free consultation and let's bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${BUSINESS_INFO.phone}`} className="btn-secondary">
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </a>
            <a 
              href="#contact-form"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector('#contact-form')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn-secondary"
            >
              Fill Out Contact Form
            </a>
          </div>
          
          {/* Trust Signals */}
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Free Consultations</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Satisfaction Guarantee</span>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}