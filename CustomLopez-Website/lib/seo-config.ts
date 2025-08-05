// SEO Configuration
// Centralized SEO settings and metadata

type ServiceKey = 
  | 'kitchen-remodeling'
  | 'bathroom-remodeling'
  | 'custom-cabinetry'
  | 'countertop-installation'
  | 'basement-finishing'
  | 'home-additions'
  | 'interior-remodeling'
  | 'tile-flooring';

export const SEO_CONFIG = {
  // Site-wide defaults
  siteName: 'Custom Kitchens & Baths by Lopez',
  siteUrl: 'https://customkitchensbylopez.co',
  defaultTitle: 'Custom Kitchens & Baths by Lopez | Luxury Kitchen & Bathroom Remodeling in Monmouth County NJ',
  titleTemplate: '%s | Custom Kitchens & Baths by Lopez',
  defaultDescription: 'Professional kitchen and bathroom remodeling services in Monmouth County, NJ. Custom cabinetry, luxury renovations, and expert craftsmanship. Serving Freehold, Colts Neck, Holmdel, and surrounding areas.',
  
  // Open Graph defaults
  ogImage: '/images/gallery/IMG_0428.jpeg',
  ogType: 'website',
  
  // Twitter/X Card
  twitterCard: 'summary_large_image',
  
  // Business info for structured data
  business: {
    name: 'Custom Kitchens & Baths by Lopez',
    legalName: 'Custom Kitchens & Baths by Lopez LLC',
    url: 'https://customkitchensbylopez.co',
    logo: 'https://customkitchensbylopez.co/images/logo/SHOP-LOPEZKITCHEN-PROOF-1.webp',
    foundingDate: '1973',
    founder: {
      name: 'Lopez Family',
      type: 'Person'
    },
    address: {
      streetAddress: '2 Claire Rd',
      addressLocality: 'East Brunswick',
      addressRegion: 'NJ',
      postalCode: '08816',
      addressCountry: 'US'
    },
    contact: {
      telephone: '+1-732-707-7777',
      email: 'john@njkitchensandbathsbylopez.com'
    },
    geo: {
      latitude: 40.4276,
      longitude: -74.4157
    },
    openingHours: [
      'Mo-Fr 08:00-18:00',
      'Sa 09:00-16:00',
      'Su Closed'
    ],
    priceRange: '$$$$',
    paymentAccepted: ['Cash', 'Credit Card', 'Check'],
    currenciesAccepted: 'USD',
    areaServed: [
      'Monmouth County',
      'Ocean County',
      'Middlesex County'
    ]
  },
  
  // Service-specific SEO data
  services: {
    'kitchen-remodeling': {
      title: 'Kitchen Remodeling',
      description: 'Transform your kitchen with custom cabinetry, granite countertops, and expert design.',
      keywords: ['kitchen remodeling', 'custom kitchens', 'kitchen renovation', 'granite countertops']
    },
    'bathroom-remodeling': {
      title: 'Bathroom Remodeling',
      description: 'Create your dream bathroom with luxury fixtures, custom vanities, and expert installation.',
      keywords: ['bathroom remodeling', 'bathroom renovation', 'custom bathrooms', 'luxury showers']
    },
    'custom-cabinetry': {
      title: 'Custom Cabinetry',
      description: 'Handcrafted custom cabinets designed to maximize space and complement your style.',
      keywords: ['custom cabinets', 'kitchen cabinets', 'bathroom vanities', 'built-in storage']
    },
    'countertop-installation': {
      title: 'Countertop Installation',
      description: 'Premium granite, quartz, and marble countertops professionally installed.',
      keywords: ['granite countertops', 'quartz countertops', 'marble countertops', 'countertop installation']
    },
    'basement-finishing': {
      title: 'Basement Finishing',
      description: 'Transform your basement into beautiful living space with expert finishing services.',
      keywords: ['basement finishing', 'basement remodeling', 'finished basements', 'basement renovation']
    },
    'home-additions': {
      title: 'Home Additions',
      description: 'Expand your living space with professionally designed and built home additions.',
      keywords: ['home additions', 'room additions', 'home expansion', 'second story additions']
    },
    'interior-remodeling': {
      title: 'Interior Remodeling',
      description: 'Complete interior remodeling services for every room in your home.',
      keywords: ['interior remodeling', 'home renovation', 'room remodeling', 'interior design']
    },
    'tile-flooring': {
      title: 'Tile & Flooring',
      description: 'Professional tile and flooring installation for kitchens, bathrooms, and beyond.',
      keywords: ['tile installation', 'flooring installation', 'ceramic tile', 'porcelain tile']
    }
  },
  
  // Location-specific SEO data
  primaryLocations: [
    'Freehold',
    'Colts Neck',
    'Holmdel',
    'Marlboro',
    'Manalapan',
    'Middletown',
    'Red Bank',
    'Rumson'
  ],
  
  // Monitoring and optimization settings
  monitoring: {
    // Pages that should have unique, non-duplicate titles
    uniqueTitlePages: [
      '/services/[service]/[location]',
      '/locations/[slug]',
      '/blog/[slug]',
      '/portfolio/[slug]'
    ],
    // Pages that must have H1 tags
    requiredH1Pages: [
      '/',
      '/services',
      '/about',
      '/portfolio',
      '/testimonials'
    ],
    // Minimum text-to-HTML ratio threshold
    minTextRatio: 0.25,
    // Target page load time (seconds)
    targetLoadTime: 3.0
  }
};

// Helper function to generate consistent page titles
export function generatePageTitle(pageName: string, location?: string): string {
  const baseTitle = SEO_CONFIG.services[pageName as ServiceKey]?.title || pageName;
  
  if (location) {
    return `${baseTitle} in ${location}, NJ | ${SEO_CONFIG.siteName}`;
  }
  
  return `${baseTitle} | ${SEO_CONFIG.siteName}`;
}

// Helper function to generate meta descriptions
export function generateMetaDescription(serviceName: string, location?: string): string {
  const baseDescription = SEO_CONFIG.services[serviceName as ServiceKey]?.description || 
    `Professional ${serviceName} services in Monmouth County, NJ.`;
  
  if (location) {
    return `${baseDescription} Serving ${location} and surrounding areas. Call ${SEO_CONFIG.business.contact.telephone.replace('+1-', '')} for a free consultation.`;
  }
  
  return `${baseDescription} ${SEO_CONFIG.defaultDescription}`;
}