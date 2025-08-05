'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const serviceImages = {
    'kitchen-remodeling': '/images/gallery/IMG_4149.jpeg',
    'bathroom-remodeling': '/images/gallery/IMG_0428.jpeg',
    'custom-cabinetry': '/images/gallery/IMG_6415.jpeg',
    'countertop-installation': '/images/gallery/IMG_6661.jpeg',
    'tile-flooring': '/images/gallery/IMG_5705.jpeg',
    'home-additions': '/images/gallery/IMG_6162.jpeg',
    'basement-finishing': '/images/gallery/IMG_0430.jpeg',
    'interior-remodeling': '/images/gallery/IMG_4922.jpeg',
  };

  const servicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (servicesRef.current) {
      const cards = servicesRef.current.querySelectorAll('.service-card');
      cards.forEach((card) => observer.observe(card));
      
      // Also observe animate-on-scroll elements
      const animatedElements = servicesRef.current.querySelectorAll('.animate-on-scroll');
      animatedElements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-cream/30" />
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      
      <div className="container-custom relative z-10" ref={servicesRef}>
        {/* Section Header with enhanced styling */}
        <div className="text-center mb-16">
          <h2 className="heading-2 text-burgundy mb-4 animate-on-scroll">
            Our <span className="text-gradient">Expert Remodeling</span> Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent mx-auto mb-6" />
          <p className="body-large text-gray-600 max-w-3xl mx-auto animate-on-scroll">
            From complete kitchen transformations to luxurious bathroom renovations, 
            we bring your vision to life with exceptional craftsmanship and attention to detail.
          </p>
        </div>

        {/* Services Grid - showing all services */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {SERVICES.primary.concat(SERVICES.additional).map((service, index) => (
            <Link
              key={service.id}
              href={`/services/${service.id}`}
              className="group bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden animate-on-scroll"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Service Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={serviceImages[service.id as keyof typeof serviceImages] || '/images/gallery/IMG_4149.jpeg'}
                  alt={`${service.name} in Monmouth County NJ`}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  quality={85}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                
                {/* Service Title Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-lg font-bold text-white">
                    {service.name}
                  </h3>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4">
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {service.description}
                </p>
                
                {/* Learn More Link */}
                <div className="flex items-center text-burgundy hover:text-gold transition-colors duration-300 font-semibold text-sm">
                  <span>Learn More</span>
                  <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Enhanced Bottom CTA */}
        <div className="text-center mt-16 animate-on-scroll">
          <p className="text-gray-600 mb-6">Discover our complete range of remodeling solutions</p>
          <Link href="/services" className="btn-premium inline-flex items-center space-x-3 group">
            <span>View All Services</span>
            <svg className="w-5 h-5 transform group-hover:rotate-90 transition-transform duration-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}