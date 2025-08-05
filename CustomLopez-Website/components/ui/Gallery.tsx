'use client';

import { useState } from 'react';
import Image from 'next/image';

interface GalleryImage {
  src: string;
  alt: string;
  title?: string;
}

interface GalleryProps {
  images: GalleryImage[];
  columns?: 2 | 3 | 4;
}

export default function Gallery({ images, columns = 3 }: GalleryProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const getGridCols = () => {
    switch (columns) {
      case 2:
        return 'grid-cols-1 md:grid-cols-2';
      case 3:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
      case 4:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';
      default:
        return 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';
    }
  };

  return (
    <>
      <div className={`grid ${getGridCols()} gap-6`}>
        {images.map((image, index) => (
          <div 
            key={index} 
            className="group cursor-pointer"
            onClick={() => setSelectedImage(image)}
          >
            <div className="relative h-64 rounded-lg overflow-hidden shadow-lg">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-white/90 backdrop-blur-sm rounded-full p-3">
                  <svg className="w-6 h-6 text-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                  </svg>
                </div>
              </div>
            </div>
            {image.title && (
              <p className="mt-2 text-sm text-gray-600 text-center">{image.title}</p>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          
          <div className="max-w-5xl max-h-[90vh] relative">
            <Image
              src={selectedImage.src}
              alt={selectedImage.alt}
              width={1200}
              height={800}
              className="object-contain w-auto h-auto max-w-full max-h-[90vh]"
            />
            {selectedImage.title && (
              <p className="text-white text-center mt-4 text-lg">{selectedImage.title}</p>
            )}
          </div>
        </div>
      )}
    </>
  );
}