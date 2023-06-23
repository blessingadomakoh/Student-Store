import React from 'react';
import './ShoppingCart.css';
// renders the shopping cart with the list of items, their quantities, prices, etc.


// 
const ShoppingCart = ({ isOpen, 
    products, // array of products 
    shoppingCart // array of items in cart
}) => {

  const taxRate = 0.0875;


  // calculates subtotal by iterating over shopping cart items
  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of shoppingCart) {

        // finds the corresponding product product for each item using the products array and adds the price multiplied by the quantity to the 'subtotal' variable
      const product = products.find((p) => p.id === item.itemId);
      if (product) {
        subtotal += product.price * item.quantity;
      }
    }
    return subtotal.toFixed(2);
  };

  // calculates the tax by by calling the calculateSubtotal function
  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * taxRate).toFixed(2);
  }


  // combines tax and subtotal functions to get total at 2 decimal places
  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxAmount = parseFloat(calculateTax());
    const total = subtotal + taxAmount;
    return total.toFixed(2);
  };

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
        {/* renders the list of products in a table format; maps over the shoppingCart using array and finds the corresponding product for each item */}
      {shoppingCart.length > 0 ? (
        <div>
          <h2>Shopping Cart</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {shoppingCart.map((item) => {
                const product = products.find((p) => p.id === item.itemId);
                if (product) {
                  return (
                    <tr key={item.itemId}>
                      <td className="cart-product-name">{product.name}</td>
                      <td className="cart-product-quantity">{item.quantity}</td>
                      <td>${(product.price * item.quantity).toFixed(2)}</td>
                    </tr>
                  );
                }
                return null;
              })}
            </tbody>
          </table>

            {/* renders charges with their respective values  */}
          <div className="subtotal">Subtotal: ${calculateSubtotal()}</div>
          <div className="tax">Tax and Fees: ${calculateTax()}</div>
          <div className="total-price">Total: ${calculateTotal()}</div>
        </div>
      ) : (
        // renders if shoppingcart is empty 
        <div className="notification">No items added to cart yet. Start shopping now!</div>
      )}
    </div>
  );
};

export default ShoppingCart;

