import Image from 'next/image';

export interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  date: string;
  service: string;
  text: string;
  beforeImage?: string;
  afterImage?: string;
  verified?: boolean;
  source?: 'google' | 'houzz' | 'angi';
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  variant?: 'default' | 'compact' | 'detailed';
}

export default function TestimonialCard({ testimonial, variant = 'default' }: TestimonialCardProps) {
  const renderSourceIcon = (source?: 'google' | 'houzz' | 'angi') => {
    if (!source) return null;
    
    switch (source) {
      case 'google':
        return (
          <div className="flex items-center space-x-1">
            <Image
              src="/images/icons/Google__G__Logo-512.webp"
              alt="Google Reviews"
              width={16}
              height={16}
              className="rounded"
            />
            <span className="text-xs text-gray-600">Google</span>
          </div>
        );
      case 'houzz':
        return (
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-green-600 rounded flex items-center justify-center">
              <span className="font-bold text-white text-[10px]">H</span>
            </div>
            <span className="text-xs text-gray-600">Houzz</span>
          </div>
        );
      case 'angi':
        return (
          <div className="flex items-center space-x-1">
            <div className="w-4 h-4 bg-red-600 rounded flex items-center justify-center">
              <span className="font-bold text-white text-[10px]">A</span>
            </div>
            <span className="text-xs text-gray-600">Angi</span>
          </div>
        );
    }
  };

  const renderStars = (rating: number) => {
    return (
      <div className="flex items-center space-x-1">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            className={`w-5 h-5 ${index < rating ? 'text-gold' : 'text-gray-300'}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        ))}
      </div>
    );
  };

  if (variant === 'compact') {
    return (
      <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center justify-between mb-3">
          {renderStars(testimonial.rating)}
          {testimonial.verified && (
            <span className="text-xs text-green-600 flex items-center space-x-1">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Verified</span>
            </span>
          )}
        </div>
        <blockquote className="text-gray-700 mb-4 line-clamp-3">
          "{testimonial.text}"
        </blockquote>
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-burgundy">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-500">{testimonial.date}</p>
            {testimonial.source && <div className="mt-1">{renderSourceIcon(testimonial.source)}</div>}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'detailed') {
    return (
      <div className="bg-white rounded-xl shadow-lg overflow-hidden">
        {/* Before/After Images */}
        {testimonial.beforeImage && testimonial.afterImage && (
          <div className="grid grid-cols-2">
            <div className="relative h-48">
              <Image
                src={testimonial.beforeImage}
                alt={`Before ${testimonial.service}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-white text-sm font-semibold">Before</span>
            </div>
            <div className="relative h-48">
              <Image
                src={testimonial.afterImage}
                alt={`After ${testimonial.service}`}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <span className="absolute bottom-2 left-2 text-white text-sm font-semibold">After</span>
            </div>
          </div>
        )}
        
        <div className="p-8">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {renderStars(testimonial.rating)}
              {testimonial.verified && (
                <span className="text-sm text-green-600 flex items-center space-x-1 bg-green-50 px-2 py-1 rounded-full">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span>Verified Customer</span>
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">{testimonial.date}</span>
          </div>
          
          <blockquote className="text-gray-700 text-lg mb-6 italic">
            "{testimonial.text}"
          </blockquote>
          
          <div className="border-t pt-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-semibold text-burgundy text-lg">{testimonial.name}</p>
                <p className="text-gray-600">{testimonial.location}</p>
                {testimonial.source && <div className="mt-2">{renderSourceIcon(testimonial.source)}</div>}
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-500">Service</p>
                <p className="font-medium text-burgundy">{testimonial.service}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center justify-between mb-4">
        {renderStars(testimonial.rating)}
        {testimonial.verified && (
          <span className="text-xs text-green-600 flex items-center space-x-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>Verified</span>
          </span>
        )}
      </div>
      
      <blockquote className="text-gray-700 mb-4">
        "{testimonial.text}"
      </blockquote>
      
      <div className="border-t pt-4">
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold text-burgundy">{testimonial.name}</p>
            <p className="text-sm text-gray-600">{testimonial.location}</p>
            {testimonial.source && <div className="mt-1">{renderSourceIcon(testimonial.source)}</div>}
          </div>
          <div className="text-right">
            <p className="text-sm text-gray-600">{testimonial.service}</p>
            <p className="text-sm text-gray-500">{testimonial.date}</p>
          </div>
        </div>
      </div>
    </div>
  );
}