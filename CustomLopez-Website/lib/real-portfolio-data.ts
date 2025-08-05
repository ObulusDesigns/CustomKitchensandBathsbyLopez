export interface CustomerReview {
  id: string;
  customerName: string;
  rating: number;
  reviewDate: string;
  projectType: string;
  category: 'kitchen' | 'bathroom' | 'home-renovation' | 'custom-work';
  location?: string;
  reviewText: string;
  highlights: string[];
  googleReviewUrl?: string;
  photoCount?: number;
}

export const customerReviews: CustomerReview[] = [
  {
    id: '1',
    customerName: 'Darlene Field',
    rating: 5,
    reviewDate: '7 reviews • 8 photos',
    projectType: 'Kitchen Remodel',
    category: 'kitchen',
    location: 'Monmouth County, NJ',
    reviewText: 'Enrique and his team are creative, hard working, endlessly talented and can do absolutely anything you need for your home remodel. We put off renovating our kitchen for years and now that we chose Enrique we are so pleased with our new kitchen.',
    highlights: [
      'Creative design solutions',
      'Hard working team',
      'Endlessly talented',
      'Versatile capabilities',
      'Exceeded expectations'
    ],
    photoCount: 8
  },
  {
    id: '2',
    customerName: 'Rishi and Priti Verma',
    rating: 5,
    reviewDate: 'Local Guide • 16 reviews • 20 photos',
    projectType: 'Bathroom Remodels',
    category: 'bathroom',
    location: 'Monmouth County, NJ',
    reviewText: 'We hired Enrique and his team after obtaining several quotes for three bathroom remodels. Enrique was punctual, efficient and his attention to detail is amazing. We are thrilled with the renovations and his expertise is outstanding. Look no further when it comes to any home renovations. Enrique and his team will take care of everything.',
    highlights: [
      'Three bathroom remodels',
      'Punctual service',
      'Efficient work',
      'Amazing attention to detail',
      'Outstanding expertise',
      'Comprehensive service'
    ],
    photoCount: 20
  },
  {
    id: '3',
    customerName: 'DawnHoward Abramovitz',
    rating: 5,
    reviewDate: '2 months ago',
    projectType: 'Kitchen Remodel',
    category: 'kitchen',
    location: 'Monmouth County, NJ',
    reviewText: 'Enrique did our kitchen remodel, and I couldn\'t be more thrilled with the results. From start to finish, Enrique and his team exceeded all my expectations. The craftsmanship is top-notch, and the attention to detail throughout the project was remarkable. They transformed our outdated kitchen into a modern, functional space that we absolutely love. Communication was excellent, timelines were met, and the entire process was smooth and stress-free. I highly recommend Enrique and his team for any home improvement project!',
    highlights: [
      'Exceeded expectations',
      'Top-notch craftsmanship',
      'Remarkable attention to detail',
      'Modern transformation',
      'Excellent communication',
      'Met timelines',
      'Stress-free process'
    ]
  },
  {
    id: '4',
    customerName: 'Custom Kitchens By Lopez (Owner)',
    rating: 5,
    reviewDate: '2 months ago',
    projectType: 'Kitchen Remodel Experience',
    category: 'kitchen',
    location: 'Monmouth County, NJ',
    reviewText: 'Thank you so much for sharing your experience! It was a pleasure working with you on your kitchen remodel, and I\'m so glad to hear you\'re thrilled with the outcome. We understand how important it is to stick to timelines, especially with a kitchen, so I\'m happy we could complete everything ahead of schedule and with as little disruption as possible. Your trust and collaboration throughout the process made it a smooth and enjoyable project for all of us. Enjoy your beautiful new kitchen -- and don\'t hesitate to reach out if you need anything down the road!',
    highlights: [
      'Completed ahead of schedule',
      'Minimal disruption',
      'Collaborative process',
      'Customer satisfaction focus',
      'Long-term support'
    ],
  },
  {
    id: '5',
    customerName: 'Kim Flynn',
    rating: 5,
    reviewDate: '5 reviews • 3 photos • a year ago',
    projectType: 'Home Renovations',
    category: 'home-renovation',
    location: 'Monmouth County, NJ',
    reviewText: 'Enrique is the only person I trust for my home renovations. Him and his guys do BEAUTIFUL work, they are always on time and are fairly priced. He just did a half bath for me and I couldn\'t be happier. Would recommend him again and again!',
    highlights: [
      'Trusted contractor',
      'Beautiful work quality',
      'Always on time',
      'Fair pricing',
      'Half bath renovation',
      'Highly recommended'
    ],
    photoCount: 3
  },
  {
    id: '6',
    customerName: 'Sea Bright Kitchen Transformation',
    rating: 5,
    reviewDate: 'Completed in 2 months',
    projectType: 'Full Home Renovation',
    category: 'home-renovation',
    location: 'Sea Bright, NJ',
    reviewText: 'We recently completed a $140,000 full-home renovation in Sea Bright, NJ, transforming a closed-off layout into a bright, open-concept space. Our team relocated a centrally placed bathroom to open the main living area, installed two large windows for better natural light, and built a brand-new kitchen with quartz countertops, custom cabinets, shiplap accents, fresh paint, custom molding, and new flooring. We also relocated all lighting and built a beautiful island centerpiece--delivering expert craftsmanship, full-scope remodeling, and a flawless finish in just two months.',
    highlights: [
      '$140,000 renovation',
      'Open-concept transformation',
      'Bathroom relocation',
      'Two large windows added',
      'Custom kitchen with island',
      'Quartz countertops',
      'Shiplap accents',
      'Completed in 2 months'
    ]
  }
];

export function getReviewsByCategory(category: string): CustomerReview[] {
  if (category === 'all') return customerReviews;
  return customerReviews.filter(review => review.category === category);
}

export function getTopReviews(limit: number = 3): CustomerReview[] {
  return customerReviews.slice(0, limit);
}