import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Kitchen & Bath Remodeling Blog | Expert Tips & Ideas | Monmouth County NJ',
  description: 'Get expert kitchen and bathroom remodeling tips, design ideas, and home improvement advice from Custom Kitchens & Baths by Lopez. Serving Monmouth County, NJ.',
  keywords: 'kitchen remodeling blog, bathroom renovation tips, home improvement ideas, remodeling advice, Monmouth County NJ',
  openGraph: {
    title: 'Remodeling Blog | Custom Kitchens & Baths by Lopez',
    description: 'Expert tips and insights on kitchen and bathroom remodeling in Monmouth County, NJ.',
    images: ['/images/gallery/IMG_0428.jpeg'],
  },
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}