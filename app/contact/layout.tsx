import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us | Kitchen & Bath Remodeling in Monmouth County NJ',
  description: 'Contact Custom Kitchens & Baths by Lopez for a free consultation. Serving all of Monmouth County, NJ. Call (732) 984-1043 or fill out our contact form.',
  keywords: 'contact us, kitchen remodeling consultation, bathroom renovation quote, Monmouth County contractors',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}