import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductView = ({ product, productId, handleAddItemToCart, handleRemoveItemFromCart }) => {

  return (
    <div className="product-view">
      <ProductCard
        product={product}
        productId={productId}
        showDescription={true}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
};

export default ProductView;


