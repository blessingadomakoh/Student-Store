import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import NotFound from '../NotFound/NotFound'
import ProductView from '../ProductView/ProductView'

const ProductDetail = ({ handleAddItemToCart, handleRemoveItemFromCart }) => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`);
        setProduct(response.data);
      } catch (error) {
        setProduct(null);
      }
    };

    fetchProduct();
  }, [productId]);

  if (product === null) {
    return <NotFound />;
  }

return (
  <div className="product-detail">
    {product ? (
      <ProductView product={product} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} />
    ) : (
      <h1>Loading...</h1>
    )}
  </div>
);

};

export default ProductDetail;
