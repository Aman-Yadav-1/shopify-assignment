import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// bottleImages and selectedVariant must be passed in from parent if needed for fallback

const ProductGallery = ({ images, selectedVariant }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="relative bg-gray-50 rounded-lg overflow-hidden aspect-square">
        <img 
          src={images[currentImageIndex]?.url}
          alt="Product"
          className="w-full h-full object-contain p-8"
        />
        {/* Navigation Arrows */}
        <button 
          onClick={prevImage}
          className="absolute left-4 bottom-4 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 border border-gray-200"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button 
          onClick={nextImage}
          className="absolute right-4 bottom-4 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center hover:bg-gray-50 border border-gray-200"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-1">
          {[0,1,2,3].map((index) => (
            <button
              key={index}
              onClick={() => setCurrentImageIndex(index)}
              className={`w-2 h-2 rounded-full ${
                index === currentImageIndex ? 'bg-black' : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      {/* Thumbnail Grid - 5 columns, 2 rows */}
      <div className="grid grid-cols-5 gap-2">
        {images.slice(0, 10).map((image, index) => (
          <button
            key={image.id}
            onClick={() => setCurrentImageIndex(index)}
            className={`aspect-square bg-gray-50 rounded-lg overflow-hidden border ${
              index === currentImageIndex ? 'border-black border-2' : 'border-gray-200'
            }`}
          >
            <img 
              src={image.url} 
              alt={image.alt}
              className="w-full h-full object-contain p-1"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default ProductGallery;
