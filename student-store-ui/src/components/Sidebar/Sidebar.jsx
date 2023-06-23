import React, { useState } from 'react';
import './Sidebar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Sidebar = ({
  shoppingCart,
  products,
  checkoutForm, // an object representing the form data for checkout
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {

  // keeps track of whether sidebar is open
  const [isOpen, setIsOpen] = useState(false); 

  // to toggle the value of isOpen when the toggle button is clicked 
  // calls setIsOpen with the negation pf the current isOpen value thus toggling it
  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      {/* handles the toggle functionalitywith onClick */}
      <div className="toggle-button" onClick={handleOnToggle}>

        {/* dynamic className by whether isOpen is true or false */}
        {/* if true, className is arrow lef, otherwise, arrow right */}
        <i className={`arrow ${isOpen ? 'left' : 'right'}`}></i>
      </div>
      {/* if isOpen is ture, it renders the contents of the sidebar (shopping cart and checkout form) */}
      {isOpen && (
        <div className="content">
          <ShoppingCart 
            products={products}
            shoppingCart={shoppingCart}
          />
          <CheckoutForm
            isOpen={isOpen}
            shoppingCart={shoppingCart}
            checkoutForm={checkoutForm}
            handleOnCheckoutFormChange={handleOnCheckoutFormChange}
            handleOnSubmitCheckoutForm={handleOnSubmitCheckoutForm}
          />
        </div>
      )}
    </section>
  );
};

export default Sidebar;
