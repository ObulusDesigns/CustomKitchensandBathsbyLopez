import Image from 'next/image';
import Link from 'next/link';
import { BUSINESS_INFO, SERVICE_AREAS, SERVICES } from '@/lib/constants';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-burgundy-dark text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            rgba(197, 165, 114, 0.1) 10px,
            rgba(197, 165, 114, 0.1) 20px
          )`
        }}></div>
      </div>

      {/* Main Footer Content */}
      <div className="container-custom py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 - Company Info */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp"
                alt="Custom Kitchens & Baths by Lopez"
                width={140}
                height={140}
                className="object-contain"
                quality={100}
              />
            </Link>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Family-owned since 1973, serving Monmouth County with excellence.
            </p>
            
            {/* Google Reviews & Social Media */}
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <Image
                      src="/images/icons/Google__G__Logo-512.webp"
                      alt="Google"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                    <span className="ml-2 text-sm font-semibold">Google Reviews</span>
                  </div>
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
                <p className="text-xs text-white/70 mt-1">5.0 (127+ Reviews)</p>
              </div>

              {/* Social Media Icons */}
              <div className="flex gap-3">
                {BUSINESS_INFO.socialMedia.facebook && (
                  <a
                    href={BUSINESS_INFO.socialMedia.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-200"
                    aria-label="Facebook"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </a>
                )}
                {BUSINESS_INFO.socialMedia.instagram && (
                  <a
                    href={BUSINESS_INFO.socialMedia.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-200"
                    aria-label="Instagram"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                    </svg>
                  </a>
                )}
                {BUSINESS_INFO.socialMedia.linkedin && (
                  <a
                    href={BUSINESS_INFO.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-200"
                    aria-label="LinkedIn"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                )}
                <a
                  href={`https://www.yelp.com/biz/${BUSINESS_INFO.socialMedia.yelp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-gold hover:scale-110 transition-all duration-200"
                  aria-label="Yelp"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.67 14.12a1.89 1.89 0 01-1.9.07l-2.53-1.51a.46.46 0 00-.71.41v4.65a1.9 1.9 0 01-1.58 1.87l-2.58.43a.45.45 0 01-.53-.45V8.46a.46.46 0 00-.71-.38L8.09 9.41a1.91 1.91 0 01-2.78-1.69V4.64a1.91 1.91 0 012.09-1.9l8.82.88a1.91 1.91 0 011.72 1.9v7.45a1.9 1.9 0 01-.27 1.15zM7.3 11.42a.46.46 0 00-.44-.58l-2.85-.14A1.9 1.9 0 002 12.57l-.1 2.89a.45.45 0 00.52.47l2.55-.43a1.9 1.9 0 001.58-1.87v-1.74a.45.45 0 00-.25-.47zm10.59 1.8l-2.51.76a.46.46 0 00-.31.57l.85 2.8a1.9 1.9 0 01-1.3 2.35l-2.75.83a.45.45 0 00-.22.75l1.56 1.28a1.9 1.9 0 002.79-.42l3.42-5.72a1.91 1.91 0 00-.25-2.4 1.87 1.87 0 00-1.28-.8z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/services/kitchen-remodeling" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Kitchen Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/bathroom-remodeling" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Bathroom Remodeling
                </Link>
              </li>
              <li>
                <Link href="/services/custom-cabinetry" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Custom Cabinetry
                </Link>
              </li>
              <li>
                <Link href="/services/countertop-installation" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Countertop Installation
                </Link>
              </li>
              <li>
                <Link href="/services/tile-flooring" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Tile & Flooring
                </Link>
              </li>
              <li>
                <Link href="/services/home-additions" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Home Additions
                </Link>
              </li>
              <li>
                <Link href="/services/basement-finishing" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Basement Finishing
                </Link>
              </li>
              <li>
                <Link href="/services/interior-remodeling" className="hover:text-gold transition-colors duration-200 flex items-center text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2"></span>
                  Interior Remodeling
                </Link>
              </li>
            </ul>
            <Link href="/services" className="inline-flex items-center mt-3 text-gold hover:text-white transition-colors duration-200 text-sm font-semibold">
              View All Services
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Column 3 - Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Service Areas</h3>
            <p className="text-white/80 text-sm mb-3">Proudly Serving Monmouth County</p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-1 text-sm">
              <Link href="/locations/freehold" className="hover:text-gold transition-colors duration-200">
                Freehold
              </Link>
              <Link href="/locations/middletown" className="hover:text-gold transition-colors duration-200">
                Middletown
              </Link>
              <Link href="/locations/colts-neck" className="hover:text-gold transition-colors duration-200">
                Colts Neck
              </Link>
              <Link href="/locations/red-bank" className="hover:text-gold transition-colors duration-200">
                Red Bank
              </Link>
              <Link href="/locations/holmdel" className="hover:text-gold transition-colors duration-200">
                Holmdel
              </Link>
              <Link href="/locations/wall-township" className="hover:text-gold transition-colors duration-200">
                Wall Township
              </Link>
              <Link href="/locations/marlboro" className="hover:text-gold transition-colors duration-200">
                Marlboro
              </Link>
              <Link href="/locations/howell" className="hover:text-gold transition-colors duration-200">
                Howell
              </Link>
              <Link href="/locations/rumson" className="hover:text-gold transition-colors duration-200">
                Rumson
              </Link>
              <Link href="/locations/deal" className="hover:text-gold transition-colors duration-200">
                Deal
              </Link>
            </div>
            <Link href="/locations" className="inline-flex items-center mt-3 text-gold hover:text-white transition-colors duration-200 text-sm font-semibold">
              View All 20+ Cities
              <svg className="w-3 h-3 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

          {/* Column 4 - Contact Info & Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-gold">Contact Info</h3>
            
            <div className="space-y-3 mb-6">
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="flex items-center space-x-2 hover:text-gold transition-colors duration-200 group"
              >
                <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="font-bold">{BUSINESS_INFO.phone}</p>
                  <p className="text-xs text-white/70">Call or Text</p>
                </div>
              </a>
              
              <a
                href={`mailto:${BUSINESS_INFO.email}`}
                className="flex items-center space-x-2 hover:text-gold transition-colors duration-200 group text-sm"
              >
                <svg className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span className="break-all">{BUSINESS_INFO.email}</span>
              </a>
              
              <div className="flex items-start space-x-2 text-sm">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span className="text-white/80">Monmouth County, NJ</span>
              </div>

              <div className="flex items-start space-x-2 text-sm">
                <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-white/80">
                  <p>Mon-Fri: 8:00 AM - 6:00 PM</p>
                  <p>Saturday: 9:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
            <ul className="space-y-1">
              <li>
                <Link href="/about" className="hover:text-gold transition-colors duration-200 text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 inline-block"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-gold transition-colors duration-200 text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 inline-block"></span>
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="hover:text-gold transition-colors duration-200 text-sm">
                  <span className="w-1 h-1 bg-gold rounded-full mr-2 inline-block"></span>
                  Customer Reviews
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-white/20 mt-8 pt-6">
          <h4 className="text-base font-semibold mb-3">Accepted Payment Methods</h4>
          <div className="flex flex-wrap items-center gap-4">
            <p className="text-sm text-white/70">Cash • Check • Financing Available</p>
            <div className="flex items-center gap-3">
              <Image
                src="/images/payment-icons/Free-Credit-Card-Logo-(93)-1920w.png"
                alt="Visa"
                width={40}
                height={25}
                className="object-contain"
              />
              <Image
                src="/images/payment-icons/Free-Credit-Card-Logo-(32)+(1)-1920w.png"
                alt="Mastercard"
                width={40}
                height={25}
                className="object-contain"
              />
              <Image
                src="/images/payment-icons/Free-Credit-Card-Logo-(56)-1920w.png"
                alt="American Express"
                width={40}
                height={25}
                className="object-contain"
              />
              <Image
                src="/images/payment-icons/Free-Credit-Card-Logo-(8)-1920w.png"
                alt="Discover"
                width={40}
                height={25}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-burgundy border-t border-white/20">
        <div className="container-custom py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2 text-xs">
            <p className="text-white/70">
              © {currentYear} {BUSINESS_INFO.name}. All Rights Reserved. | License #13VH04175700
            </p>
            <div className="flex items-center gap-4">
              <Link href="/privacy-policy" className="text-white/70 hover:text-gold transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/70 hover:text-gold transition-colors duration-200">
                Terms
              </Link>
              <Link href="/sitemap" className="text-white/70 hover:text-gold transition-colors duration-200">
                Sitemap
              </Link>
              <span className="text-white/50">|</span>
              <a
                href="https://obulusdesigns.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:text-white transition-colors duration-200"
              >
                Website by OBULUS
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}