import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Terms of Service | Custom Kitchens & Baths by Lopez',
  description: 'Terms of service for Custom Kitchens & Baths by Lopez. Read our terms and conditions for using our services.',
  robots: 'noindex, follow', // Terms pages typically shouldn't be indexed
};

const lastUpdated = 'January 1, 2024';

export default function TermsOfServicePage() {
  return (
    <PageLayout
      hero={{
        title: 'Terms of Service',
        subtitle: 'Terms and conditions for our remodeling services',
        breadcrumbs: [
          { text: 'Terms of Service', href: '/terms-of-service' }
        ],
      }}
      showCTA={false}
    >
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <p className="text-sm text-gray-600 mb-8">
              Last Updated: {lastUpdated}
            </p>

            <h2 className="heading-3 text-burgundy mb-4">1. Agreement to Terms</h2>
            <p className="text-gray-700 mb-6">
              These Terms of Service ("Terms") govern your use of the services provided by {BUSINESS_INFO.name} 
              ("Company," "we," "us," or "our"). By engaging our services or using our website, you agree 
              to be bound by these Terms. If you do not agree to these Terms, please do not use our services.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">2. Services</h2>
            <p className="text-gray-700 mb-4">
              We provide kitchen remodeling, bathroom remodeling, custom cabinetry, and related home 
              improvement services throughout Monmouth County, New Jersey. Our services include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Design consultation</li>
              <li>Project planning and management</li>
              <li>Material selection and procurement</li>
              <li>Professional installation</li>
              <li>Custom cabinetry fabrication</li>
              <li>Post-project support</li>
            </ul>

            <h2 className="heading-3 text-burgundy mb-4">3. Estimates and Pricing</h2>
            <p className="text-gray-700 mb-6">
              All estimates provided are valid for 30 days from the date of issue. Prices are subject 
              to change based on modifications to the project scope, material selections, or unforeseen 
              conditions discovered during work. Any changes to the original estimate will be 
              communicated and approved in writing before proceeding.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">4. Payment Terms</h2>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>A deposit of 30% is required to begin work</li>
              <li>Progress payments may be required for larger projects</li>
              <li>Final payment is due upon project completion</li>
              <li>We accept cash, check, and major credit cards</li>
              <li>Late payments may incur additional charges</li>
            </ul>

            <h2 className="heading-3 text-burgundy mb-4">5. Project Timeline</h2>
            <p className="text-gray-700 mb-6">
              Project timelines are estimates based on normal working conditions. Delays may occur due 
              to weather, material availability, permit approvals, or changes to project scope. We will 
              communicate any delays promptly and work to minimize disruption to your schedule.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">6. Client Responsibilities</h2>
            <p className="text-gray-700 mb-4">
              As our client, you agree to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Provide clear access to work areas</li>
              <li>Remove personal items from work areas</li>
              <li>Make timely decisions on materials and design choices</li>
              <li>Ensure prompt payment according to agreed terms</li>
              <li>Obtain necessary HOA approvals if applicable</li>
              <li>Provide accurate information about your property</li>
            </ul>

            <h2 className="heading-3 text-burgundy mb-4">7. Warranties</h2>
            <h3 className="text-xl font-semibold text-burgundy mb-3">Workmanship Warranty</h3>
            <p className="text-gray-700 mb-4">
              We warrant our workmanship for a period of one (1) year from project completion. This 
              warranty covers defects in installation but does not cover normal wear and tear, misuse, 
              or damage from external causes.
            </p>
            
            <h3 className="text-xl font-semibold text-burgundy mb-3">Material Warranties</h3>
            <p className="text-gray-700 mb-6">
              Materials are covered by their respective manufacturer warranties. We will assist in 
              warranty claims but are not responsible for manufacturer defects or warranty terms.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">8. Limitation of Liability</h2>
            <p className="text-gray-700 mb-6">
              Our liability is limited to the contract price of the services provided. We are not 
              liable for indirect, incidental, or consequential damages. We are not responsible for 
              delays or failures due to circumstances beyond our reasonable control.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">9. Change Orders</h2>
            <p className="text-gray-700 mb-6">
              Any changes to the original project scope must be documented in a written change order, 
              including description of changes, cost adjustments, and timeline impacts. Change orders 
              must be signed by both parties before work proceeds.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">10. Cancellation Policy</h2>
            <p className="text-gray-700 mb-6">
              Projects may be cancelled with written notice. Cancellation fees may apply based on work 
              completed and materials ordered. Custom materials that have been ordered or fabricated 
              are non-refundable.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">11. Permits and Compliance</h2>
            <p className="text-gray-700 mb-6">
              We will obtain necessary permits for work requiring them. All work will be performed in 
              compliance with local building codes and regulations. Additional costs for permit fees 
              will be communicated in the project estimate.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">12. Insurance</h2>
            <p className="text-gray-700 mb-6">
              We maintain general liability insurance and workers' compensation coverage. Certificates 
              of insurance are available upon request. Clients are responsible for maintaining their 
              own homeowner's insurance.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">13. Dispute Resolution</h2>
            <p className="text-gray-700 mb-6">
              Any disputes arising from these Terms or our services will first be addressed through 
              good faith negotiation. If resolution cannot be reached, disputes will be resolved 
              through binding arbitration in Monmouth County, New Jersey.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">14. Photography and Marketing</h2>
            <p className="text-gray-700 mb-6">
              We may request to photograph completed projects for our portfolio and marketing materials. 
              Client permission will be obtained before using any project photos. Clients may opt out 
              of this at any time.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">15. Governing Law</h2>
            <p className="text-gray-700 mb-6">
              These Terms are governed by the laws of the State of New Jersey. Any legal action must 
              be brought in the courts of Monmouth County, New Jersey.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">16. Entire Agreement</h2>
            <p className="text-gray-700 mb-6">
              These Terms, together with any written contracts and change orders, constitute the entire 
              agreement between you and {BUSINESS_INFO.name}. Any modifications must be made in writing 
              and signed by both parties.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">17. Contact Information</h2>
            <p className="text-gray-700 mb-4">
              For questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 rounded-lg p-6 text-gray-700">
              <p className="font-semibold mb-2">{BUSINESS_INFO.name}</p>
              <p>{BUSINESS_INFO.address.street}</p>
              <p>{BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}</p>
              <p className="mt-3">
                Phone: <a href={`tel:${BUSINESS_INFO.phone}`} className="text-burgundy hover:text-gold">
                  {BUSINESS_INFO.phone}
                </a>
              </p>
              <p>
                Email: <a href={`mailto:${BUSINESS_INFO.email}`} className="text-burgundy hover:text-gold">
                  {BUSINESS_INFO.email}
                </a>
              </p>
              <p className="mt-3">
                License: {BUSINESS_INFO.license}
              </p>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}