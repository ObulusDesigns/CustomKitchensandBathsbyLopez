'use client';

import { useState } from 'react';
import { BUSINESS_INFO } from '@/lib/constants';

interface GoogleMapProps {
  height?: string;
  className?: string;
}

export default function GoogleMap({ height = '400px', className = '' }: GoogleMapProps) {
  const [mapError, setMapError] = useState(false);

  // Encode the address for the Google Maps URL
  const encodedAddress = encodeURIComponent(
    `${BUSINESS_INFO.address.street}, ${BUSINESS_INFO.address.city}, ${BUSINESS_INFO.address.stateAbbr} ${BUSINESS_INFO.address.zip}`
  );

  // Google Maps Embed API URL
  // Note: In production, you should use an API key restricted to your domain
  const mapUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&q=${encodedAddress}&zoom=15`;

  // Directions URL for the "Get Directions" button
  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;

  if (mapError) {
    return (
      <div 
        className={`bg-gray-100 rounded-lg flex items-center justify-center ${className}`}
        style={{ height }}
      >
        <div className="text-center p-8">
          <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <p className="text-gray-600 mb-4">Unable to load map</p>
          <a
            href={directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 text-burgundy hover:text-gold transition-colors"
          >
            <span>Get Directions</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`} style={{ height }}>
      {/* Map Container */}
      <div className="relative w-full h-full rounded-lg overflow-hidden shadow-lg">
        <iframe
          title="Business Location Map"
          src={mapUrl}
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          onError={() => setMapError(true)}
        />
        
        {/* Map Overlay with Business Info */}
        <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-4 max-w-xs">
          <h3 className="font-semibold text-burgundy mb-2">{BUSINESS_INFO.name}</h3>
          <p className="text-sm text-gray-600 mb-3">
            {BUSINESS_INFO.address.street}<br />
            {BUSINESS_INFO.address.city}, {BUSINESS_INFO.address.stateAbbr} {BUSINESS_INFO.address.zip}
          </p>
          <div className="flex items-center space-x-4">
            <a
              href={`tel:${BUSINESS_INFO.phone}`}
              className="text-sm text-burgundy hover:text-gold transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.54 1.06l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>Call</span>
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-burgundy hover:text-gold transition-colors flex items-center space-x-1"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Directions</span>
            </a>
          </div>
        </div>
      </div>

      {/* Directions Button for Mobile */}
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden mt-4 w-full btn-primary text-center flex items-center justify-center space-x-2"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>Get Directions</span>
      </a>
    </div>
  );
}