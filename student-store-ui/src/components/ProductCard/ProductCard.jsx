// ProductCard.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({
  product,
  productId,
  quantity,
  handleAddItemToCart,
  handleRemoveItemFromCart,
  showDescription
}) => {
  const formattedPrice = `$${Number(product.price).toFixed(2)}`;

  return (
    <div className="product-card">
      <div className="media">
        <Link to={`/products/${productId}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      <div className="product-name">{product.name}</div>
      <div className="product-price">{formattedPrice}</div>
      {showDescription && (
        <div className="product-description">{product.description}</div>
      )}
      <div className="product-quantity">
        {quantity > 0 && `Quantity: ${quantity}`}
      </div>
      <button className="add" onClick={() => handleAddItemToCart(productId)}>
        Add to Cart
      </button>
      <button
        className="remove"
        onClick={() => handleRemoveItemFromCart(productId)}
      >
        Remove from Cart
      </button>
    </div>
  );
};

export default ProductCard;

