import Link from 'next/link';
import { BUSINESS_INFO } from '@/lib/constants';

interface ServiceCTAProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export default function ServiceCTA({
  title = "Ready to Start Your Project?",
  description = "Let's discuss your project and create something beautiful together. Schedule your free consultation today.",
  primaryButtonText = "Schedule Free Consultation",
  primaryButtonLink = "/contact",
  secondaryButtonText = `Call ${BUSINESS_INFO.phone}`,
  secondaryButtonLink = `tel:${BUSINESS_INFO.phone}`,
}: ServiceCTAProps) {
  return (
    <section className="section-padding bg-burgundy text-white">
      <div className="container-custom text-center">
        <h2 className="heading-2 mb-6">
          {title}
        </h2>
        <p className="body-large mb-8 max-w-3xl mx-auto">
          {description}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href={primaryButtonLink} className="btn-secondary">
            {primaryButtonText}
          </Link>
          <a href={secondaryButtonLink} className="btn-secondary">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
            </svg>
            {secondaryButtonText}
          </a>
        </div>
      </div>
    </section>
  );
}