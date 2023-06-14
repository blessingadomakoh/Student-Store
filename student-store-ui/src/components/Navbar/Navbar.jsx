import React from 'react';
import { Link } from 'react-router-dom';
import TwitterIcon from '../FacebookIcon/FacebookIcon';
import FacebookIcon from '../TwitterIcon/TwitterIcon';
import InstagramIcon from '../InstagramIcon/InstagramIcon'
import './Navbar.css'



const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
        <img src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/wfsonfv0p92plryzwijf" alt="Logo" />        </Link>
      </div>
      <div className="social-icons">
        <a href="https://twitter.com">
          <TwitterIcon />
        </a>
        <a href="https://www.facebook.com">
          <FacebookIcon />
        </a>
        <a href="https://www.instagram.com">
          <InstagramIcon />
        </a>
      </div>
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
        <li>
          <Link to="/" onClick={(e) => {
            e.preventDefault();
            document.getElementById('products-section').scrollIntoView({ behavior: 'smooth' });
          }}>Buy Now</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;



