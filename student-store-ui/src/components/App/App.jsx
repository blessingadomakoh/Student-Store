import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import ProductGrid from '../ProductGrid/ProductGrid';
import About from '../About/About';
import Contact from '../Contact/Contact';
import Footer from '../Footer/Footer';
import Home from '../Home/Home';
import Sidebar from '../Sidebar/Sidebar';
import ProductDetail from '../ProductDetail/ProductDetail';
import NotFound from '../NotFound/NotFound';

const App = () => {
  const [products, setProducts] = useState([]);
  const [shoppingCart, setShoppingCart] = useState([]);
  const [checkoutForm, setCheckoutForm] = useState({ name: "", email: "" });
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
        try {
            const response = await axios.get('https://codepath-store-api.herokuapp.com/store');
            console.log('Data fetched from API:', response.data); // log the data that was fetched
            
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

  const handleRemoveItemFromCart = (productId) => {
      setShoppingCart(prevCart => {
          const existingItemIndex = prevCart.findIndex(item => item.itemId === productId);

          if (existingItemIndex === -1) return prevCart; // Item not found in cart
          
          const updatedCart = [...prevCart];
          updatedCart[existingItemIndex].quantity -= 1;

          // If the new quantity is 0, remove the item from the cart
          if (updatedCart[existingItemIndex].quantity === 0) {
              updatedCart.splice(existingItemIndex, 1);
          }

          return updatedCart;
      });
  };

  const handleOnCheckoutFormChange = (name, value) => {
      setCheckoutForm(prevForm => ({
          ...prevForm,
          [name]: value,
      }));
  };

  const handleOnSubmitCheckoutForm = async () => {
      const user = {
          name: checkoutForm.name,
          email: checkoutForm.email
      };

      const shoppingCartFormatted = shoppingCart.map(item => ({
          itemId: item.itemId,
          quantity: item.quantity,
      }));

      try {
          const response = await axios.post("https://codepath-store-api.herokuapp.com/store", {
              user: user,
              shoppingCart: shoppingCartFormatted
          });

          console.log("Order submitted successfully:", response.data);

          // You can reset the shoppingCart and checkoutForm here, if needed
          // setShoppingCart([]);
          // setCheckoutForm({ name: "", email: "" });

      } catch (error) {
          console.log("Error submitting order:", error);
      }
  };

return (
  <Router>
      <Navbar />
      <Sidebar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} />
      <Routes>
        <Route path="/" element={<Home products={products} handleAddItemToCart={handleAddItemToCart} />} />
        <Route path="/products/:productId" element={<ProductDetail handleAddItemToCart={handleAddItemToCart} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
  </Router>
);

};

export default App;