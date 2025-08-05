'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO, TRUST_SIGNALS } from '@/lib/constants';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // Array of hero images with high-resolution versions
  const heroImages = [
    {
      src: '/images/gallery/IMG_4149.jpeg',
      alt: 'Luxury kitchen remodel with white cabinets and marble countertops in Monmouth County NJ'
    },
    {
      src: '/images/gallery/IMG_6661.jpeg',
      alt: 'Modern kitchen renovation with elegant design in Freehold NJ'
    },
    {
      src: '/images/gallery/IMG_5705.jpeg',
      alt: 'Custom kitchen island design with quartz countertops in Colts Neck NJ'
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <section className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* High-Resolution Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              quality={90}
              priority={index === 0}
              sizes="100vw"
            />
          </div>
        ))}
        {/* Gradient Overlay - optimized for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Transform Your Home with Expert Craftsmanship
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto">
            Custom Kitchens & Baths by Lopez brings over 50 years of experience to your luxury remodeling project
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Licensed & Insured</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>50+ Years Experience</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-primary text-lg px-8 py-4 shadow-2xl hover:shadow-gold/20"
            >
              Get Your Free Consultation
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="bg-white text-burgundy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}