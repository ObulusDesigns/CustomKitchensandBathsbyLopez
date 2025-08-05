'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';

export default function CTA() {
  const ctaRef = useRef<HTMLDivElement>(null);

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

    if (ctaRef.current) {
      const elements = ctaRef.current.querySelectorAll('.animate-on-scroll');
      elements.forEach((el) => observer.observe(el));
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative py-20 overflow-hidden" ref={ctaRef}>
      {/* Enhanced Background with parallax effect */}
      <div className="absolute inset-0">
        <Image
          src="/images/gallery/IMG_0424.jpeg"
          alt="Beautiful kitchen remodel background"
          fill
          className="object-cover scale-110"
          quality={85}
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-burgundy/95 via-burgundy/90 to-burgundy/95" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-transparent" />
      </div>

      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gold/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/5 rounded-full blur-3xl animate-float-delayed" />
      </div>

      {/* Enhanced CTA Content with glass morphism */}
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center glass backdrop-blur-sm rounded-2xl p-10 border border-white/10">
          <h2 className="heading-2 text-white mb-6 animate-on-scroll">
            Ready to <span className="text-gold">Transform</span> Your Home?
          </h2>
          
          <p className="body-large text-gray-100 mb-8 max-w-2xl mx-auto animate-on-scroll" style={{ animationDelay: '0.1s' }}>
            Join hundreds of satisfied Monmouth County homeowners who have trusted us 
            with their kitchen and bathroom renovations. Your dream space is just a consultation away.
          </p>

          {/* Enhanced Benefits List with animations */}
          <div className="grid sm:grid-cols-3 gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-2 text-white animate-on-scroll" style={{ animationDelay: '0.2s' }}>
              <div className="relative">
                <svg className="w-5 h-5 text-gold flex-shrink-0 animate-pulse-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Free Consultation</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white animate-on-scroll" style={{ animationDelay: '0.3s' }}>
              <div className="relative">
                <svg className="w-5 h-5 text-gold flex-shrink-0 animate-pulse-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">Detailed Quote</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-white animate-on-scroll" style={{ animationDelay: '0.4s' }}>
              <div className="relative">
                <svg className="w-5 h-5 text-gold flex-shrink-0 animate-pulse-glow" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <span className="font-medium">3D Design Rendering</span>
            </div>
          </div>

          {/* CTA Button */}
          <div className="flex justify-center mb-8">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-burgundy bg-gold rounded-lg hover:bg-gold-light transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Call Now for Your Free Consultation: {BUSINESS_INFO.phone}
            </a>
          </div>

          {/* Urgency Text */}
          <p className="text-gold text-lg font-medium">
            Limited appointments available – Book your consultation today!
          </p>
        </div>
      </div>
    </section>
  );
}