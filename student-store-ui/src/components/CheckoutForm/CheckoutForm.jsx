import React, { useState } from 'react';
import './CheckoutForm.css';

// responsible for rendering a form for user to enter their name and email for the checkout process
// handles input changes, form submission, and displays success or error messages based on the checkout result

const CheckoutForm = ({
  isOpen,  //boolean indicating whether form is open
  checkoutForm = { email: '', name: '' }, //an object with initial values for email and name
  handleOnCheckoutFormChange, //function to handle changes in the form inputs
  handleOnSubmitCheckoutForm, // function to handle form submission
}) => {

  // Local state to handle success and error messages
  // used to display the messages to user
  const [message, setMessage] = useState(''); 
  const [isError, setIsError] = useState(false);


  // handle changes in the form inputs 
  // extracts name and value properties from the input event target and calls the handleOnCheckoutFormChange prop function to update the form data
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    handleOnCheckoutFormChange(name, value);
  };


  // handle form submission
  // prevents the default form submission behavior 
  const handleSubmit = async (e) => {
    e.preventDefault();

    // invokes the handleOnSubmitCheckoutForm prop function
    // awaits the result of that function call to get the receiptMessage
    try {
      const receiptMessage = await handleOnSubmitCheckoutForm();

      // Display the receipt message if successful
      setMessage(receiptMessage);
      setIsError(false); // false because was successful

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
      <form onSubmit={handleSubmit}> {/* event handler */}
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
      {/* Display success or error message based on message set earlier*/}
      {message && (
        <div className={isError ? 'error' : 'success'}>
          {message.split('\n').map((line, index) => <div key={index}>{line}</div>)}
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;



