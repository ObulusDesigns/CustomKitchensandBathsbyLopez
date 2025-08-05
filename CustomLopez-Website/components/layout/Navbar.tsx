'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export default function Navbar() {
const [isScrolled, setIsScrolled] = useState(false);
const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const [isServicesOpen, setIsServicesOpen] = useState(false);
const [isLocationsOpen, setIsLocationsOpen] = useState(false);
const [selectedLocation, setSelectedLocation] = useState('Monmouth County');

const pathname = usePathname();

useEffect(() => {
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 10);
  };

  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);

const closeMenus = () => {
  setIsServicesOpen(false);
  setIsLocationsOpen(false);
  setIsMobileMenuOpen(false);
};

// Get current day and check if open
const currentDay = new Date().toLocaleDateString('en-US', { weekday: 'long' });
const todayHours = BUSINESS_INFO.hours.find(h => h.day === currentDay);
const isOpen = todayHours?.open !== 'Closed';

return (
  <>
    {/* Top Bar with Promo */}
    <div className="bg-burgundy-light border-b border-burgundy hidden lg:block fixed top-0 left-0 right-0 z-50">
      <div className="container-custom">
        <div className="relative flex items-center justify-between py-2 text-sm">
          {/* Left side - Contact Info */}
          <div className="flex items-center space-x-4">
            <a href={`mailto:${BUSINESS_INFO.email}`} className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span>{BUSINESS_INFO.email}</span>
            </a>
            
            <a href={`tel:${BUSINESS_INFO.phone}`} className="flex items-center space-x-2 text-white/80 hover:text-white transition-colors">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>{BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Center - Promo/Emergency CTA - Absolutely positioned */}
          <div className="absolute left-1/2 transform -translate-x-1/2">
            <div className="bg-gold text-burgundy px-4 py-1 rounded-full font-bold animate-pulse">
              🔥 20% OFF First-Time Customers - Limited Time!
            </div>
          </div>

          {/* Right side - Hours */}
          <div className="flex items-center space-x-2 text-white/80">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>
              {isOpen && todayHours ? `Open until ${todayHours.close}` : 'Closed - Opens Monday 8:00 AM'}
            </span>
          </div>
        </div>
      </div>
    </div>

    {/* Main Navigation - Always burgundy */}
    <nav className={`fixed top-0 lg:top-9 left-0 right-0 z-50 transition-all duration-300 bg-burgundy-dark ${
      isScrolled ? 'shadow-xl' : 'shadow-lg'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-28 md:h-32">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <div className="relative w-24 h-24 md:w-28 md:h-28">
              <Image
                src="/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp"
                alt="Custom Kitchens & Baths by Lopez"
                width={112}
                height={112}
                className="object-contain"
                priority
                quality={100}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-gold transition-colors duration-300 font-medium">
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <div
                onMouseEnter={() => setIsServicesOpen(true)}
                onMouseLeave={() => setIsServicesOpen(false)}
                className="flex items-center space-x-1 py-6"
              >
                <Link href="/services" className="flex items-center space-x-1 text-white hover:text-gold transition-colors duration-300 font-medium">
                  <span>Services</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              
              {isServicesOpen && (
                <div
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                  className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-4 animate-fade-in-down max-h-[500px] overflow-y-auto border border-gray-200"
                >
                  {/* Primary Services */}
                  {SERVICES.primary.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="block px-6 py-3 text-gray-700 hover:text-burgundy hover:bg-cream transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                  
                  {/* Divider */}
                  <div className="border-t border-gray-200 my-2"></div>
                  
                  {/* Additional Services */}
                  {SERVICES.additional.map((service) => (
                    <Link
                      key={service.id}
                      href={`/services/${service.id}`}
                      className="block px-6 py-3 text-gray-700 hover:text-burgundy hover:bg-cream transition-colors duration-200"
                    >
                      {service.name}
                    </Link>
                  ))}
                  
                  {/* View All Services */}
                  <div className="border-t border-gray-200 mt-2 pt-2">
                    <Link
                      href="/services"
                      className="block px-6 py-3 text-burgundy font-semibold hover:text-gold hover:bg-cream transition-colors duration-200"
                    >
                      View All Services
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Locations Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsLocationsOpen(true)}
              onMouseLeave={() => setIsLocationsOpen(false)}
            >
              <div
                onMouseEnter={() => setIsLocationsOpen(true)}
                onMouseLeave={() => setIsLocationsOpen(false)}
                className="flex items-center space-x-1 py-6"
              >
                <Link href="/locations" className="flex items-center space-x-1 text-white hover:text-gold transition-colors duration-300 font-medium">
                  <span>Areas Served</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </Link>
              </div>
              
              {isLocationsOpen && (
                <div
                  onMouseEnter={() => setIsLocationsOpen(true)}
                  onMouseLeave={() => setIsLocationsOpen(false)}
                  className="absolute top-full left-0 w-64 bg-white rounded-lg shadow-xl py-4 max-h-96 overflow-y-auto animate-fade-in-down border border-gray-200"
                >
                  <div className="px-6 py-2 text-sm font-semibold text-burgundy">Popular Areas</div>
                  {SERVICE_AREAS.primary.slice(0, 8).map((town) => (
                    <Link
                      key={town}
                      href={`/locations/${town.toLowerCase().replace(/\s+/g, '-')}`}
                      className="block px-6 py-2 text-gray-700 hover:text-burgundy hover:bg-cream transition-colors duration-200"
                    >
                      {town}
                    </Link>
                  ))}
                  <div className="border-t border-gray-100 mt-2 pt-2">
                    <Link
                      href="/locations"
                      className="block px-6 py-3 text-burgundy font-semibold hover:text-gold hover:bg-cream transition-colors duration-200"
                    >
                      View All Areas Served
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link href="/portfolio" className="text-white hover:text-gold transition-colors duration-300 font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="text-white hover:text-gold transition-colors duration-300 font-medium">
              About Us
            </Link>
          </div>

          {/* Right Side - Phone CTA */}
          <div className="hidden lg:flex items-center">
            {/* Phone Number */}
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="flex items-center space-x-2 text-gold hover:text-white transition-colors duration-300 bg-burgundy hover:bg-burgundy-light px-6 py-3 rounded-lg font-bold transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call Now: {BUSINESS_INFO.phone}</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-burgundy transition-colors duration-200"
          >
            <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>

    {/* Mobile Menu */}
    {isMobileMenuOpen && (
      <>
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={closeMenus}
        />
        <div className={`fixed top-0 right-0 w-72 h-full bg-burgundy-dark shadow-2xl z-50 lg:hidden transform transition-transform duration-300 ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          <div className="p-4">
            <button
              onClick={closeMenus}
              className="ml-auto block p-2 hover:bg-burgundy rounded-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="px-6 py-4 space-y-4">
            <Link href="/" className="block text-white hover:text-gold transition-colors duration-200 font-medium">
              Home
            </Link>
            
            <div className="space-y-2">
              <p className="text-sm font-semibold text-gold">Services</p>
              {SERVICES.primary.concat(SERVICES.additional).map((service) => (
                <Link 
                  key={service.id}
                  href={`/services/${service.id}`} 
                  className="block pl-4 text-white hover:text-gold transition-colors duration-200"
                >
                  {service.name}
                </Link>
              ))}
              <Link href="/services" className="block pl-4 text-gold font-semibold hover:text-white transition-colors duration-200">
                View All Services
              </Link>
            </div>

            <Link href="/locations" className="block text-white hover:text-gold transition-colors duration-200 font-medium">
              Locations
            </Link>
            <Link href="/portfolio" className="block text-white hover:text-gold transition-colors duration-200 font-medium">
              Portfolio
            </Link>
            <Link href="/about" className="block text-white hover:text-gold transition-colors duration-200 font-medium">
              About Us
            </Link>

            <div className="pt-6 space-y-4 border-t border-white/20">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 text-gold hover:text-white transition-colors duration-300"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span className="font-semibold">{BUSINESS_INFO.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </>
    )}
  </>
);
}