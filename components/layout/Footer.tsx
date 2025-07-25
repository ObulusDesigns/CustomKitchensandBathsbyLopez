'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Popular service-location combinations
  const popularServiceLocations = [
    { service: 'Kitchen Remodeling', location: 'Freehold' },
    { service: 'Bathroom Renovation', location: 'Colts Neck' },
    { service: 'Custom Cabinetry', location: 'Holmdel' },
    { service: 'Kitchen Remodeling', location: 'Marlboro' },
    { service: 'Bathroom Remodeling', location: 'Middletown' },
    { service: 'Kitchen Renovation', location: 'Red Bank' },
  ];

  return (
    <footer className="bg-burgundy-dark text-white">
      {/* Logo and Company Info Section */}
      <div className="container-custom pt-16 pb-8">
        <div className="flex flex-col items-center mb-12">
          <Link href="/" className="inline-block mb-4">
            <div className="relative w-40 h-40">
              <Image
                src="/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp"
                alt="Custom Kitchens & Baths by Lopez"
                width={160}
                height={160}
                className="object-contain"
                quality={100}
              />
            </div>
          </Link>
          <p className="text-gray-300 text-center max-w-2xl">
            Your trusted kitchen and bathroom remodeling professionals serving Monmouth County and surrounding areas. 
            Licensed, bonded, and insured since {BUSINESS_INFO.yearEstablished}.
          </p>
          
          {/* Google Review Button */}
          <a
            href="https://www.google.com/search?q=Custom+Kitchens+%26+Baths+by+Lopez+Monmouth+County+NJ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 mt-6 bg-gold text-burgundy-dark px-6 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
            </svg>
            <span>Leave a Google Review</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>

        {/* Main Footer Content - 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 mb-12">
          {/* Services Column */}
          <div>
            <h3 className="text-xl font-semibold text-gold mb-6">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services/kitchen-remodeling" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-remodeling" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/custom-cabinetry" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Custom Cabinetry
                </Link>
              </li>
              <li>
                <Link href="/services/countertop-installation" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Countertop Installation
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gold font-semibold hover:text-white transition-colors duration-200">
                  View All Services →
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas Column */}
          <div>
            <h3 className="text-xl font-semibold text-gold mb-6">Service Areas</h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-2">
              <div>
                <p className="text-sm font-semibold text-gray-100 mb-2">Monmouth County</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/locations/freehold" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Freehold
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/colts-neck" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Colts Neck
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/holmdel" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Holmdel
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/marlboro" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Marlboro
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-100 mb-2">&nbsp;</p>
                <ul className="space-y-1">
                  <li>
                    <Link href="/locations/middletown" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Middletown
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/red-bank" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Red Bank
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/wall-township" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Wall Township
                    </Link>
                  </li>
                  <li>
                    <Link href="/locations/howell" className="text-gray-300 hover:text-gold transition-colors duration-200 text-sm">
                      Howell
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <Link href="/locations" className="inline-block mt-4 text-gold font-semibold hover:text-white transition-colors duration-200">
              View All 20+ Cities →
            </Link>
          </div>

          {/* Contact Column */}
          <div>
            <h3 className="text-xl font-semibold text-gold mb-6">Contact</h3>
            <div className="space-y-4">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <span>{BUSINESS_INFO.phone}</span>
              </a>
              
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-3 text-gray-300 hover:text-gold transition-colors duration-200"
              >
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>{BUSINESS_INFO.email}</span>
              </a>

              <div className="flex items-start space-x-3">
                <svg className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-gray-300">Monmouth County, NJ</span>
              </div>

              <div className="flex items-center space-x-3">
                <svg className="w-5 h-5 text-gold flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-300">Mon-Sat: 8AM-6PM</span>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-sm font-semibold text-gold mb-3">Connect With Us</p>
              <div className="flex space-x-4">
                {BUSINESS_INFO.socialMedia.facebook && (
                  <a
                    href={BUSINESS_INFO.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {BUSINESS_INFO.socialMedia.instagram && (
                  <a
                    href={BUSINESS_INFO.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                )}
                {BUSINESS_INFO.socialMedia.linkedin && (
                  <a
                    href={BUSINESS_INFO.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-gold transition-colors duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Popular Services by Location */}
        <div className="border-t border-white/20 pt-8">
          <h3 className="text-lg font-semibold text-gold mb-6">Popular Services by Location</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {popularServiceLocations.map((item, index) => (
              <Link
                key={index}
                href={`/services/${item.service.toLowerCase().replace(/\s+/g, '-')}/${item.location.toLowerCase().replace(/\s+/g, '-')}`}
                className="text-sm text-gray-300 hover:text-gold transition-colors duration-200"
              >
                {item.service} {item.location}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black/30 py-6">
        <div className="container-custom">
          {/* License and State Certified Badges */}
          <div className="flex justify-center items-center space-x-6 mb-4">
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 002.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>{BUSINESS_INFO.license}</span>
            </div>
            <span className="text-gray-600">•</span>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-gold" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>State Certified</span>
            </div>
          </div>
          
          {/* Copyright, Links, and OBULUS on same line */}
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0 text-sm">
            <p className="text-gray-400 text-center lg:text-left">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved. •{' '}
              <span className="text-xs">
                Website designed by{' '}
                <a
                  href="https://obulusdesigns.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:text-white transition-colors duration-200 font-medium"
                >
                  OBULUS DESIGNS
                </a>
              </span>
            </p>
            
            <div className="flex items-center space-x-4 text-sm">
              <Link href="/privacy-policy" className="text-gray-400 hover:text-gold transition-colors duration-200">
                Privacy Policy
              </Link>
              <span className="text-gray-600">|</span>
              <Link href="/terms-of-service" className="text-gray-400 hover:text-gold transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}