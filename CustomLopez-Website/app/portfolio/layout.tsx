import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen & Bath Remodeling Portfolio | Our Work in Monmouth County NJ',
  description: 'Browse our portfolio of completed kitchen and bathroom remodeling projects throughout Monmouth County. See our craftsmanship and design expertise in action.',
  keywords: 'remodeling portfolio, kitchen gallery, bathroom gallery, before and after, Monmouth County projects',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}