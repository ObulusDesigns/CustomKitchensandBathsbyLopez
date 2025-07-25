// Business Constants for Custom Kitchens & Baths by Lopez

export const BUSINESS_INFO = {
  name: 'Custom Kitchens & Baths by Lopez',
  owner: 'Enrique Lopez',
  phone: '(732) 984-1043',
  email: 'info@customkitchensbylopez.co',
  address: {
    street: 'Serving All of Monmouth County',
    city: 'Freehold',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    zip: '07728',
    country: 'US'
  },
  hours: [
    { day: 'Monday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Tuesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Wednesday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Thursday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Friday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Saturday', open: '8:00 AM', close: '6:00 PM' },
    { day: 'Sunday', open: 'Closed', close: 'Closed' }
  ],
  socialMedia: {
    facebook: 'https://facebook.com/customkitchensbylopez',
    instagram: 'https://instagram.com/customkitchensbylopez',
    youtube: 'https://youtube.com/@customkitchensbylopez',
    linkedin: 'https://linkedin.com/company/customkitchensbylopez',
    houzz: 'https://houzz.com/pro/customkitchensbylopez',
  },
  license: 'NJ License #13VH10806200',
  insurance: 'Fully Licensed & Insured',
  yearEstablished: 2005,
  serviceRadius: 50, // miles
  website: 'https://customkitchensbylopez.co'
};

// Primary service areas in Monmouth County
export const SERVICE_AREAS = {
  primary: [
    'Freehold',
    'Manalapan',
    'Marlboro',
    'Colts Neck',
    'Holmdel',
    'Middletown',
    'Red Bank',
    'Rumson',
    'Fair Haven',
    'Little Silver',
    'Shrewsbury',
    'Tinton Falls',
    'Eatontown',
    'Long Branch',
    'Ocean Township',
    'Wall Township',
    'Howell',
    'Jackson',
    'Millstone',
    'Upper Freehold',
  ],
  counties: [
    'Monmouth County',
    'Ocean County',
    'Middlesex County',
  ],
  state: 'New Jersey'
};

// Services offered
export const SERVICES = {
  primary: [
    {
      id: 'kitchen-remodeling',
      name: 'Kitchen Remodeling',
      description: 'Complete kitchen renovations from design to installation',
      features: [
        'Custom Cabinetry',
        'Granite & Quartz Countertops',
        'Kitchen Islands',
        'Backsplash Installation',
        'Lighting Design',
        'Appliance Installation'
      ]
    },
    {
      id: 'bathroom-remodeling',
      name: 'Bathroom Remodeling',
      description: 'Luxury bathroom transformations for any space',
      features: [
        'Walk-in Showers',
        'Soaking Tubs',
        'Custom Vanities',
        'Tile Installation',
        'Heated Floors',
        'Modern Fixtures'
      ]
    },
    {
      id: 'custom-cabinetry',
      name: 'Custom Cabinetry',
      description: 'Handcrafted cabinets designed to your specifications',
      features: [
        'Kitchen Cabinets',
        'Bathroom Vanities',
        'Built-in Storage',
        'Entertainment Centers',
        'Home Office Solutions',
        'Closet Systems'
      ]
    }
  ],
  additional: [
    {
      id: 'countertop-installation',
      name: 'Countertop Installation',
      description: 'Premium countertop solutions with granite, quartz, and marble options',
      features: [
        'Granite Countertops',
        'Quartz Surfaces',
        'Marble Installation',
        'Edge Treatments',
        'Backsplash Integration',
        'Sink Cutouts'
      ]
    },
    {
      id: 'tile-flooring',
      name: 'Tile & Flooring',
      description: 'Expert tile and flooring installation for lasting beauty',
      features: [
        'Ceramic Tile',
        'Porcelain Tile',
        'Natural Stone',
        'Hardwood Flooring',
        'Luxury Vinyl',
        'Pattern Design'
      ]
    },
    {
      id: 'home-additions',
      name: 'Home Additions',
      description: 'Expand your living space with seamless home additions',
      features: [
        'Room Additions',
        'Second Story Additions',
        'Sunrooms',
        'In-Law Suites',
        'Garage Conversions',
        'Structural Planning'
      ]
    },
    {
      id: 'basement-finishing',
      name: 'Basement Finishing',
      description: 'Transform your basement into valuable living space',
      features: [
        'Family Rooms',
        'Home Theaters',
        'Game Rooms',
        'Home Offices',
        'Guest Suites',
        'Wet Bars'
      ]
    },
    {
      id: 'interior-remodeling',
      name: 'Interior Remodeling',
      description: 'Complete interior renovations to modernize your home',
      features: [
        'Living Room Updates',
        'Bedroom Renovations',
        'Dining Room Refresh',
        'Open Floor Plans',
        'Crown Molding',
        'Custom Built-ins'
      ]
    }
  ]
};

// SEO Keywords for targeting
export const SEO_KEYWORDS = {
  primary: [
    'kitchen remodeling monmouth county',
    'bathroom renovation monmouth county nj',
    'custom kitchens near me',
    'kitchen contractor freehold nj',
    'bathroom remodeler colts neck',
    'luxury kitchen renovation nj'
  ],
  local: SERVICE_AREAS.primary.map(town => [
    `kitchen remodeling ${town} nj`,
    `bathroom renovation ${town}`,
    `remodeling contractor ${town}`
  ]).flat(),
  services: [
    'custom kitchen cabinets',
    'granite countertop installation',
    'bathroom vanity installation',
    'kitchen island design',
    'tile backsplash installation'
  ]
};

// Trust signals and credentials
export const TRUST_SIGNALS = {
  certifications: [
    {
      name: 'BBB Accredited Business',
      logo: '/images/icons/217450.webp',
      alt: 'Better Business Bureau Accredited'
    },
    {
      name: 'NARI Member',
      logo: '/images/icons/NARI-Logo-797x800-1.webp',
      alt: 'National Association of the Remodeling Industry Member'
    },
    {
      name: 'Google Reviews',
      logo: '/images/icons/Google__G__Logo-512.webp',
      alt: 'Google 5-Star Reviews'
    },
    {
      name: 'Angi Super Service Award',
      logo: '/images/logo/Angi_Wordmark_1C_Heart_RGB.svg.png',
      alt: 'Angi Super Service Award Winner'
    },
    {
      name: 'Best of Houzz',
      logo: '/images/logo/houzz-logo-houzz-logo-design-BaUwJWMm_t.jpg',
      alt: 'Best of Houzz Award Winner'
    },
  ],
  awards: [
    'Best of Houzz 2023',
    'Angi Super Service Award',
  ],
  stats: {
    yearsInBusiness: new Date().getFullYear() - BUSINESS_INFO.yearEstablished,
    projectsCompleted: '500+',
    satisfactionRate: '98%',
    averageRating: 4.9,
    totalReviews: 127
  }
};