import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import bottleChocolate from "../assets/bottle-chocolate.png";
import bottleVanilla from "../assets/bottle-vanilla.png";
import bottleOrange from "../assets/bottle-orange.png";
import CustomRadio from "../components/ProductPage/CustomRadio";
import ProductGallery from "@/components/ProductPage/ProductGallery";
import FlavorSelector from "@/components/ProductPage/FlavorSelector";
import SingleDrinkFlavorSelector from "@/components/ProductPage/SingleDrinkFlavorSelector";
import DoubleDrinkFlavorSelector from "@/components/ProductPage/DoubleDrinkFlavorSelector";

// Product bottle images
const bottleImages = {
  chocolate: bottleChocolate,
  vanilla: bottleVanilla,
  orange: bottleOrange,
};

// Mock product data
const productData = {
  title: "Lorem Ipsum",
  description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi eu felis vel ex aliquam interdum id nec orci. Fusce eu neque non elit efficitur dapibus quis ut erat.",
  images: [
    { id: '1', url: bottleImages.chocolate, alt: 'Chocolate Protein Drink' },
    { id: '2', url: bottleImages.vanilla, alt: 'Vanilla Protein Drink' },
    { id: '3', url: bottleImages.orange, alt: 'Orange Protein Drink' },
    { id: '4', url: bottleImages.chocolate, alt: 'Chocolate variant' },
    { id: '5', url: bottleImages.vanilla, alt: 'Vanilla variant' },
    { id: '6', url: bottleImages.orange, alt: 'Orange variant' },
    { id: '7', url: bottleImages.chocolate, alt: 'Brown bottle' },
    { id: '8', url: bottleImages.vanilla, alt: 'White bottle' },
    { id: '9', url: bottleImages.orange, alt: 'Orange bottle' },
    { id: '10', url: bottleImages.chocolate, alt: 'Extra bottle' },
  ]
};

// Main Product Page Component
export default function ProductPage() {
  const [selectedOption, setSelectedOption] = useState("single");
  const [selectedFlavors, setSelectedFlavors] = useState(["chocolate"]);

  // Reset flavors when subscription type changes
  useEffect(() => {
    if (selectedOption === "single") {
      setSelectedFlavors(["chocolate"]);
    } else {
      setSelectedFlavors(["chocolate", "vanilla"]);
    }
  }, [selectedOption]);

  const requiredSelections = selectedOption === "double" ? 2 : 1;
  const validSelections = selectedFlavors.filter(flavor => flavor).length;
  const isValidSelection = validSelections === requiredSelections;

  const handleAddToCart = () => {
    console.log("Adding to cart:", {
      subscriptionType: selectedOption,
      flavors: selectedFlavors.filter(f => f),
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          {/* Left Column - Product Gallery */}
          <div>
            <ProductGallery 
              images={productData.images}
              selectedVariant={selectedFlavors[0]}
            />
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            {/* Product Header */}
            <div className="space-y-3">
              <h1 className="text-3xl font-bold text-gray-900">{productData.title}</h1>
              <div className="flex items-center space-x-2">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${i < 4 ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'}`}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-600 leading-tight">4.6 (2,000+ reviews)</span>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed">{productData.description}</p>
            </div>

            {/* Subscription Options Container */}
            <div className="border border-gray-200 rounded-lg overflow-hidden">
              {/* Recommended Badge */}
              <div className="w-full bg-[#A2845E] text-white font-medium py-3 text-sm text-center">
                Recommended
              </div>

              {/* Single Drink Subscription */}
              <div className={`border-b border-gray-200 p-3 cursor-pointer transition-colors ${
                selectedOption === "single" ? 'bg-gray-50' : 'hover:bg-gray-25'
              }`} onClick={() => setSelectedOption("single")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CustomRadio
                      checked={selectedOption === "single"}
                      onChange={() => setSelectedOption("single")}
                      name="subscription"
                      value="single"
                    />
                    <span className="text-sm font-medium text-gray-900">Single Drink Subscription</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$6.00</span>
                    <span className="text-sm text-gray-500 line-through">$10</span>
                  </div>
                </div>
              </div>

              {/* Show single drink content when selected */}
              {selectedOption === "single" && (
                <SingleDrinkFlavorSelector
                  selectedFlavors={selectedFlavors}
                  onFlavorChange={setSelectedFlavors}
                  bottleImages={bottleImages}
                />
              )}

              {/* Double Drink Subscription */}
              <div className={`p-3 cursor-pointer transition-colors ${
                selectedOption === "double" ? 'bg-gray-50' : 'hover:bg-gray-25'
              }`} onClick={() => setSelectedOption("double")}>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <CustomRadio
                      checked={selectedOption === "double"}
                      onChange={() => setSelectedOption("double")}
                      name="subscription"
                      value="double"
                    />
                    <span className="text-sm font-medium text-gray-900">Double Drink Subscription</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="text-lg font-bold text-gray-900">$12.00</span>
                    <span className="text-sm text-gray-500 line-through">$20</span>
                  </div>
                </div>
              </div>

              {/* Show double drink content when selected */}
              {selectedOption === "double" && (
                <DoubleDrinkFlavorSelector
                  selectedFlavors={selectedFlavors}
                  onFlavorChange={setSelectedFlavors}
                  bottleImages={bottleImages}
                />
              )}
            </div>

            {/* Add to Cart */}
            <button
              onClick={handleAddToCart}
              disabled={!isValidSelection}
              className={`w-full h-12 px-6 rounded-lg font-semibold text-sm transition-colors ${
                isValidSelection 
                  ? 'bg-black text-white hover:bg-gray-800' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}