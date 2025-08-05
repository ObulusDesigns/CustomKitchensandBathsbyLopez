export interface PortfolioProject {
  id: string;
  slug: string;
  category: 'kitchen' | 'bathroom' | 'custom-cabinetry' | 'home-addition' | 'basement';
  title: string;
  location: string;
  description: string;
  longDescription: string;
  completionDate: string;
  duration: string;
  images: {
    src: string;
    alt: string;
    caption?: string;
  }[];
  beforeImages?: {
    src: string;
    alt: string;
  }[];
  features: string[];
  materials: {
    category: string;
    items: string[];
  }[];
  testimonial: {
    text: string;
    author: string;
    rating: number;
  };
  projectValue?: string;
  challenges?: string[];
  solutions?: string[];
  metaDescription: string;
  keywords: string[];
}

export const portfolioProjects: PortfolioProject[] = [
  {
    id: '1',
    slug: 'modern-kitchen-colts-neck',
    category: 'kitchen',
    title: 'Modern Kitchen Transformation in Colts Neck',
    location: 'Colts Neck, NJ',
    description: 'Complete kitchen transformation featuring white shaker cabinets, quartz countertops, and a custom island.',
    longDescription: `This stunning kitchen renovation in Colts Neck transformed a dated 1990s kitchen into a bright, modern space perfect for both cooking and entertaining. The homeowners wanted to open up their kitchen to the family room while maintaining distinct zones for cooking, prep work, and casual dining.

    We removed a load-bearing wall to create an open concept layout, installing a structural beam that was seamlessly integrated into the ceiling design. The new layout features a large center island with waterfall quartz edges, providing ample prep space and seating for four.

    Custom white shaker cabinets extend to the ceiling, maximizing storage while maintaining clean lines. Soft-close drawers and doors, pull-out organizers, and a custom pantry system ensure everything has its place. The backsplash features large-format porcelain tiles that mimic Calacatta marble, creating a luxurious look that's easy to maintain.`,
    completionDate: 'March 2024',
    duration: '8 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_4149.jpeg', 
        alt: 'Modern white kitchen with large island',
        caption: 'The centerpiece island features waterfall quartz edges and comfortable bar seating'
      },
      { 
        src: '/images/gallery/IMG_5705.jpeg', 
        alt: 'Kitchen island with pendant lighting',
        caption: 'Three oversized pendant lights provide task lighting and visual interest'
      },
      { 
        src: '/images/gallery/IMG_6661.jpeg', 
        alt: 'Kitchen cabinet detail and hardware',
        caption: 'Soft-close cabinets with brushed gold hardware add a touch of warmth'
      },
      {
        src: '/images/gallery/IMG_0028.jpeg',
        alt: 'Professional range and custom hood',
        caption: 'The 48-inch professional range is complemented by a custom wood hood'
      }
    ],
    beforeImages: [
      {
        src: '/images/gallery/IMG_0426.jpeg',
        alt: 'Kitchen before renovation'
      }
    ],
    features: [
      'Custom White Shaker Cabinets',
      'Waterfall Quartz Island',
      'Professional 48" Range',
      'Built-in Refrigerator',
      'Pot Filler',
      'Under-Cabinet Lighting',
      'Soft-Close Everything',
      'Custom Pantry System'
    ],
    materials: [
      {
        category: 'Cabinetry',
        items: ['Custom white shaker doors', 'Maple wood construction', 'Soft-close Blum hardware']
      },
      {
        category: 'Countertops',
        items: ['Caesarstone Calacatta Nuvo quartz', '3cm thickness with mitered edges']
      },
      {
        category: 'Backsplash',
        items: ['24x48 porcelain tile', 'Calacatta marble look', 'Minimal grout lines']
      },
      {
        category: 'Flooring',
        items: ['Wide plank white oak', 'Natural matte finish', 'Water-resistant coating']
      }
    ],
    testimonial: {
      text: 'Lopez and his team transformed our outdated kitchen into a stunning modern space. Their attention to detail was exceptional, and they completed the project on time and within budget. We couldn\'t be happier!',
      author: 'Sarah & Tom Richardson',
      rating: 5
    },
    projectValue: '$75,000-$100,000',
    challenges: [
      'Removing load-bearing wall',
      'Integrating modern appliances with traditional home',
      'Maintaining traffic flow to adjacent rooms'
    ],
    solutions: [
      'Engineered beam hidden in ceiling',
      'Custom cabinet panels for seamless look',
      'Strategic island placement for optimal flow'
    ],
    metaDescription: 'See how we transformed this Colts Neck kitchen with custom white cabinets, quartz countertops, and modern appliances. View photos and project details.',
    keywords: ['Colts Neck kitchen remodel', 'modern kitchen design', 'white kitchen cabinets', 'kitchen island ideas']
  },
  {
    id: '2',
    slug: 'luxury-master-bath-rumson',
    category: 'bathroom',
    title: 'Luxury Master Bath Retreat in Rumson',
    location: 'Rumson, NJ',
    description: 'Spa-inspired bathroom with freestanding tub, walk-in shower, and custom double vanity.',
    longDescription: `This master bathroom renovation in prestigious Rumson transformed a cramped, outdated space into a luxurious spa retreat. The homeowners desired a serene, hotel-like atmosphere with separate zones for relaxation and daily routines.

    We reconfigured the layout to maximize space and natural light, adding a large skylight above the freestanding tub. The walk-in shower features a curbless entry, linear drain, and stunning floor-to-ceiling marble tile. Custom his-and-hers vanities provide personalized storage solutions while maintaining visual symmetry.

    High-end fixtures in brushed gold complement the warm gray and white color palette. Heated floors, a towel warming drawer, and smart mirror technology add modern conveniences that enhance the spa experience. Every detail was carefully considered to create a cohesive, luxurious environment.`,
    completionDate: 'January 2024',
    duration: '10 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_0427.jpeg', 
        alt: 'Luxury bathroom with freestanding tub',
        caption: 'The sculptural freestanding tub sits beneath a custom skylight'
      },
      { 
        src: '/images/gallery/IMG_0428.jpeg', 
        alt: 'Walk-in shower with marble tile',
        caption: 'Curbless shower entry with book-matched marble feature wall'
      },
      { 
        src: '/images/gallery/IMG_0429.jpeg', 
        alt: 'Custom double vanity with mirrors',
        caption: 'His-and-hers vanities with ample storage and smart mirrors'
      },
      {
        src: '/images/gallery/IMG_0430.jpeg',
        alt: 'Bathroom details and fixtures',
        caption: 'Brushed gold fixtures add warmth to the neutral palette'
      }
    ],
    features: [
      'Freestanding Soaking Tub',
      'Curbless Walk-in Shower',
      'Heated Marble Floors',
      'Custom Double Vanity',
      'Smart Mirror Technology',
      'Towel Warming Drawer',
      'Skylight Above Tub',
      'Built-in Shower Bench'
    ],
    materials: [
      {
        category: 'Tile',
        items: ['Calacatta gold marble', 'Large format porcelain', 'Mosaic accent tiles']
      },
      {
        category: 'Vanities',
        items: ['Custom white oak cabinets', 'Caesarstone countertops', 'Undermount sinks']
      },
      {
        category: 'Fixtures',
        items: ['Kohler brushed gold faucets', 'Toto intelligent toilet', 'Rain shower system']
      },
      {
        category: 'Lighting',
        items: ['Recessed LED lights', 'Decorative sconces', 'Backlit mirrors']
      }
    ],
    testimonial: {
      text: 'Our master bathroom is now our private spa retreat. The quality of work exceeded our expectations, and the team was professional throughout the entire process. It\'s truly a dream come true.',
      author: 'Michael & Linda Roberts',
      rating: 5
    },
    projectValue: '$60,000-$80,000',
    challenges: [
      'Working within existing plumbing locations',
      'Installing skylight in second-floor bathroom',
      'Achieving perfect marble book-matching'
    ],
    solutions: [
      'Creative layout maximized existing infrastructure',
      'Coordinated with roofers for watertight installation',
      'Hand-selected slabs at stone yard'
    ],
    metaDescription: 'Luxury master bathroom renovation in Rumson featuring marble tile, freestanding tub, and spa-like amenities. See the stunning transformation.',
    keywords: ['Rumson bathroom remodel', 'luxury bathroom design', 'master bath renovation', 'spa bathroom ideas']
  },
  {
    id: '3',
    slug: 'traditional-kitchen-holmdel',
    category: 'kitchen',
    title: 'Traditional Kitchen Renovation in Holmdel',
    location: 'Holmdel, NJ',
    description: 'Classic kitchen design with cherry cabinets, granite countertops, and professional appliances.',
    longDescription: `This traditional kitchen renovation in Holmdel perfectly balances timeless elegance with modern functionality. The homeowners wanted to preserve the classic character of their colonial home while updating the kitchen for contemporary family life.

    We designed custom cherry cabinets with raised panel doors and decorative crown molding that complement the home's original architectural details. The warm wood tones are balanced by lighter granite countertops with subtle movement. A large farmhouse sink and bridge faucet add authentic traditional touches.

    The layout was reconfigured to improve workflow and add a comfortable breakfast nook. Professional-grade appliances are seamlessly integrated with custom panels, maintaining the traditional aesthetic while providing modern cooking capabilities. The result is a kitchen that honors the past while serving today's lifestyle.`,
    completionDate: 'November 2023',
    duration: '9 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_0030.jpeg', 
        alt: 'Traditional kitchen with cherry cabinets',
        caption: 'Rich cherry cabinets with detailed crown molding create warmth'
      },
      { 
        src: '/images/gallery/IMG_0031.jpeg', 
        alt: 'Kitchen breakfast nook area',
        caption: 'Built-in banquette seating maximizes the breakfast nook'
      },
      { 
        src: '/images/gallery/IMG_6416.jpeg', 
        alt: 'Professional range and decorative hood',
        caption: 'The focal point range hood features traditional corbels'
      },
      {
        src: '/images/gallery/IMG_6417.jpeg',
        alt: 'Kitchen butler\'s pantry',
        caption: 'Adjacent butler\'s pantry provides extra storage and prep space'
      }
    ],
    features: [
      'Custom Cherry Cabinets',
      'Granite Countertops',
      'Farmhouse Sink',
      'Professional Range',
      'Built-in Breakfast Nook',
      'Butler\'s Pantry',
      'Crown Molding Details',
      'Glass-front Display Cabinets'
    ],
    materials: [
      {
        category: 'Cabinetry',
        items: ['Solid cherry wood', 'Raised panel doors', 'Dovetail drawers']
      },
      {
        category: 'Countertops',
        items: ['New Venetian Gold granite', 'Ogee edge detail', 'Full backsplash']
      },
      {
        category: 'Hardware',
        items: ['Oil-rubbed bronze pulls', 'Traditional knobs', 'Decorative hinges']
      },
      {
        category: 'Flooring',
        items: ['Hand-scraped hardwood', 'Medium walnut stain', 'Satin finish']
      }
    ],
    testimonial: {
      text: 'They perfectly captured our vision for a warm, traditional kitchen that still feels fresh and modern. The craftsmanship is outstanding, especially the custom cabinetry.',
      author: 'Jennifer & Robert Kim',
      rating: 5
    },
    projectValue: '$80,000-$100,000',
    challenges: [
      'Matching new cabinets to existing trim',
      'Working around original hardwood floors',
      'Integrating modern appliances'
    ],
    solutions: [
      'Custom milled trim profiles',
      'Careful floor protection and refinishing',
      'Panel-ready appliances for seamless look'
    ],
    metaDescription: 'Traditional kitchen remodel in Holmdel with custom cherry cabinets, granite counters, and breakfast nook. View this classic renovation.',
    keywords: ['Holmdel kitchen renovation', 'traditional kitchen design', 'cherry kitchen cabinets', 'classic kitchen remodel']
  },
  {
    id: '4',
    slug: 'coastal-bathroom-spring-lake',
    category: 'bathroom',
    title: 'Coastal Guest Bath in Spring Lake',
    location: 'Spring Lake, NJ',
    description: 'Beach-inspired bathroom with shiplap walls, subway tile, and coastal fixtures.',
    longDescription: `This charming guest bathroom renovation in Spring Lake captures the essence of coastal living. Located in a classic shore colonial just blocks from the beach, the design needed to reflect the home's seaside location while providing practical solutions for sandy feet and beach gear.

    We incorporated traditional shiplap wainscoting painted in a soft seafoam green, paired with classic white subway tile in the shower. The custom vanity features open shelving for beach towels and decorative storage baskets. Nautical-inspired fixtures and hardware add authentic maritime charm without being overly themed.

    Special attention was paid to moisture resistance, with proper ventilation, mold-resistant materials, and a heated floor system to combat humidity. The result is a fresh, inviting space that welcomes guests with coastal style and modern convenience.`,
    completionDate: 'May 2024',
    duration: '4 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_0431.jpeg', 
        alt: 'Coastal bathroom with shiplap walls',
        caption: 'Seafoam shiplap wainscoting sets the coastal tone'
      },
      { 
        src: '/images/gallery/IMG_0432.jpeg', 
        alt: 'Subway tile shower with glass door',
        caption: 'Classic white subway tile with seafoam accent stripe'
      },
      { 
        src: '/images/gallery/IMG_0433.jpeg', 
        alt: 'Coastal vanity with open shelving',
        caption: 'Custom vanity combines closed storage with open shelving'
      }
    ],
    features: [
      'Shiplap Wainscoting',
      'Subway Tile Shower',
      'Custom Vanity',
      'Heated Floors',
      'Nautical Hardware',
      'Open Shelving',
      'Moisture-Resistant Materials',
      'Beach-Themed Accents'
    ],
    materials: [
      {
        category: 'Walls',
        items: ['Moisture-resistant shiplap', 'Benjamin Moore seafoam paint', 'White subway tile']
      },
      {
        category: 'Vanity',
        items: ['Custom white oak base', 'Carrara marble top', 'Vessel sink']
      },
      {
        category: 'Fixtures',
        items: ['Polished nickel faucets', 'Nautical rope towel bars', 'Porthole mirror']
      },
      {
        category: 'Flooring',
        items: ['Hexagon marble mosaic', 'Heated floor system', 'Waterproof membrane']
      }
    ],
    testimonial: {
      text: 'They created the perfect beach house bathroom. Every detail reflects our coastal lifestyle, and our guests always compliment the space. It\'s both beautiful and practical.',
      author: 'Lisa & David Mitchell',
      rating: 5
    },
    projectValue: '$25,000-$35,000',
    challenges: [
      'Dealing with high humidity environment',
      'Limited space in older home',
      'Maintaining period-appropriate details'
    ],
    solutions: [
      'Marine-grade materials and finishes',
      'Space-saving corner shower design',
      'Historically accurate trim profiles'
    ],
    metaDescription: 'Coastal bathroom renovation in Spring Lake with shiplap walls, subway tile, and beach-inspired design. Perfect shore house bathroom.',
    keywords: ['Spring Lake bathroom remodel', 'coastal bathroom design', 'beach house bathroom', 'shore home renovation']
  },
  {
    id: '5',
    slug: 'custom-library-wall-township',
    category: 'custom-cabinetry',
    title: 'Custom Home Library in Wall Township',
    location: 'Wall Township, NJ',
    description: 'Floor-to-ceiling custom built-ins with integrated lighting and display shelving.',
    longDescription: `This sophisticated home library in Wall Township showcases the transformative power of custom cabinetry. The homeowners, avid readers and collectors, wanted to convert their underutilized formal living room into a functional library that would also serve as an elegant entertaining space.

    We designed and built floor-to-ceiling bookcases in rich walnut, incorporating adjustable shelving, integrated LED lighting, and display niches for artwork and collectibles. A rolling ladder provides access to upper shelves while adding classic library charm. Hidden storage behind lower cabinet doors conceals less attractive items.

    The centerpiece is a custom reading nook with built-in window seat and hidden storage drawers. Carefully planned lighting includes reading lights, display lighting, and ambient illumination, creating the perfect atmosphere for both reading and entertaining. The result is a stunning space that combines beauty with functionality.`,
    completionDate: 'February 2024',
    duration: '6 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_0424.jpeg', 
        alt: 'Custom library with floor-to-ceiling shelving',
        caption: 'Floor-to-ceiling walnut bookcases create a dramatic focal point'
      },
      { 
        src: '/images/gallery/IMG_0423.jpeg', 
        alt: 'Library ladder and shelving detail',
        caption: 'Rolling ladder provides access while adding authentic library charm'
      },
      { 
        src: '/images/gallery/IMG_0030.jpeg', 
        alt: 'Reading nook with built-in seating',
        caption: 'Custom window seat creates the perfect reading retreat'
      }
    ],
    features: [
      'Floor-to-Ceiling Bookcases',
      'Integrated LED Lighting',
      'Rolling Library Ladder',
      'Custom Window Seat',
      'Hidden Storage',
      'Display Niches',
      'Adjustable Shelving',
      'Built-in Desk Area'
    ],
    materials: [
      {
        category: 'Cabinetry',
        items: ['Solid walnut construction', 'Adjustable shelf pins', 'Soft-close hinges']
      },
      {
        category: 'Finishes',
        items: ['Hand-rubbed oil finish', 'Satin polyurethane topcoat', 'Brass hardware']
      },
      {
        category: 'Lighting',
        items: ['LED strip lights', 'Puck lights for displays', 'Reading sconces']
      },
      {
        category: 'Extras',
        items: ['Library ladder rail system', 'Custom cushions', 'Built-in outlets']
      }
    ],
    testimonial: {
      text: 'The custom cabinetry transformed our spare room into an elegant library. The craftsmanship is museum-quality, and the attention to detail is extraordinary.',
      author: 'Robert & Patricia Davis',
      rating: 5
    },
    projectValue: '$40,000-$50,000',
    challenges: [
      'Uneven walls in older home',
      'Integrating HVAC vents',
      'Maximizing book storage capacity'
    ],
    solutions: [
      'Scribed cabinets for perfect fit',
      'Custom vent covers in matching wood',
      'Efficient shelving layout design'
    ],
    metaDescription: 'Custom home library in Wall Township featuring floor-to-ceiling walnut bookcases, rolling ladder, and built-in reading nook.',
    keywords: ['Wall Township custom cabinets', 'home library design', 'built-in bookcases', 'custom millwork NJ']
  },
  {
    id: '6',
    slug: 'contemporary-kitchen-marlboro',
    category: 'kitchen',
    title: 'Contemporary Kitchen in Marlboro',
    location: 'Marlboro, NJ',
    description: 'Sleek modern kitchen with handleless cabinets, waterfall island, and integrated appliances.',
    longDescription: `This striking contemporary kitchen in Marlboro represents the cutting edge of modern design. The homeowners, a young professional couple, wanted a minimalist aesthetic with maximum functionality, incorporating the latest smart home technology and sustainable materials.

    The design features handleless cabinets in matte graphite, creating clean lines and a seamless appearance. The dramatic waterfall island in bookmatched quartzite serves as both a functional workspace and an artistic centerpiece. Integrated appliances maintain the streamlined look while providing professional-grade performance.

    Smart technology is woven throughout, from voice-controlled lighting to a refrigerator with internal cameras. The induction cooktop with integrated ventilation keeps sight lines clear, while the hidden pantry behind pocket doors maintains the minimalist aesthetic. Every element was chosen for both form and function.`,
    completionDate: 'April 2024',
    duration: '10 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_6162.jpeg', 
        alt: 'Contemporary kitchen with handleless cabinets',
        caption: 'Handleless cabinets create ultra-clean lines'
      },
      { 
        src: '/images/gallery/IMG_6163.jpeg', 
        alt: 'Waterfall island with bookmatched stone',
        caption: 'Dramatic bookmatched quartzite waterfall island'
      },
      { 
        src: '/images/gallery/IMG_6164.jpeg', 
        alt: 'Integrated appliances and smart features',
        caption: 'Fully integrated appliances maintain the minimalist aesthetic'
      }
    ],
    features: [
      'Handleless Cabinets',
      'Waterfall Island',
      'Integrated Appliances',
      'Smart Home Technology',
      'Induction Cooking',
      'Hidden Pantry',
      'LED Strip Lighting',
      'Touch-Control Faucet'
    ],
    materials: [
      {
        category: 'Cabinetry',
        items: ['Matte graphite laminate', 'Touch-latch hardware', 'Aluminum frames']
      },
      {
        category: 'Countertops',
        items: ['Bookmatched quartzite', 'Mitred waterfall edges', '3cm thickness']
      },
      {
        category: 'Appliances',
        items: ['Gaggenau integrated suite', 'Induction with downdraft', 'Built-in coffee system']
      },
      {
        category: 'Technology',
        items: ['Smart lighting system', 'Voice control integration', 'Hidden charging stations']
      }
    ],
    testimonial: {
      text: 'Our kitchen is now the showpiece of our home. The contemporary design is exactly what we wanted - clean, functional, and absolutely stunning.',
      author: 'David & Emma Chen',
      rating: 5
    },
    projectValue: '$100,000-$125,000',
    challenges: [
      'Achieving perfectly flush surfaces',
      'Integrating complex technology',
      'Bookmatching stone slabs'
    ],
    solutions: [
      'Precision millwork and installation',
      'Pre-wiring during rough construction',
      'Hand-selected matching slabs'
    ],
    metaDescription: 'Contemporary kitchen renovation in Marlboro with handleless cabinets, waterfall island, and smart home technology. Modern luxury design.',
    keywords: ['Marlboro modern kitchen', 'contemporary kitchen design', 'handleless cabinets', 'waterfall island kitchen']
  },
  {
    id: '7',
    slug: 'basement-home-theater-freehold',
    category: 'basement',
    title: 'Basement Home Theater in Freehold',
    location: 'Freehold, NJ',
    description: 'Custom home theater with tiered seating, acoustic treatments, and full bar area.',
    longDescription: `This impressive basement transformation in Freehold created the ultimate entertainment space for a family of movie enthusiasts. The previously unfinished basement now houses a state-of-the-art home theater, complete with tiered seating, professional acoustic treatments, and a fully equipped bar area for entertaining.

    We designed the theater with optimal viewing angles in mind, creating two tiers of custom seating with built-in cup holders and USB charging. Acoustic panels wrapped in theater-appropriate fabric control sound while adding visual interest. A 150-inch screen paired with a 4K projector and Dolby Atmos sound system delivers an authentic cinema experience.

    The adjacent bar area features a granite-topped counter, beverage refrigerator, and custom cabinetry for glassware and snacks. Proper HVAC and moisture control ensure year-round comfort, while smart home integration allows control of lights, sound, and climate from a single app.`,
    completionDate: 'December 2023',
    duration: '12 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_0425.jpeg', 
        alt: 'Home theater with tiered seating',
        caption: 'Tiered seating ensures perfect views from every seat'
      },
      { 
        src: '/images/gallery/IMG_0426.jpeg', 
        alt: 'Theater screen and acoustic panels',
        caption: 'Acoustic treatments optimize sound while adding style'
      },
      { 
        src: '/images/gallery/IMG_0427.jpeg', 
        alt: 'Bar area with granite counter',
        caption: 'Full bar area perfect for intermission refreshments'
      }
    ],
    features: [
      'Tiered Theater Seating',
      '150-inch Screen',
      '4K Projection System',
      'Dolby Atmos Sound',
      'Acoustic Treatments',
      'Full Bar Area',
      'Smart Home Controls',
      'Dedicated HVAC Zone'
    ],
    materials: [
      {
        category: 'Construction',
        items: ['Sound isolation framing', 'Acoustic insulation', 'Moisture barriers']
      },
      {
        category: 'Finishes',
        items: ['Theater carpet', 'Acoustic fabric panels', 'LED strip lighting']
      },
      {
        category: 'Bar Area',
        items: ['Granite countertops', 'Custom cabinetry', 'Glass tile backsplash']
      },
      {
        category: 'Technology',
        items: ['4K laser projector', '7.2.4 Atmos speakers', 'Smart automation']
      }
    ],
    testimonial: {
      text: 'Our basement is now our favorite room in the house. The theater rivals any commercial cinema, and the bar area is perfect for entertaining. Absolutely worth every penny!',
      author: 'Mark & Susan Thompson',
      rating: 5
    },
    projectValue: '$75,000-$100,000',
    challenges: [
      'Low ceiling height limitations',
      'Proper soundproofing requirements',
      'Complex AV integration'
    ],
    solutions: [
      'Strategic platform design',
      'Professional acoustic engineering',
      'Dedicated AV consultant partnership'
    ],
    metaDescription: 'Basement home theater renovation in Freehold with tiered seating, 4K projection, and custom bar. Ultimate entertainment space.',
    keywords: ['Freehold basement finishing', 'home theater design', 'basement renovation NJ', 'custom home theater']
  },
  {
    id: '8',
    slug: 'home-addition-middletown',
    category: 'home-addition',
    title: 'Sunroom Addition in Middletown',
    location: 'Middletown, NJ',
    description: 'Four-season sunroom addition with vaulted ceiling, skylights, and radiant floor heating.',
    longDescription: `This beautiful four-season sunroom addition in Middletown created the perfect bridge between indoor comfort and outdoor beauty. The homeowners wanted a bright, airy space where they could enjoy their landscaped backyard year-round, regardless of weather.

    We designed a 16x20 addition with vaulted ceilings and extensive glazing to maximize natural light and views. Structural insulated panels ensure energy efficiency, while operable skylights provide natural ventilation. Radiant floor heating keeps the space comfortable even in winter, and ceiling fans help with summer cooling.

    The interior features natural stone flooring that transitions seamlessly to the outdoor patio, tongue-and-groove cedar ceiling, and custom built-in seating with storage. Large sliding doors open completely to blur the lines between indoor and outdoor living. The result is a versatile space perfect for morning coffee, afternoon reading, or evening entertaining.`,
    completionDate: 'September 2023',
    duration: '8 weeks',
    images: [
      { 
        src: '/images/gallery/IMG_0428.jpeg', 
        alt: 'Sunroom with vaulted ceiling',
        caption: 'Vaulted ceiling with exposed beams creates dramatic height'
      },
      { 
        src: '/images/gallery/IMG_0429.jpeg', 
        alt: 'Sunroom seating area with garden views',
        caption: 'Built-in seating maximizes space and provides storage'
      },
      { 
        src: '/images/gallery/IMG_0430.jpeg', 
        alt: 'Skylights and natural lighting',
        caption: 'Operable skylights provide ventilation and additional light'
      }
    ],
    features: [
      'Vaulted Cedar Ceiling',
      'Operable Skylights',
      'Radiant Floor Heating',
      'Built-in Seating',
      'Sliding Glass Walls',
      'Ceiling Fans',
      'Stone Flooring',
      'Custom Window Treatments'
    ],
    materials: [
      {
        category: 'Structure',
        items: ['Structural insulated panels', 'Engineered beams', 'High-performance windows']
      },
      {
        category: 'Interior',
        items: ['Tongue-and-groove cedar', 'Natural slate flooring', 'Custom millwork']
      },
      {
        category: 'Systems',
        items: ['Radiant floor heating', 'Mini-split HVAC', 'Automated skylights']
      },
      {
        category: 'Exterior',
        items: ['Standing seam roof', 'Composite decking', 'Integrated gutters']
      }
    ],
    testimonial: {
      text: 'The sunroom has become our favorite space in the house. We use it every single day, in every season. It\'s like adding a whole new dimension to our home.',
      author: 'Patricia & James Wilson',
      rating: 5
    },
    projectValue: '$60,000-$80,000',
    challenges: [
      'Matching existing home architecture',
      'Managing temperature extremes',
      'Foundation work on sloped lot'
    ],
    solutions: [
      'Careful design to complement home style',
      'High-performance glass and insulation',
      'Engineered foundation system'
    ],
    metaDescription: 'Four-season sunroom addition in Middletown with vaulted ceiling, skylights, and radiant heating. Year-round comfort and style.',
    keywords: ['Middletown home addition', 'sunroom addition NJ', 'four season room', 'home addition contractor']
  }
];

export function getProjectBySlug(slug: string): PortfolioProject | undefined {
  return portfolioProjects.find(project => project.slug === slug);
}

export function getProjectsByCategory(category: string): PortfolioProject[] {
  if (category === 'all') return portfolioProjects;
  return portfolioProjects.filter(project => project.category === category);
}

export function getRelatedProjects(currentSlug: string, limit: number = 3): PortfolioProject[] {
  const currentProject = getProjectBySlug(currentSlug);
  if (!currentProject) return [];
  
  return portfolioProjects
    .filter(project => 
      project.slug !== currentSlug && 
      project.category === currentProject.category
    )
    .slice(0, limit);
}

export function getAllProjectSlugs(): string[] {
  return portfolioProjects.map(project => project.slug);
}