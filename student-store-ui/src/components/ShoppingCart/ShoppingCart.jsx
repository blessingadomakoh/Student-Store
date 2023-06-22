import React from 'react';
import './ShoppingCart.css';

const ShoppingCart = ({ isOpen, products, shoppingCart }) => {
  const taxRate = 0.0875;

  const calculateSubtotal = () => {
    let subtotal = 0;
    for (const item of shoppingCart) {
      const product = products.find((p) => p.id === item.itemId);
      if (product) {
        subtotal += product.price * item.quantity;
      }
    }
    return subtotal.toFixed(2);
  };

  const calculateTax = () => {
    const subtotal = calculateSubtotal();
    return (subtotal * taxRate).toFixed(2);
  }

  const calculateTotal = () => {
    const subtotal = parseFloat(calculateSubtotal());
    const taxAmount = parseFloat(calculateTax());
    const total = subtotal + taxAmount;
    return total.toFixed(2);
  };

  return (
    <div className={`shopping-cart ${isOpen ? 'open' : ''}`}>
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
          <div className="subtotal">Subtotal: ${calculateSubtotal()}</div>
          <div className="tax">Tax and Fees: ${calculateTax()}</div>
          <div className="total-price">Total: ${calculateTotal()}</div>
        </div>
      ) : (
        <div className="notification">No items added to cart yet. Start shopping now!</div>
      )}
    </div>
  );
};

export default ShoppingCart;

