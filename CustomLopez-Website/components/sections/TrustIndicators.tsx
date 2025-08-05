'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';

export default function TrustIndicators() {
  const [counters, setCounters] = useState({ years: 0, customers: 0, reviews: 0, projects: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            setHasAnimated(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [hasAnimated]);

  const animateCounters = () => {
    const duration = 2000;
    const steps = 60;
    const targets = { years: 50, customers: 1000, reviews: 127, projects: 15000 };
    
    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setCounters({
        years: Math.floor(targets.years * progress),
        customers: Math.floor(targets.customers * progress),
        reviews: Math.floor(targets.reviews * progress),
        projects: Math.floor(targets.projects * progress),
      });
      
      if (currentStep >= steps) {
        clearInterval(interval);
      }
    }, duration / steps);
  };

  const stats = [
    { 
      value: counters.years,
      suffix: '+',
      label: 'Years of Excellence',
      description: 'Family-Owned Since 1973',
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    { 
      value: counters.customers,
      suffix: '+',
      label: 'Happy Homeowners',
      description: 'Serving Monmouth County',
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
        </svg>
      )
    },
    { 
      value: counters.reviews,
      suffix: '+',
      label: '5-Star Reviews',
      description: 'Google, Houzz & Angi',
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      )
    },
    { 
      value: counters.projects,
      suffix: '+',
      label: 'Projects Completed',
      description: 'Kitchens & Bathrooms',
      icon: (
        <svg className="w-12 h-12 text-gold" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-white to-gray-50">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-burgundy mb-4">
            Trusted by Thousands of Monmouth County Homeowners
          </h2>
          <div className="w-32 h-1 bg-gold mx-auto mb-6"></div>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto">
            For over five decades, we've been transforming houses into dream homes with 
            unmatched craftsmanship and dedication to excellence
          </p>
        </div>

     

      

        {/* Warranty Section - Elegant Design */}
        <div className="bg-burgundy text-white rounded-2xl p-12 text-center max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <svg className="w-20 h-20 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-3xl font-bold mb-4">Our Lifetime Warranty Promise</h3>
          <p className="text-xl mb-8 text-white/90">
            We stand behind every project with comprehensive warranties that protect your investment 
            for years to come. Your peace of mind is our commitment.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-lg">
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Lifetime Labor Warranty</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">Material Protection</span>
            </div>
            <div className="flex items-center">
              <svg className="w-6 h-6 text-gold mr-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="font-semibold">100% Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}