import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'
import Logo from '../Logo/Logo';



const Navbar = () => {

  // responsible for scrolling to a specific element on the page when a link in the navbar is clicked
  // it uses the scrollIntoView method with the smooth behavior option to achieve a smooth scrolling effect
  const handleScrollTo = (elementId) => {
    document.getElementById(elementId).scrollIntoView({ behavior: 'smooth' });
  };

  return (
    // renders the navigation bar elements
    <nav className="navbar">
      {/* display logo in navbar*/}
      <Logo />
      {/* display social media icons */}
      <div className="socials">
        <img src={'https://www.iconpacks.net/icons/2/free-facebook-icon-2869-thumb.png'} alt="facebook" className="icon" />
        <img src={'https://cdn-icons-png.flaticon.com/512/1384/1384031.png'} alt="twitter" className="icon"/>
        <img src={'https://cdn.icon-icons.com/icons2/1143/PNG/512/twitterlogooutline_80724.png'} alt="instagram" className="icon"/>
      </div>
      {/* navigation links where onClick event handler is attached to each link, calling the handleScrollTo function with the corresponding element ID to scroll to */}
      <ul className="navbar-links">
      <li className="navbar-item"><Link to="/" onClick={() => handleScrollTo("home")}>Home</Link></li>
        <li className="navbar-item"><Link to="/" onClick={() => handleScrollTo("about")}>About Us</Link></li>
        <li className="navbar-item"><Link to="/" onClick={() => handleScrollTo("contact")}>Contact Us</Link></li>
        <li className="navbar-item"><Link to="/" onClick={() => handleScrollTo("products")}>Buy Now</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;



