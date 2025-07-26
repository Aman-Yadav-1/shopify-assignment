import React from "react";
import FlavorSelector from "./FlavorSelector";
import { Check } from "lucide-react";

const DoubleDrinkFlavorSelector = ({ selectedFlavors, onFlavorChange, bottleImages }) => {
  const handleFlavorSelect = (flavorValue, flavorIndex) => {
    const newFlavors = [...selectedFlavors];
    newFlavors[flavorIndex] = flavorValue;
    onFlavorChange(newFlavors);
  };

  return (
    <div className="p-6 border border-gray-200 bg-white">
      {/* Choose Flavor 1 */}
      <FlavorSelector
        title="Choose Flavor 1"
        selectedFlavor={selectedFlavors[0]}
        onFlavorChange={(flavor) => handleFlavorSelect(flavor, 0)}
        name="flavor-1"
        bottleImages={bottleImages}
      />
      {/* Choose Flavor 2 */}
      <FlavorSelector
        title="Choose Flavor 2"
        selectedFlavor={selectedFlavors[1]}
        onFlavorChange={(flavor) => handleFlavorSelect(flavor, 1)}
        name="flavor-2"
        bottleImages={bottleImages}
      />
      {/* What's Included */}
      <div>
        <h3 className="text-sm font-semibold text-gray-900 mb-6">What's Included:</h3>
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Every 30 Days */}
          <div className="border border-gray-200 rounded-lg p-4 text-center bg-gray-50">
            <div className="text-sm text-gray-600 mb-3">Every 30 Days</div>
            <div className="flex justify-center gap-1.5">
              {selectedFlavors.filter(f => f).map((flavor, index) => (
                <img 
                  key={index}
                  src={bottleImages[flavor]} 
                  alt={`${flavor} bottle`}
                  className="w-6 h-8 object-contain"
                />
              ))}
            </div>
          </div>
          {/* One Time (Free) */}
          <div className="border border-gray-200 rounded-lg p-4 text-center bg-gray-50">
            <div className="text-sm text-gray-600 mb-3">
              One Time <span className="text-orange-500 font-medium">(Free)</span>
            </div>
            <div className="flex justify-center gap-1.5">
              <img 
                src={bottleImages.chocolate} 
                alt="Free chocolate"
                className="w-6 h-8 object-contain"
              />
              <img 
                src={bottleImages.orange} 
                alt="Free orange"
                className="w-6 h-8 object-contain"
              />
            </div>
          </div>
        </div>
        {/* Benefits List */}
        <div className="space-y-2">
          {[
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit",
            "Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit"
          ].map((benefit, index) => (
            <div key={index} className="flex items-start">
              <Check className="w-4 h-4 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
              <span className="text-sm text-gray-700 leading-tight">{benefit}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DoubleDrinkFlavorSelector;
