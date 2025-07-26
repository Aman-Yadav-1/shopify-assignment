# Shopify Product Page Assignment

## Overview

This project implements a fully functional, dynamic product page as per the [Shopify Developer Assignment Brief](https://www.figma.com/design/OHdAIFWznVMegt19ul7HDg/Shopify-Assignment-New?node-id=-1-3848-27lpastn170Hvng0-0). The page is built with React and Tailwind CSS, structured for easy integration with Shopify's backend APIs.

## Features

- **Product Media Gallery:**  
  - Image carousel with thumbnail navigation.
  - Main image updates on thumbnail click and reflects selected flavor/variant.

- **Purchase Options:**  
  - Two modes: Single Drink Subscription & Double Drink Subscription.
  - Dynamic UI updates for flavor selectors, pricing, and included items.
  - Pricing logic reflects subscription and sales discounts.

- **Flavor Selection:**  
  - Image swatches for Chocolate, Vanilla, and Orange.
  - Single mode: 1 flavor selector.
  - Double mode: 2 selectors (Flavor 1 & Flavor 2).
  - Selections required to proceed.

- **Dynamic Pricing & Discounts:**  
  - Pricing and compare-at-price logic (currently mocked, to be replaced with Shopify data).
  - Real-time price updates based on user selections.

- **"What's Included" Box:**  
  - Content updates based on selected mode.
  - Shows delivery frequency, included items, and benefits.

- **Add to Cart Logic:**  
  - Default selection adds the correct variant to cart.
  - Accurate variant(s) added based on user selections.

## Project Structure

```
src/
  assets/                # Product images (chocolate, vanilla, orange)
  components/
    ProductPage/         # All UI subcomponents for the product page
    ui/                  # Generic UI components (button, input, etc.)
  pages/
    ProductPage.tsx      # Main product page implementation
    Index.tsx            # Entry point (renders ProductPage)
  index.css              # Tailwind and design system
```

## Data Source

- **Current:**  
  - Product data, images, and pricing are mocked in `ProductPage.tsx`.
- **Shopify Integration:**  
  - Replace mock data with Shopify Storefront API calls to fetch:
    - Product variants, images, metafields, and pricing.
    - Subscription and discount logic.
  - All UI and logic are ready for dynamic data.

## Setup & Usage

1. **Install dependencies:**
   ```sh
   npm install
   # or
   yarn
   ```

2. **Run the development server:**
   ```sh
   npm run dev
   # or
   yarn dev
   ```

3. **Open in browser:**  
   Visit [http://localhost:5173](http://localhost:5173) (or your Vite/React dev server port).

4. **Shopify Integration:**  
   - Replace the mock product data in `ProductPage.tsx` with real data from Shopify's Storefront API.
   - Ensure all variant, pricing, and metafield logic is dynamic.

## Notes

- **All UI and state logic is componentized for maintainability.**
- **Styling is handled via Tailwind CSS and a custom design system in `index.css`.**
- **The code is ready for integration into a Shopify dev theme or app.**

## Evaluation Criteria

- Accurate Figma design implementation.
- Dynamic variant and pricing logic using Shopify backend.
- Responsive, accessible, and performant code.
- Clean code structure and documentation.

---

**For any questions or setup issues, please contact the project maintainer.**
