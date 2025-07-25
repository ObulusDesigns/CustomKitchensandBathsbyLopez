import StandardHero from '@/components/sections/StandardHero';
import CTA from '@/components/sections/CTA';

interface PageLayoutProps {
  children: React.ReactNode;
  hero: {
    title: string;
    subtitle?: string;
    breadcrumbs?: {
      text: string;
      href: string;
    }[];
    backgroundImage?: string;
  };
  showCTA?: boolean;
}

export default function PageLayout({ 
  children, 
  hero,
  showCTA = true 
}: PageLayoutProps) {
  return (
    <>
      {/* Standard Hero Section for Interior Pages */}
      <StandardHero {...hero} />
      
      {/* Main Content Area */}
      <main>
        {children}
      </main>
      
      {/* CTA Section - shown on most pages */}
      {showCTA && <CTA />}
    </>
  );
}