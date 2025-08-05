'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO, TRUST_SIGNALS } from '@/lib/constants';

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);
  
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

  // Mouse parallax effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="relative min-h-[90vh] lg:min-h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 z-0" />
      
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-64 h-64 bg-gold/10 rounded-full blur-3xl animate-float"
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`,
          }}
        />
        <div 
          className="absolute bottom-20 right-10 w-96 h-96 bg-burgundy/10 rounded-full blur-3xl animate-float-delayed"
          style={{
            transform: `translate(${mousePosition.x * -30}px, ${mousePosition.y * -30}px)`,
          }}
        />
      </div>

      {/* High-Resolution Background Image Carousel with Zoom Effect */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-all duration-1000 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className={`object-cover transition-transform duration-[10000ms] ${
                  index === currentImageIndex ? 'scale-110' : 'scale-100'
                }`}
                quality={90}
                priority={index === 0}
                sizes="100vw"
              />
            </div>
          </div>
        ))}
        {/* Multi-layer gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/50 to-black/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center text-white">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading with enhanced animation */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-fade-in-up">
            <span className="inline-block">Transform Your Home</span>{' '}
            <span className="inline-block">with</span>{' '}
            <span className="text-gradient-radial inline-block">Expert Craftsmanship</span>
          </h1>

          {/* Subheading with delayed animation */}
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Custom Kitchens & Baths by Lopez brings over{' '}
            <span className="text-gold font-semibold">50 years</span> of experience to your luxury remodeling project
          </p>

          {/* Trust Indicators with citation logos */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {/* Trust statement */}
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex items-center bg-gold/20 backdrop-blur-md rounded-full px-6 py-3 border border-gold/30">
                <svg className="w-6 h-6 text-gold mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="text-white font-bold text-lg">Trusted by 1,000+ Homeowners</span>
              </div>
            </div>
            
            {/* Citation logos */}
            <div className="flex items-center justify-center gap-8 flex-wrap">
              <div className="flex items-center gap-2 text-white/80">
                <Image
                  src="/images/icons/NARI-Logo-797x800-1.webp"
                  alt="NARI Member"
                  width={50}
                  height={50}
                  className="brightness-0 invert opacity-80"
                />
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Image
                  src="/images/logo/houzz-logo-houzz-logo-design-BaUwJWMm_t.jpg"
                  alt="Best of Houzz"
                  width={80}
                  height={40}
                  className="brightness-0 invert opacity-80"
                />
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <Image
                  src="/images/logo/Angi_Wordmark_1C_Heart_RGB.svg.png"
                  alt="Angi Super Service Award"
                  width={80}
                  height={30}
                  className="brightness-0 invert opacity-80"
                />
              </div>
              <div className="flex items-center gap-2 text-white/80">
                <div className="bg-gold/20 backdrop-blur-sm rounded px-3 py-1 border border-gold/30">
                  <span className="text-sm font-bold">50+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="btn-premium text-lg px-8 py-4 shadow-2xl hover:shadow-glow-lg"
            >
              Get Your Free Consultation
            </a>
            <a 
              href={`tel:${BUSINESS_INFO.phone}`}
              className="glass text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300 shadow-2xl flex items-center justify-center space-x-2 group"
            >
              <svg className="w-5 h-5 group-hover:animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator with glow */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="relative">
          <div className="absolute inset-0 bg-gold/30 rounded-full blur-xl animate-pulse"></div>
          <svg className="w-6 h-6 relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
}