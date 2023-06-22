import React, { useState } from 'react';
import './CheckoutForm.css';

const CheckoutForm = ({
  isOpen,
  shoppingCart,
  products,
  checkoutForm = { email: '', name: '' },
  handleOnCheckoutFormChange,
  handleOnSubmitCheckoutForm,
}) => {
  const taxRate = 0.0875;

  // Local state to handle success and error messages
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleOnCheckoutFormChange(name, value);
  };

//   const calculateSubtotal = () => {
//     let subtotal = 0;
//     for (const item of shoppingCart) {
//       const product = products.find((p) => p.id === item.itemId);
//       if (product) {
//         subtotal += product.price * item.quantity;
//       }
//     }
//     return subtotal.toFixed(2);
//   };

//   const calculateTax = (subtotal) => (subtotal * taxRate).toFixed(2);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const receiptMessage = await handleOnSubmitCheckoutForm();

    //   const subtotal = parseFloat(calculateSubtotal());
    //   const tax = parseFloat(calculateTax(subtotal));
    //   const total = subtotal + tax;

    //   let receiptMessage = 'Receipt\nShowing receipt for "' + checkoutForm.name + '" available at "' + checkoutForm.email + '":\n\n';
      
      // Add the details of each item in the shopping cart
    //   for (const item of shoppingCart) {
    //     const product = products.find(p => p.id === item.itemId);
    //     if (product) {
    //       receiptMessage += `${item.quantity} total ${product.name} purchased at a cost of $${product.price.toFixed(2)} for a total cost of $${(product.price * item.quantity).toFixed(2)}.\n`;
    //     }
    //   }

      // Add the subtotal, tax, and total
    //   receiptMessage += `Before taxes, the subtotal was $${subtotal.toFixed(2)}\nAfter taxes and fees were applied, the total comes out to $${total.toFixed(2)}`;

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



