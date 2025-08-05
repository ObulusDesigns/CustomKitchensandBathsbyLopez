'use client';

import { useState } from 'react';
import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: 'How much does a kitchen remodel cost in Monmouth County?',
      answer: 'Kitchen remodeling costs in Monmouth County typically range from $25,000 to $75,000+ depending on the size, materials, and scope of work. We provide free, detailed quotes tailored to your specific project and budget. Factors affecting cost include cabinet quality, countertop materials, appliances, and any structural changes.'
    },
    {
      question: 'How long does a typical bathroom renovation take?',
      answer: 'A standard bathroom renovation takes 2-3 weeks from start to finish, while a master bathroom remodel may take 3-4 weeks. We provide a detailed timeline during your consultation and work efficiently to minimize disruption to your daily routine. Our team manages all permits and inspections required in Monmouth County.'
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: 'Yes, we handle all necessary permits and coordinate inspections required by your local municipality in Monmouth County. Our team is familiar with building codes in Freehold, Colts Neck, Holmdel, and all surrounding townships. This ensures your project is compliant and passes all inspections.'
    },
    {
      question: 'What areas of Monmouth County do you service?',
      answer: `We proudly serve all of Monmouth County including Freehold, Manalapan, Marlboro, Colts Neck, Holmdel, Middletown, Red Bank, Rumson, and surrounding areas within a ${BUSINESS_INFO.serviceRadius}-mile radius of our location. Contact us to confirm service to your specific area.`
    },
    {
      question: 'Are you licensed and insured?',
      answer: `Yes, we are fully licensed (${BUSINESS_INFO.license}) and carry comprehensive liability insurance and workers\' compensation. We\'re also bonded for your protection. All our work meets or exceeds New Jersey building codes and industry standards.`
    },
    {
      question: 'Do you offer financing options?',
      answer: 'We understand that remodeling is a significant investment. We work with several financing partners to offer flexible payment options. We also accept all major credit cards and can structure payment schedules to align with project milestones.'
    },
    {
      question: 'Can you work with my existing design or architect?',
      answer: 'Absolutely! We frequently collaborate with homeowners\' architects, interior designers, and design professionals. We can also provide our own design services if needed. Our goal is to bring your vision to life, whether it\'s your design or created in collaboration with our team.'
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We stand behind our work with a comprehensive warranty. We provide a lifetime warranty on our labor and pass through all manufacturer warranties on materials and appliances. If any issues arise from our workmanship, we\'ll fix them at no cost to you.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-burgundy mb-4">
            Frequently Asked Questions
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Get answers to common questions about kitchen and bathroom remodeling 
            in Monmouth County. Don't see your question? Contact us for personalized assistance.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                >
                  <h3 className="font-semibold text-burgundy pr-4">
                    {faq.question}
                  </h3>
                  <svg
                    className={`w-5 h-5 text-gold flex-shrink-0 transform transition-transform duration-200 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Have more questions about your remodeling project?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-secondary"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call {BUSINESS_INFO.phone}
            </a>
            <Link href="tel:7329950300" className="btn-primary">
              Schedule Free Consultation
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}