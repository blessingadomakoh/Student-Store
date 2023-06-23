import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({
  isOpen,
  checkoutForm = { email: '', name: '' },
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {

  // Local state to handle success and error messages
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleOnCheckoutFormChange(name, value);
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const receiptMessage = await handleOnSubmitCheckoutForm();

      // Display the receipt message
      setMessage(receiptMessage);
      setIsError(false);

    // Reset the input fields by triggering the change handler with empty values
    handleOnCheckoutFormChange('email', '');
    handleOnCheckoutFormChange('name', '');
      
    } catch (error) {
      // If there's an error, display the error message
      setMessage('An error occurred during checkout.');
      setIsError(true);
    }
  };

  return (
    <div className={`checkout-form ${isOpen ? 'open' : ''}`}>
      <form onSubmit={handleSubmit}> 
      <label htmlFor="name">Name:</label>
        <input
        id="name"
        className="checkout-form-input"
        type="text"
        name="name"
        placeholder="Student Name"
        value={checkoutForm.name}
        onChange={handleInputChange}
        />

        <label htmlFor="email">Email:</label>
        <input
        id="email"
        className="checkout-form-input"
        type="email"
        name="email"
        placeholder="student@codepath.org"
        value={checkoutForm.email}
        onChange={handleInputChange}
        />

        <button className="checkout-button" type="submit">
          Checkout
        </button>
      </form>
      {/* Display success or error message */}
      {message && (
        <div className={isError ? 'error' : 'success'}>
          {message.split('\n').map((line, index) => <div key={index}>{line}</div>)}
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;



