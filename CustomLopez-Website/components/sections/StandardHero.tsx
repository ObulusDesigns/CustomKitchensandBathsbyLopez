import Image from 'next/image';
import { BUSINESS_INFO } from '@/lib/constants';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';

interface StandardHeroProps {
  title: string;
  subtitle?: string;
  breadcrumbs?: {
    text: string;
    href: string;
  }[];
  backgroundImage?: string;
}

export default function StandardHero({ 
  title, 
  subtitle, 
  breadcrumbs,
  backgroundImage = '/images/gallery/IMG_0425.jpeg'
}: StandardHeroProps) {
  return (
    <>
      {/* Breadcrumb Schema */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <BreadcrumbSchema items={breadcrumbs} />
      )}
      
      <section className="relative h-[40vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Kitchen and bath remodeling background"
          fill
          className="object-cover"
          priority
          quality={85}
          sizes="100vw"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/70 to-black/60" />
        
        {/* Decorative Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C5A572' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom text-center">
        {/* Breadcrumbs */}
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="mb-6" aria-label="Breadcrumb">
            <ol className="flex items-center justify-center space-x-2 text-sm">
              <li>
                <a href="/" className="text-gray-300 hover:text-gold transition-colors duration-200">
                  Home
                </a>
              </li>
              {breadcrumbs.map((crumb, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <span className="text-gray-400">/</span>
                  {index === breadcrumbs.length - 1 ? (
                    <span className="text-white font-medium">{crumb.text}</span>
                  ) : (
                    <a href={crumb.href} className="text-gray-300 hover:text-gold transition-colors duration-200">
                      {crumb.text}
                    </a>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        {/* Title */}
        <h1 className="heading-1 text-white mb-4">
          {title}
        </h1>

        {/* Subtitle */}
        {subtitle && (
          <p className="body-large text-gray-200 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}

        {/* Trust Indicators */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-300">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <a href={`tel:${BUSINESS_INFO.phone}`} className="hover:text-gold transition-colors duration-200">
              {BUSINESS_INFO.phone}
            </a>
          </div>
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span>Serving All Monmouth County</span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}