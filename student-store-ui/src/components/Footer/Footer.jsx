// Renders the footer section of the website, 
// typically containing links, copyright information, and any other relevant content.

import React from "react";
import "./Footer.css";


const Footer = () => {
  return (
    <footer className="footer">
        {/* five div elements with a className of "footer-section", each representing a section of the footer */}
      <div className="footer-section">
        {/* Each div contains an h3 element representing the section title and a ul element containing a list of items */}
        <h3>Categories</h3>
        <ul>
          <li>All Categories</li>
          <li>Clothing</li>
          <li>Food</li>
          <li>Accessories</li>
          <li>Tech</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Company</h3>
        <ul>
          <li>About Us</li>
          <li>Find a Store</li>
          <li>Terms</li>
          <li>Sitemap</li>
          <li>Careers</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Support</h3>
        <ul>
          <li>Contact Us</li>
          <li>Money Refund</li>
          <li>Order Status</li>
          <li>Shipping Info</li>
          <li>Open Dispute</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Account</h3>
        <ul>
          <li>Login</li>
          <li>Register</li>
          <li>Account Setting</li>
          <li>My Orders</li>
        </ul>
      </div>
      <div className="footer-section">
        <h3>Socials</h3>
        <ul>
          <li>Facebook</li>
          <li>Twitter</li>
          <li>LinkedIn</li>
          <li>Instagram</li>
          <li>YouTube</li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
