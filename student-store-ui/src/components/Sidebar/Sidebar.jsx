import React, { useState } from 'react';
import './Sidebar.css';
import ShoppingCart from '../ShoppingCart/ShoppingCart';
import CheckoutForm from '../CheckoutForm/CheckoutForm';

const Sidebar = ({
  shoppingCart,
  products,
  checkoutForm,
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <div className="toggle-button" onClick={handleOnToggle}>
        <i className={`arrow ${isOpen ? 'left' : 'right'}`}></i>
      </div>
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
