import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Home from '../Home/Home';
import Sidebar from '../Sidebar/Sidebar'; // not used in ui/this project
import ProductDetail from '../ProductDetail/ProductDetail';
import NotFound from '../NotFound/NotFound';
import About from '../About/About';
import Contact from '../Contact/Contact';

const App = () => {
  // Define state variables
  const [products, setProducts] = useState([]); // Store the fetched products
  const [shoppingCart, setShoppingCart] = useState([]); // Store the user's shopping cart
  const [isOpen, setIsOpen] = useState(false); // Toggle the sidebar open/closed state

  // the useEffect hook is used to fetch products from the API when the component mounts
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
        console.log('Data fetched from API:', response.data);

        // Check if the response data contains a 'products' key that is an array before setting it to state
        if (response.data && Array.isArray(response.data.products)) {
          setProducts(response.data.products);
        } else {
          console.log('Error: Expected an object containing a products array but got:', response.data);
        }
      } catch (error) {
        console.log('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Handler function to add an item to the shopping cart
  const handleAddItemToCart = (productId) => {
    setShoppingCart(prevCart => {
      const existingItemIndex = prevCart.findIndex(item => item.itemId === productId);

      if (existingItemIndex === -1) {
        const product = products.find(product => product.id === productId);
        return [...prevCart, { itemId: productId, quantity: 1, price: product.price }];
      }

      const updatedCart = [...prevCart];
      updatedCart[existingItemIndex].quantity += 1;

      return updatedCart;
    });
  };

  // Handler function to remove an item from the shopping cart
  const handleRemoveItemFromCart = (productId) => {
    setShoppingCart((prevCart) => {
      const existingItemIndex = prevCart.findIndex((item) => item.itemId === productId);

      if (existingItemIndex === -1) return prevCart; // Item not found in cart

      const updatedCart = [...prevCart];
      const existingItem = updatedCart[existingItemIndex];

      // If the quantity is more than 1, decrement it. Otherwise, remove the item from the cart.
      if (existingItem.quantity > 1) {
        existingItem.quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }

      return updatedCart;
    });
  };


  return (
    <Router>
      {/* Render the Navbar component */}
      <Navbar />
      {/* Render the Sidebar component */}
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      {/* Define routes if website*/}
      <Routes>
        {/* Route components are used to map the routes to their respective components (Home, ProductDetail, About, Contact, NotFound) */}
        <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} shoppingCart={shoppingCart} />} />
        <Route path="/store/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} handleRemoveItemFromCart={handleRemoveItemFromCart} products={products} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
