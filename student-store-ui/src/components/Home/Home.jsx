// import * as React from "react"
import "./Home.css"
import React, { useState, useEffect } from 'react';
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import ProductGrid from '../ProductGrid/ProductGrid'

const Home = ({ products, handleAddItemToCart, handleRemoveItemFromCart }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (query) => {
    setSearchQuery(query.toLowercase);
  };

  const filteredProducts = products.filter(product =>
    product.name.includes(searchQuery)
  );

  return (
    <div className="home">
      <Hero />
      <Search onSearch={handleSearch} />
      <ProductGrid
        products={filteredProducts}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
      />
    </div>
  );
};

export default Home;
