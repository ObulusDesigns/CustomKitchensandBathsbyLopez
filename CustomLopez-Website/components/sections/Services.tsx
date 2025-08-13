'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';

export default function Services() {
  const serviceIcons = {
    'kitchen-remodeling': (
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
    'bathroom-remodeling': (
      <path d="M7 7h10a2 2 0 012 2v9a1 1 0 11-2 0v-9H7a1 1 0 110-2zM5 22a2 2 0 002 2h10a2 2 0 002-2v-2a2 2 0 00-2-2H7a2 2 0 00-2 2v2zm2 0v-2h10v2H7z"/>
    ),
    'custom-cabinetry': (
      <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
    ),
    'countertop-installation': (
      <path d="M19 3H5C3.9 3 3 3.9 3 5v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/>
    ),
    'tile-flooring': (
      <path d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
    ),
    'home-additions': (
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
    'basement-finishing': (
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
    'interior-remodeling': (
      <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    ),
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
              {/* Service Icon */}
              <div className="relative h-48 bg-gradient-to-br from-burgundy/10 to-gold/10 flex items-center justify-center group-hover:from-burgundy/20 group-hover:to-gold/20 transition-colors duration-300">
                <div className="w-24 h-24 bg-white/50 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-12 h-12 text-burgundy" fill="currentColor" viewBox="0 0 24 24">
                    {serviceIcons[service.id as keyof typeof serviceIcons]}
                  </svg>
                </div>
              </div>

              {/* Service Content */}
              <div className="p-4">
                <h3 className="text-lg font-bold text-burgundy mb-2">
                  {service.name}
                </h3>
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