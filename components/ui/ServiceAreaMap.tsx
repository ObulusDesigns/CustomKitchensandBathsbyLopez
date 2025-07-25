'use client';

import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import Link from 'next/link';
import { monmouthCountyLocations } from '@/lib/locations';

interface ServiceAreaMapProps {
  height?: string;
  showControls?: boolean;
  highlightLocation?: string;
}

export default function ServiceAreaMap({ 
  height = '600px', 
  showControls = true,
  highlightLocation 
}: ServiceAreaMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const markersRef = useRef<google.maps.Marker[]>([]);
  const infoWindowRef = useRef<google.maps.InfoWindow | null>(null);

  useEffect(() => {
    const initMap = async () => {
      const loader = new Loader({
        apiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '',
        version: 'weekly',
      });

      const { Map } = await loader.importLibrary('maps');
      const { Marker } = await loader.importLibrary('marker');
      const { InfoWindow } = await loader.importLibrary('maps');

      if (mapRef.current && !map) {
        // Create map centered on Monmouth County
        const monmouthCenter = { lat: 40.2583, lng: -74.2020 };
        
        const mapInstance = new Map(mapRef.current, {
          center: monmouthCenter,
          zoom: 10,
          mapTypeControl: showControls,
          streetViewControl: false,
          fullscreenControl: showControls,
          styles: [
            {
              featureType: 'all',
              elementType: 'geometry',
              stylers: [{ color: '#f5f5f5' }]
            },
            {
              featureType: 'water',
              elementType: 'geometry',
              stylers: [{ color: '#c9c9c9' }]
            },
            {
              featureType: 'water',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#9e9e9e' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry',
              stylers: [{ color: '#ffffff' }]
            },
            {
              featureType: 'road',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#e0e0e0' }]
            },
            {
              featureType: 'road',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#5C1F33' }] // Burgundy color for road labels
            },
            {
              featureType: 'poi',
              elementType: 'geometry',
              stylers: [{ color: '#eeeeee' }]
            },
            {
              featureType: 'poi',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#757575' }]
            },
            {
              featureType: 'administrative',
              elementType: 'geometry.stroke',
              stylers: [{ color: '#c9c9c9' }]
            },
            {
              featureType: 'administrative.locality',
              elementType: 'labels.text.fill',
              stylers: [{ color: '#5C1F33' }] // Burgundy for town names
            }
          ]
        });

        // Create info window
        const infoWindow = new InfoWindow();
        infoWindowRef.current = infoWindow;

        // Add markers for each location
        monmouthCountyLocations.forEach((location) => {
          const isHighlighted = location.slug === highlightLocation;
          
          const marker = new Marker({
            position: location.coordinates,
            map: mapInstance,
            title: location.name,
            icon: {
              path: google.maps.SymbolPath.CIRCLE,
              scale: isHighlighted ? 12 : 10,
              fillColor: isHighlighted ? '#5C1F33' : '#C5A572', // Burgundy for highlighted, Gold for others
              fillOpacity: 1,
              strokeColor: '#ffffff',
              strokeWeight: 2,
            },
            animation: isHighlighted ? google.maps.Animation.BOUNCE : undefined,
          });

          // Add click listener
          marker.addListener('click', () => {
            setSelectedLocation(location);
            
            const content = `
              <div class="p-4 max-w-xs">
                <h3 class="font-semibold text-burgundy text-lg mb-2">${location.name}</h3>
                <p class="text-gray-600 text-sm mb-3">Population: ${location.population?.toLocaleString() || 'N/A'}</p>
                ${location.description ? `<p class="text-gray-700 text-sm mb-3">${location.description}</p>` : ''}
                <div class="flex gap-2">
                  <a href="/locations/${location.slug}" 
                     class="inline-block bg-burgundy text-white px-4 py-2 rounded text-sm hover:bg-burgundy-dark transition-colors">
                    View Details
                  </a>
                  <a href="/services/kitchen-remodeling/${location.slug}" 
                     class="inline-block bg-gold text-white px-4 py-2 rounded text-sm hover:bg-gold-dark transition-colors">
                    Our Services
                  </a>
                </div>
              </div>
            `;
            
            infoWindow.setContent(content);
            infoWindow.open(mapInstance, marker);
          });

          markersRef.current.push(marker);
        });

        // Service radius circle removed - showing only Monmouth County boundary

        // Draw Monmouth County boundary with more accurate coordinates
        const monmouthCountyBounds = [
          // Starting from northeast corner, going clockwise
          { lat: 40.4896, lng: -74.0641 }, // Northeast (Sandy Hook area)
          { lat: 40.4650, lng: -74.0100 }, // Atlantic Highlands
          { lat: 40.4200, lng: -73.9800 }, // Sea Bright
          { lat: 40.3500, lng: -73.9600 }, // Long Branch
          { lat: 40.2950, lng: -73.9850 }, // Deal
          { lat: 40.2200, lng: -74.0000 }, // Asbury Park
          { lat: 40.1786, lng: -74.0100 }, // Neptune
          { lat: 40.1200, lng: -74.0300 }, // Spring Lake
          { lat: 40.0786, lng: -74.0641 }, // Southeast (Manasquan)
          { lat: 40.0800, lng: -74.1500 }, // South (Howell)
          { lat: 40.1000, lng: -74.2500 }, // Southwest
          { lat: 40.1500, lng: -74.3142 }, // Jackson border
          { lat: 40.2200, lng: -74.3200 }, // West (Millstone)
          { lat: 40.3000, lng: -74.3000 }, // Manalapan
          { lat: 40.3500, lng: -74.2800 }, // Freehold Township
          { lat: 40.4000, lng: -74.2500 }, // Marlboro
          { lat: 40.4500, lng: -74.2200 }, // Holmdel
          { lat: 40.4800, lng: -74.1500 }, // Middletown
          { lat: 40.4896, lng: -74.0641 }, // Back to northeast
        ];

        new google.maps.Polygon({
          paths: monmouthCountyBounds,
          strokeColor: '#5C1F33',
          strokeOpacity: 0.8,
          strokeWeight: 2,
          fillColor: '#5C1F33',
          fillOpacity: 0.05,
          map: mapInstance
        });

        setMap(mapInstance);
      }
    };

    initMap();

    return () => {
      // Cleanup markers
      markersRef.current.forEach(marker => marker.setMap(null));
      markersRef.current = [];
    };
  }, [highlightLocation, showControls]);

  return (
    <div className="relative">
      {/* Map Title */}
      <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-sm rounded-lg shadow-lg px-4 py-2">
        <h3 className="text-lg font-semibold text-burgundy">Monmouth County, New Jersey</h3>
        <p className="text-sm text-gray-600">Our Service Area</p>
      </div>
      
      <div 
        ref={mapRef} 
        className="w-full rounded-lg shadow-lg"
        style={{ height }}
      />
      
      {!process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY && (
        <div className="absolute inset-0 bg-gray-100 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <p className="text-gray-600 mb-2">Interactive Map Coming Soon</p>
            <p className="text-sm text-gray-500">Google Maps API key required</p>
          </div>
        </div>
      )}
      
      {/* Location List for Mobile */}
      <div className="lg:hidden mt-6">
        <h3 className="text-lg font-semibold text-burgundy mb-4">Our Service Areas:</h3>
        <div className="grid grid-cols-2 gap-2">
          {monmouthCountyLocations.map((location) => (
            <Link
              key={location.slug}
              href={`/locations/${location.slug}`}
              className="text-sm text-gray-700 hover:text-gold transition-colors"
            >
              {location.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}