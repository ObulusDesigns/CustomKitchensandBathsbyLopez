'use client';

import { useState } from 'react';
import Image from 'next/image';
import { SERVICE_AREAS } from '@/lib/constants';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah & Michael Thompson',
      location: 'Colts Neck, NJ',
      project: 'Complete Kitchen Renovation',
      rating: 5,
      text: 'Lopez and his team transformed our outdated kitchen into a stunning modern masterpiece. Their attention to detail, professionalism, and commitment to quality exceeded our expectations. The custom cabinetry is absolutely beautiful!',
      date: 'October 2023',
      source: 'google' as const
    },
    {
      name: 'Jennifer Martinez',
      location: 'Holmdel, NJ',
      project: 'Master Bathroom Remodel',
      rating: 5,
      text: 'From design to completion, the experience was flawless. They helped us create a spa-like bathroom that we absolutely love. The heated floors and custom vanity are perfect. Highly recommend to anyone in Monmouth County!',
      date: 'September 2023',
      source: 'google' as const
    },
    {
      name: 'Robert & Lisa Chen',
      location: 'Freehold, NJ',
      project: 'Kitchen & Bathroom Renovation',
      rating: 5,
      text: 'We hired Custom Kitchens & Baths by Lopez for a complete home renovation. Their craftsmanship is outstanding, and they finished on time and within budget. The team was respectful, clean, and professional throughout the entire process.',
      date: 'August 2023',
      source: 'houzz' as const
    },
    {
      name: 'David Wilson',
      location: 'Rumson, NJ',
      project: 'Luxury Kitchen Remodel',
      rating: 5,
      text: 'The best contractor we\'ve ever worked with. They turned our vision into reality with incredible attention to detail. The custom island with waterfall quartz countertop is the centerpiece of our home. Worth every penny!',
      date: 'July 2023',
      source: 'google' as const
    },
    {
      name: 'Maria Rodriguez',
      location: 'Middletown, NJ',
      project: 'Two Bathroom Renovations',
      rating: 5,
      text: 'Lopez renovated both of our bathrooms and the results are amazing. They helped us maximize our space and select beautiful materials within our budget. Professional, reliable, and true craftsmen. Will definitely use them again!',
      date: 'June 2023',
      source: 'angi' as const
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        className={`w-5 h-5 ${i < rating ? 'text-gold' : 'text-gray-300'}`}
        fill="currentColor"
        viewBox="0 0 20 20"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  const renderSourceIcon = (source: 'google' | 'houzz' | 'angi') => {
    switch (source) {
      case 'google':
        return (
          <div className="flex items-center space-x-2">
            <Image
              src="/images/icons/Google__G__Logo-512.webp"
              alt="Google Reviews"
              width={20}
              height={20}
              className="rounded"
            />
            <span className="text-sm text-gray-600">Google Review</span>
          </div>
        );
      case 'houzz':
        return (
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-green-600 rounded flex items-center justify-center">
              <span className="font-bold text-white text-xs">H</span>
            </div>
            <span className="text-sm text-gray-600">Houzz Review</span>
          </div>
        );
      case 'angi':
        return (
          <div className="flex items-center space-x-2">
            <div className="w-5 h-5 bg-red-600 rounded flex items-center justify-center">
              <span className="font-bold text-white text-xs">A</span>
            </div>
            <span className="text-sm text-gray-600">Angi Review</span>
          </div>
        );
    }
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="heading-2 text-burgundy mb-4">
            What Our Monmouth County Clients Say
          </h2>
          <p className="body-large text-gray-600 max-w-3xl mx-auto">
            Don\'t just take our word for it – hear from homeowners throughout Monmouth County 
            who have experienced the Lopez difference firsthand.
          </p>
        </div>

        {/* Main Testimonial Display */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            {/* Quote Icon */}
            <div className="text-gold mb-6">
              <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>

            {/* Testimonial Content */}
            <div className="mb-8">
              <p className="text-lg md:text-xl text-gray-700 italic mb-6">
                "{testimonials[activeTestimonial].text}"
              </p>
              
              {/* Rating Stars */}
              <div className="flex items-center mb-4">
                {renderStars(testimonials[activeTestimonial].rating)}
              </div>

              {/* Client Info */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-semibold text-burgundy text-lg">
                    {testimonials[activeTestimonial].name}
                  </p>
                  <p className="text-gray-600">
                    {testimonials[activeTestimonial].location} • {testimonials[activeTestimonial].project}
                  </p>
                </div>
                <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                  <p className="text-sm text-gray-500 mb-2">
                    {testimonials[activeTestimonial].date}
                  </p>
                  {renderSourceIcon(testimonials[activeTestimonial].source)}
                </div>
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="flex justify-center space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === activeTestimonial
                      ? 'w-8 bg-burgundy'
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Review Platforms */}
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">Read more reviews on:</p>
          <div className="flex flex-wrap justify-center items-center gap-6">
            <a 
              href="https://www.google.com/search?q=Custom+Kitchens+%26+Baths+by+Lopez+reviews" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Image
                src="/images/icons/Google__G__Logo-512.webp"
                alt="Google Reviews"
                width={32}
                height={32}
                className="rounded"
              />
              <span className="font-medium text-gray-700">Google Reviews</span>
            </a>
            <a 
              href="https://www.houzz.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-green-600 rounded flex items-center justify-center">
                <span className="font-bold text-white text-sm">H</span>
              </div>
              <span className="font-medium text-gray-700">Houzz</span>
            </a>
            <a 
              href="https://www.angi.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center">
                <span className="font-bold text-white text-sm">A</span>
              </div>
              <span className="font-medium text-gray-700">Angi</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}