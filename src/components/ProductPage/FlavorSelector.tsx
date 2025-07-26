import React from "react";
import CustomRadio from "./CustomRadio";

// bottleImages must be passed in from parent if needed

const FlavorSelector = ({ title, selectedFlavor, onFlavorChange, name, bottleImages }) => {
  const flavors = [
    { value: 'chocolate', label: 'Chocolate', image: bottleImages.chocolate },
    { value: 'vanilla', label: 'Vanilla', image: bottleImages.vanilla },
    { value: 'orange', label: 'Orange', image: bottleImages.orange }
  ];

  return (
    <div className="mb-8">
      <div className="flex items-center mb-6">
        <h3 className="text-base font-semibold text-gray-900 mr-3">{title}</h3>
        <span className="bg-orange-600 text-white text-[10px] font-semibold rounded-sm px-2 py-1 leading-3">
          BEST-SELLER
        </span>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {flavors.map((flavor) => (
          <div key={flavor.value} className="cursor-pointer" onClick={() => onFlavorChange(flavor.value)}>
            <div className="flex flex-col items-center bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-gray-300 transition-colors">
              <div className="w-16 h-20 flex items-center justify-center mb-4">
                <img 
                  src={flavor.image} 
                  alt={flavor.label}
                  className="w-10 h-12 object-contain"
                />
              </div>
              <span className="text-sm font-medium text-gray-700 mb-3">{flavor.label}</span>
              <CustomRadio
                checked={selectedFlavor === flavor.value}
                onChange={() => onFlavorChange(flavor.value)}
                name={name}
                value={flavor.value}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlavorSelector;
