import { Metadata } from 'next';
import PageLayout from '@/components/layout/PageLayout';
import { BUSINESS_INFO } from '@/lib/constants';

export const metadata: Metadata = {
  title: 'Privacy Policy | Custom Kitchens & Baths by Lopez',
  description: 'Privacy policy for Custom Kitchens & Baths by Lopez. Learn how we collect, use, and protect your personal information.',
  robots: 'noindex, follow', // Privacy policies typically shouldn't be indexed
};

const lastUpdated = 'January 1, 2024';

export default function PrivacyPolicyPage() {
  return (
    <PageLayout
      hero={{
        title: 'Privacy Policy',
        subtitle: 'How we protect and handle your personal information',
        breadcrumbs: [
          { text: 'Privacy Policy', href: '/privacy-policy' }
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

            <h2 className="heading-3 text-burgundy mb-4">1. Introduction</h2>
            <p className="text-gray-700 mb-6">
              {BUSINESS_INFO.name} ("we," "our," or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
              when you visit our website or use our services. Please read this privacy policy carefully. 
              If you do not agree with the terms of this privacy policy, please do not access the site.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">2. Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-burgundy mb-3">Personal Information</h3>
            <p className="text-gray-700 mb-4">
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Fill out our contact form</li>
              <li>Request a consultation or quote</li>
              <li>Subscribe to our newsletter</li>
              <li>Call or email us directly</li>
              <li>Interact with us on social media</li>
            </ul>
            <p className="text-gray-700 mb-6">
              This information may include:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Address</li>
              <li>Information about your remodeling project</li>
            </ul>

            <h3 className="text-xl font-semibold text-burgundy mb-3">Automatically Collected Information</h3>
            <p className="text-gray-700 mb-6">
              When you visit our website, we may automatically collect certain information about your 
              device, including information about your web browser, IP address, time zone, and some of 
              the cookies that are installed on your device.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">3. How We Use Your Information</h2>
            <p className="text-gray-700 mb-4">
              We use the information we collect in the following ways:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>To respond to your inquiries and provide customer service</li>
              <li>To send you information about your project or consultation</li>
              <li>To process and complete your service requests</li>
              <li>To send periodic emails regarding your order or other products and services</li>
              <li>To improve our website and services</li>
              <li>To comply with legal obligations</li>
            </ul>

            <h2 className="heading-3 text-burgundy mb-4">4. Information Sharing and Disclosure</h2>
            <p className="text-gray-700 mb-6">
              We do not sell, trade, or otherwise transfer your personal information to third parties 
              without your consent, except in the following circumstances:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>To trusted third parties who assist us in operating our website and conducting our business</li>
              <li>To comply with legal obligations or respond to lawful requests</li>
              <li>To protect our rights, property, or safety, or that of others</li>
              <li>In connection with a business transaction, such as a merger or sale of assets</li>
            </ul>

            <h2 className="heading-3 text-burgundy mb-4">5. Data Security</h2>
            <p className="text-gray-700 mb-6">
              We implement appropriate technical and organizational security measures to protect your 
              personal information against accidental or unlawful destruction, loss, alteration, 
              unauthorized disclosure, or access. However, please note that no method of transmission 
              over the Internet or electronic storage is 100% secure.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">6. Cookies</h2>
            <p className="text-gray-700 mb-6">
              Our website may use "cookies" to enhance user experience. You can choose to set your web 
              browser to refuse cookies or to alert you when cookies are being sent. If you do so, 
              note that some parts of the site may not function properly.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">7. Third-Party Services</h2>
            <p className="text-gray-700 mb-6">
              Our website may contain links to third-party websites or services that are not owned or 
              controlled by us. We have no control over and assume no responsibility for the content, 
              privacy policies, or practices of any third-party websites or services.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">8. Your Rights</h2>
            <p className="text-gray-700 mb-4">
              You have the right to:
            </p>
            <ul className="list-disc pl-6 mb-6 text-gray-700 space-y-2">
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to our use of your personal information</li>
              <li>Opt-out of marketing communications</li>
            </ul>

            <h2 className="heading-3 text-burgundy mb-4">9. Children's Privacy</h2>
            <p className="text-gray-700 mb-6">
              Our services are not intended for individuals under the age of 18. We do not knowingly 
              collect personal information from children under 18. If we become aware that we have 
              collected personal information from a child under 18, we will take steps to delete that 
              information.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">10. Changes to This Privacy Policy</h2>
            <p className="text-gray-700 mb-6">
              We may update our Privacy Policy from time to time. We will notify you of any changes by 
              posting the new Privacy Policy on this page and updating the "Last Updated" date at the 
              top of this policy.
            </p>

            <h2 className="heading-3 text-burgundy mb-4">11. Contact Us</h2>
            <p className="text-gray-700 mb-4">
              If you have any questions about this Privacy Policy, please contact us:
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
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  );
}