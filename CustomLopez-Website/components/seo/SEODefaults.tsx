// SEO Defaults Component
// This component ensures all pages have proper SEO metadata

export interface SEODefaultsProps {
  title?: string;
  description?: string;
  h1?: string;
}

export function generateSEODefaults(props: SEODefaultsProps) {
  const defaults = {
    title: props.title || 'Custom Kitchens & Baths by Lopez | Monmouth County NJ',
    description: props.description || 'Professional kitchen and bathroom remodeling services in Monmouth County, NJ. Expert craftsmanship, custom designs, and quality materials.',
    h1: props.h1 || props.title || 'Custom Kitchens & Baths by Lopez'
  };

  return defaults;
}

// Common page titles for consistency
export const SEO_TITLES = {
  home: 'Custom Kitchens & Baths by Lopez | Luxury Kitchen & Bathroom Remodeling in Monmouth County NJ',
  services: 'Our Remodeling Services | Kitchen & Bath Experts in Monmouth County',
  locations: 'Service Areas | We Serve All of Monmouth County NJ',
  portfolio: 'Kitchen & Bath Portfolio | Our Work in Monmouth County',
  testimonials: 'Customer Reviews & Testimonials | 5-Star Rated Remodeling',
  blog: 'Remodeling Tips & Insights | Kitchen & Bath Blog',
  about: 'About Us | Family-Owned Since 1973 | Monmouth County Remodelers',
  privacy: 'Privacy Policy | Custom Kitchens & Baths by Lopez',
  terms: 'Terms of Service | Custom Kitchens & Baths by Lopez',
} as const;

// Service-specific title patterns
export function generateServiceTitle(serviceName: string, location?: string): string {
  if (location) {
    return `${serviceName} in ${location} | Custom Kitchens & Baths by Lopez`;
  }
  return `${serviceName} Services in Monmouth County | Expert Remodeling`;
}

// Location-specific title patterns
export function generateLocationTitle(locationName: string, service?: string): string {
  if (service) {
    return `${service} in ${locationName} | Custom Kitchens & Baths by Lopez`;
  }
  return `Remodeling Services in ${locationName} | Kitchen & Bath Experts`;
}