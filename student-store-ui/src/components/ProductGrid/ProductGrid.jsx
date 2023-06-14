// Renders the product grid, displaying the available goods for users to browse. 
//This component may also include filtering options and sorting functionality.

// ProductGrid.jsx

import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart }) => {
  // Log products to console for debugging
  console.log('Products in ProductGrid:', products);

  // If products is not an array, do not attempt to map over it
  if (!Array.isArray(products)) {
    return <div>Error: Products should be an array</div>;
  }

  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          productId={product.id}
          quantity={product.quantity}
          handleAddItemToCart={handleAddItemToCart}
          handleRemoveItemFromCart={handleRemoveItemFromCart}
          showDescription={false}
        />
      ))}
    </div>
  );
};

export default ProductGrid;


  
