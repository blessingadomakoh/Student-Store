import React from 'react';
import ProductCard from '../ProductCard/ProductCard';

const ProductView = ({ product, productId, handleAddItemToCart, handleRemoveItemFromCart }) => {
  // The ProductView component receives the following props:
  // - product: The object representing the product to be viewed.
  // - productId: The id of the product.
  // - handleAddItemToCart: The function for adding an item to the shopping cart.
  // - handleRemoveItemFromCart: The function for removing an item from the shopping cart.

  return (
    <div className="product-view">
      {/* renders a single product card by invoking the ProductCard component*/}
      <ProductCard
        product={product}
        productId={productId}
        showDescription={true} // set to true to indicate the desription of the product should be shown in the ProductCard component
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
};

export default ProductView;


