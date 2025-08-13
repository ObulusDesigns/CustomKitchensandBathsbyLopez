import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

interface GradientCTAProps {
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
  variant?: 'burgundy' | 'gold' | 'dark';
}

export default function GradientCTA({
  title,
  description,
  primaryButtonText = 'Get Free Quote',
  primaryButtonLink = 'https://ocyrus.app.n8n.cloud/form/0dcd36c0-d370-4baa-9b73-3c9cf97b5be5',
  secondaryButtonText,
  secondaryButtonLink,
  variant = 'burgundy'
}: GradientCTAProps) {
  const gradients = {
    burgundy: 'bg-gradient-to-br from-burgundy via-burgundy-dark to-burgundy-900',
    gold: 'bg-gradient-to-br from-gold via-gold-dark to-gold-800',
    dark: 'bg-gradient-to-br from-gray-900 via-gray-800 to-black'
  };

  return (
    <section className={`relative py-20 ${gradients[variant]} overflow-hidden`}>
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl animate-float-delayed"></div>
      </div>
      
      <div className="relative z-10 container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            {title}
          </h2>
          <p className="text-xl text-gray-200 mb-10">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {primaryButtonLink?.startsWith('tel:') ? (
              <a
                href={primaryButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-bold rounded-lg hover:bg-gold-light transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {primaryButtonText}
              </a>
            ) : (
              <Link
                href={primaryButtonLink}
                className="inline-flex items-center justify-center px-8 py-4 bg-gold text-white font-bold rounded-lg hover:bg-gold-light transform hover:-translate-y-0.5 transition-all duration-300 shadow-lg hover:shadow-2xl"
              >
                {primaryButtonText}
              </Link>
            )}
            
            {secondaryButtonText && secondaryButtonLink && (
              secondaryButtonLink.startsWith('tel:') ? (
                <a
                  href={secondaryButtonLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-300 border-2 border-white/30"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {secondaryButtonText}
                </a>
              ) : (
                <Link
                  href={secondaryButtonLink}
                  className="inline-flex items-center justify-center px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-lg hover:bg-white/20 transform hover:-translate-y-0.5 transition-all duration-300 border-2 border-white/30"
                >
                  {secondaryButtonText}
                </Link>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}