import React from 'react';
import './CheckoutForm.css';

// Define the CheckoutForm component
const CheckoutForm = ({
  isOpen, // Prop to control whether the form is open or not
//   shoppingCart, // Prop that contains the shopping cart items
  checkoutForm = { email: '', name: '' }, // Prop for the checkout form data (default values if not provided)
  handleOnCheckoutFormChange, // Prop function to handle changes to the form inputs
  handleOnSubmitCheckoutForm, // Prop function to handle form submission
}) => {
  // Handle input change and pass the updated values to the parent component
  const handleInputChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target (input element)
    handleOnCheckoutFormChange(name, value); // Pass them to the parent handler
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior
    handleOnSubmitCheckoutForm(); // Call the parent handler for form submission
  };

  // Render the component
  return (
    // Conditionally add the 'open' class based on the isOpen prop
    <div className={`checkout-form ${isOpen ? 'open' : ''}`}>
      {/* Define the form */}
      <form onSubmit={handleSubmit}>
        {/* Input field for email */}
        <input
          className="checkout-form-input" // Apply CSS class for styling
          type="email" // Specify the type of input
          name="email" // Name property used to identify the input
          placeholder="student@codepath.org" // Placeholder text
          value={checkoutForm.email} // Controlled component value
          onChange={handleInputChange} // Handle changes to this input
        />
        {/* Input field for name */}
        <input
          className="checkout-form-input" // Apply CSS class for styling
          type="text" // Specify the type of input
          name="name" // Name property used to identify the input
          placeholder="Student Name" // Placeholder text
          value={checkoutForm.name} // Controlled component value
          onChange={handleInputChange} // Handle changes to this input
        />
        {/* Submit button */}
        <button className="checkout-button" type="submit">
          Checkout
        </button>
      </form>
    </div>
  );
};

// Export the CheckoutForm component for use in other parts of the application
export default CheckoutForm;


