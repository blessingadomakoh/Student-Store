import React, { useState } from 'react';
import Hero from "../Hero/Hero";
import Search from "../Search/Search";
import CategoryFilter from "../CategoryFilter/CategoryFilter";
import ProductGrid from '../ProductGrid/ProductGrid';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';

// receives these props: products (an array of product objects), handleAddItemToCart (a function to handle adding an item to the shopping cart)
// handleRemoveItemFromCart (a function to handle removing an item from the shopping cart), and shoppingCart (an array representing the user's shopping cart)
const Home = ({ products, handleAddItemToCart, handleRemoveItemFromCart, shoppingCart }) => {
  // uses the useState hook to manage the search query and selected category state
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');

  // updates the search query state based on the user's input
  const handleSearch = (query) => {
    setSearchQuery(query.toLowerCase());
  };

  //updates the selected category state when a category is selected
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // variable holds an array of products after applying filters based on the search query and selected category
  const filteredProducts = products.filter(product =>
    
    // checks if the lowercase name of the product includes the lowercase search query 
    // it uses the includes method to perform a case-insensitive search. if the product name contains the search query, it satisfies this part of the condition
    product.name.toLowerCase().includes(searchQuery) &&

    // checks if the lowercase selected category matches the lowercase category of the product. it also handles the case when the selected category is "All Categories" by checking if it matches any product category
    // if the selected category matches the product's category or the selected category is "All Categories", it satisfies this part of the condition
    (selectedCategory.toLowerCase() === 'all categories' || product.category.toLowerCase() === selectedCategory.toLowerCase())
  );

  return (
    // displays specified components on homepage 
    <div className="home">
      <Hero />
      {/* allows users to search for products */}
      <Search onSearch={handleSearch} />
      {/* enables users to filter products by category */}
      <CategoryFilter selectedCategory={selectedCategory} onCategoryChange={handleCategoryChange} />
      {/* displays the filtered products in a grid layout */}
      <ProductGrid
        products={filteredProducts}
        handleAddItemToCart={handleAddItemToCart}
        handleRemoveItemFromCart={handleRemoveItemFromCart}
        shoppingCart={shoppingCart}
      />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

