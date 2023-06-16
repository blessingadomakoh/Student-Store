import React from 'react';
import { Link } from 'react-router-dom';
import './ProductCard.css';

const ProductCard = ({
  product, // this prop represent info about product object
  productId, // ID of product; used to construct the URL of product detail route and navigae to product page
  quantity, // quantity of product in shopping cart
  handleAddItemToCart, // function called when + is clicked, adds item to cart
  handleRemoveItemFromCart, // called when - is clicked, removes item from cart
  showDescription // boolean value that deterines whether to show descriptionf of product
}) => {

  const formattedPrice = `$${product.price}`;

  return (
    <div className="product-card">
      <div className="media">
        {/* clicking on image will navigate to product detail route using the productId */}
        <Link to={`/store/${productId}`}>
          <img src={product.image} alt={product.name} />
        </Link>
      </div>
      {/* displays the name of product */}
      <div className="product-name">{product.name}</div>
      {/* displays price */}
      <div className="product-price">{formattedPrice}</div>
      {/* if the showDescription prop is true, display */}
      {showDescription && (
       <div className="product-description">{product.description}</div>
      )}
      {/* displays quantity of product */}
      <div className="product-quantity">
        Quantity: {quantity}
      </div>
      {/* clicking on add and remove buttons calls handle function eith the productId as the argument */}
      <button className="add" onClick={() => handleAddItemToCart(productId)}>
        +
      </button>
      <button
        className="remove"
        onClick={() => handleRemoveItemFromCart(productId)}
      >
        -
      </button>
    </div>
  );
};

export default ProductCard;




