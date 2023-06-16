import React from 'react';
import ProductCard from '../ProductCard/ProductCard';
import './ProductGrid.css';

const ProductGrid = ({ products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) => {
  
  // If products is not an array, do not attempt to map over it
  if (!Array.isArray(products)) {
    return <div>Error: Products should be an array</div>;
  }

  return (
    <div id="products" className="product-grid">
      {products.map((product) => {
        // Find the quantity of this product in the shopping cart
        const cartItem = shoppingCart.find(item => item.itemId === product.id);
        const quantity = cartItem ? cartItem.quantity : 0;

        return (
          <ProductCard
            key={product.id}
            product={product}
            productId={product.id}
            quantity={quantity}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
            showDescription={false}
          />
        )
      })}
    </div>
  );
};

export default ProductGrid;



  
