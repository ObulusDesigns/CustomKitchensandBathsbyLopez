export interface Location {
  id: string;
  name: string;
  slug: string;
  county: string;
  state: string;
  stateAbbr: string;
  population?: number;
  coordinates: {
    lat: number;
    lng: number;
  };
  description: string;
  nearbyTowns: string[];
  landmarks: string[];
  zipCodes: string[];
}

// Monmouth County towns with complete data
export const monmouthCountyLocations: Location[] = [
  // Primary Service Areas
  {
    id: 'freehold',
    name: 'Freehold',
    slug: 'freehold',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 36184,
    coordinates: { lat: 40.2601, lng: -74.2737 },
    description: 'The county seat of Monmouth County, Freehold offers a perfect blend of historic charm and modern amenities. Known for its Victorian homes and thriving downtown.',
    nearbyTowns: ['Manalapan', 'Marlboro', 'Howell', 'Colts Neck'],
    landmarks: ['Freehold Raceway Mall', 'Downtown Freehold', 'Monmouth Battlefield State Park'],
    zipCodes: ['07728']
  },
  {
    id: 'colts-neck',
    name: 'Colts Neck',
    slug: 'colts-neck',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 10142,
    coordinates: { lat: 40.2873, lng: -74.1707 },
    description: 'An affluent community known for its equestrian estates, luxury homes, and rural character. Popular among professionals seeking upscale country living.',
    nearbyTowns: ['Marlboro', 'Freehold', 'Holmdel', 'Lincroft'],
    landmarks: ['Delicious Orchards', 'Colts Neck Golf Club', 'Bucks Mill Recreation Area'],
    zipCodes: ['07722']
  },
  {
    id: 'holmdel',
    name: 'Holmdel',
    slug: 'holmdel',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 16773,
    coordinates: { lat: 40.3451, lng: -74.1840 },
    description: 'A prestigious township featuring luxury homes, excellent schools, and convenient access to NYC. Home to PNC Bank Arts Center and Bell Labs historic site.',
    nearbyTowns: ['Middletown', 'Hazlet', 'Colts Neck', 'Lincroft'],
    landmarks: ['PNC Bank Arts Center', 'Holmdel Park', 'Bell Works'],
    zipCodes: ['07733']
  },
  {
    id: 'marlboro',
    name: 'Marlboro',
    slug: 'marlboro',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 40191,
    coordinates: { lat: 40.3151, lng: -74.2462 },
    description: 'A family-friendly township with top-rated schools, beautiful neighborhoods, and a strong sense of community. Popular among NYC commuters.',
    nearbyTowns: ['Manalapan', 'Freehold', 'Colts Neck', 'Old Bridge'],
    landmarks: ['Marlboro Plaza', 'Big Brook Park', 'Marlboro Recreation Complex'],
    zipCodes: ['07746', '07751']
  },
  {
    id: 'manalapan',
    name: 'Manalapan',
    slug: 'manalapan',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 38872,
    coordinates: { lat: 40.2509, lng: -74.3688 },
    description: 'A growing township offering a mix of established neighborhoods and new developments. Known for excellent schools and family-oriented communities.',
    nearbyTowns: ['Marlboro', 'Freehold', 'Millstone', 'Monroe'],
    landmarks: ['Monmouth Battlefield State Park', 'Recreation Center', 'Covered Bridge'],
    zipCodes: ['07726']
  },
  {
    id: 'middletown',
    name: 'Middletown',
    slug: 'middletown',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 66327,
    coordinates: { lat: 40.3898, lng: -74.1143 },
    description: 'One of the oldest townships in NJ with diverse neighborhoods from waterfront communities to suburban developments. Offers easy NYC ferry access.',
    nearbyTowns: ['Red Bank', 'Holmdel', 'Atlantic Highlands', 'Hazlet'],
    landmarks: ['Sandy Hook Gateway', 'Poricy Park', 'Deep Cut Gardens'],
    zipCodes: ['07748', '07701', '07758']
  },
  {
    id: 'red-bank',
    name: 'Red Bank',
    slug: 'red-bank',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 12206,
    coordinates: { lat: 40.3471, lng: -74.0643 },
    description: 'A vibrant downtown arts and dining destination on the Navesink River. Known for theaters, restaurants, boutiques, and historic Victorian architecture.',
    nearbyTowns: ['Fair Haven', 'Little Silver', 'Shrewsbury', 'Middletown'],
    landmarks: ['Count Basie Theater', 'Two River Theater', 'Riverside Gardens Park'],
    zipCodes: ['07701']
  },
  {
    id: 'rumson',
    name: 'Rumson',
    slug: 'rumson',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 7122,
    coordinates: { lat: 40.3723, lng: -73.9999 },
    description: 'An exclusive waterfront community known for grand estates, pristine beaches, and prestigious country clubs. One of NJ\'s wealthiest towns.',
    nearbyTowns: ['Fair Haven', 'Sea Bright', 'Little Silver', 'Red Bank'],
    landmarks: ['Rumson Country Club', 'Oceanic Bridge', 'Victory Park'],
    zipCodes: ['07760']
  },
  {
    id: 'wall-township',
    name: 'Wall Township',
    slug: 'wall-township',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 26164,
    coordinates: { lat: 40.1540, lng: -74.0693 },
    description: 'A diverse township offering beach communities, suburban neighborhoods, and rural areas. Popular for its proximity to beaches and reasonable home prices.',
    nearbyTowns: ['Spring Lake', 'Sea Girt', 'Howell', 'Brielle'],
    landmarks: ['Allaire State Park', 'Wall Stadium Speedway', 'Manasquan Reservoir'],
    zipCodes: ['07719', '07731', '07753']
  },
  {
    id: 'howell',
    name: 'Howell',
    slug: 'howell',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 51075,
    coordinates: { lat: 40.1723, lng: -74.1962 },
    description: 'A large township with diverse housing options from farms to new developments. Known for Manasquan Reservoir and strong community spirit.',
    nearbyTowns: ['Freehold', 'Wall Township', 'Jackson', 'Farmingdale'],
    landmarks: ['Manasquan Reservoir', 'Howell Park Golf Course', 'Oak Glen Park'],
    zipCodes: ['07731']
  },

  // Shore Communities
  {
    id: 'spring-lake',
    name: 'Spring Lake',
    slug: 'spring-lake',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 2993,
    coordinates: { lat: 40.1532, lng: -74.0280 },
    description: 'An upscale Victorian seaside resort known for its non-commercial boardwalk, pristine beaches, and historic inns. Called the "Irish Riviera".',
    nearbyTowns: ['Sea Girt', 'Spring Lake Heights', 'Wall Township', 'Belmar'],
    landmarks: ['Spring Lake Boardwalk', 'Divine Park', 'The Breakers Hotel'],
    zipCodes: ['07762']
  },
  {
    id: 'sea-girt',
    name: 'Sea Girt',
    slug: 'sea-girt',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 1828,
    coordinates: { lat: 40.1320, lng: -74.0346 },
    description: 'A quiet, upscale beach community with Victorian homes and private beach clubs. Known for Sea Girt Lighthouse and National Guard Training Center.',
    nearbyTowns: ['Spring Lake', 'Manasquan', 'Wall Township', 'Brielle'],
    landmarks: ['Sea Girt Lighthouse', 'National Guard Training Center', 'The Parker House'],
    zipCodes: ['08750']
  },
  {
    id: 'manasquan',
    name: 'Manasquan',
    slug: 'manasquan',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 5897,
    coordinates: { lat: 40.1262, lng: -74.0490 },
    description: 'A popular beach town at the Manasquan Inlet offering excellent surfing, fishing, and a charming downtown. Family-friendly with strong community.',
    nearbyTowns: ['Sea Girt', 'Brielle', 'Point Pleasant Beach', 'Wall Township'],
    landmarks: ['Manasquan Inlet', 'Main Street', 'Fisherman\'s Cove Conservation Area'],
    zipCodes: ['08736']
  },

  // Additional Towns
  {
    id: 'fair-haven',
    name: 'Fair Haven',
    slug: 'fair-haven',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 6121,
    coordinates: { lat: 40.3612, lng: -74.0382 },
    description: 'A picturesque borough with tree-lined streets, historic homes, and strong schools. Popular among families seeking small-town charm near Red Bank.',
    nearbyTowns: ['Rumson', 'Red Bank', 'Little Silver', 'Shrewsbury'],
    landmarks: ['Fair Haven Dock', 'Memorial Park', 'Bicentennial Hall'],
    zipCodes: ['07704']
  },
  {
    id: 'little-silver',
    name: 'Little Silver',
    slug: 'little-silver',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 5950,
    coordinates: { lat: 40.3368, lng: -74.0471 },
    description: 'A small, affluent borough known for excellent schools and beautiful residential neighborhoods. Offers a perfect suburban lifestyle.',
    nearbyTowns: ['Red Bank', 'Fair Haven', 'Shrewsbury', 'Oceanport'],
    landmarks: ['Parker Homestead', 'Sickles Park', 'Little Silver Train Station'],
    zipCodes: ['07739']
  },
  {
    id: 'shrewsbury',
    name: 'Shrewsbury',
    slug: 'shrewsbury',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 4142,
    coordinates: { lat: 40.3298, lng: -74.0618 },
    description: 'A historic borough with colonial roots, featuring well-preserved architecture and upscale shopping. Home to many historic sites.',
    nearbyTowns: ['Red Bank', 'Little Silver', 'Eatontown', 'Tinton Falls'],
    landmarks: ['Christ Church', 'Allen House', 'Historic Grove Shopping'],
    zipCodes: ['07702']
  },
  {
    id: 'tinton-falls',
    name: 'Tinton Falls',
    slug: 'tinton-falls',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 17892,
    coordinates: { lat: 40.3040, lng: -74.1007 },
    description: 'A growing community with excellent shopping, dining, and business opportunities. Features a mix of residential neighborhoods and commercial districts.',
    nearbyTowns: ['Eatontown', 'Shrewsbury', 'Neptune', 'Ocean Township'],
    landmarks: ['Jersey Shore Premium Outlets', 'Sycamore Recreation Complex', 'Pine Brook Golf Course'],
    zipCodes: ['07724', '07753', '07701']
  },
  {
    id: 'eatontown',
    name: 'Eatontown',
    slug: 'eatontown',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 12242,
    coordinates: { lat: 40.2962, lng: -74.0510 },
    description: 'A diverse community with affordable housing options and convenient location. Close to beaches, shopping, and major highways.',
    nearbyTowns: ['Shrewsbury', 'Tinton Falls', 'Ocean Township', 'Long Branch'],
    landmarks: ['Monmouth Mall', 'Fort Monmouth', 'Wampum Memorial Park'],
    zipCodes: ['07724']
  },
  {
    id: 'long-branch',
    name: 'Long Branch',
    slug: 'long-branch',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 30719,
    coordinates: { lat: 40.3043, lng: -73.9924 },
    description: 'A revitalized beach city with modern oceanfront condos, entertainment at Pier Village, and diverse neighborhoods. Rich presidential history.',
    nearbyTowns: ['Deal', 'West Long Branch', 'Eatontown', 'Monmouth Beach'],
    landmarks: ['Pier Village', 'Seven Presidents Oceanfront Park', 'Monmouth University'],
    zipCodes: ['07740']
  },
  {
    id: 'ocean-township',
    name: 'Ocean Township',
    slug: 'ocean-township',
    county: 'Monmouth County',
    state: 'New Jersey',
    stateAbbr: 'NJ',
    population: 27291,
    coordinates: { lat: 40.2565, lng: -74.0354 },
    description: 'A family-friendly township with diverse housing, good schools, and plenty of parks. Centrally located with easy access to beaches and highways.',
    nearbyTowns: ['Asbury Park', 'Neptune', 'Tinton Falls', 'Eatontown'],
    landmarks: ['Joe Palaia Park', 'Deal Lake', 'Poplar Road School Historic Site'],
    zipCodes: ['07712', '07755']
  }
];

// Get location by slug
export function getLocationBySlug(slug: string): Location | undefined {
  return monmouthCountyLocations.find(loc => loc.slug === slug);
}

// Get all location slugs for static generation
export function getAllLocationSlugs(): string[] {
  return monmouthCountyLocations.map(loc => loc.slug);
}

// Get nearby locations
export function getNearbyLocations(slug: string, limit: number = 4): Location[] {
  const location = getLocationBySlug(slug);
  if (!location) return [];
  
  return location.nearbyTowns
    .slice(0, limit)
    .map(townName => 
      monmouthCountyLocations.find(loc => 
        loc.name.toLowerCase() === townName.toLowerCase()
      )
    )
    .filter((loc): loc is Location => loc !== undefined);
}