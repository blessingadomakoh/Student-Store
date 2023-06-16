import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import ProductView from '../ProductView/ProductView'
import NotFound from '../NotFound/NotFound'

const ProductDetail = ({ handleAddItemToCart }) => {
  const { productId } = useParams(); // extracts value of productId parameter from URL; used to make API request and identify the specific product
  const [product, setProduct] = useState(); // updated with the product data fetched from the API
  const [loading, setLoading] = useState(true); // set to true to say API request is in progress; fales once request is done
  const [error, setError] = useState(false); // set to false initially to indicate there's no initial error


  // this hook is used to fetch the product data from the API based on the productId
  // runs once when the component mounts and whenever the productId changes
  // sets the product data, handles loading and error states accordingly
  useEffect(() => {
    axios.get(`https://codepath-store-api.herokuapp.com/store/${productId}`)
    .then(response => {
        setProduct(response.data.product);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data: ', error);
        setError(true);
        setLoading(false);
      });
  }, [productId]);
  

  // used to display a loading message while the API request is in progress
  // it shows the text "Loading..." to indicate that the data is being fetched
  if (loading) {
    return <h1 className="loading">Loading...</h1>;
  }


  if (error || !product) {
    return <NotFound/>;
  }


  
  return (
    <>
      <ProductView
        product={product}
        productId={productId}
        handleAddItemToCart={handleAddItemToCart}
      />
    </>
);
};

export default ProductDetail;
