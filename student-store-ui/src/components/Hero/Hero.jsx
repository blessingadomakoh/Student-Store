//Renders the Hero section, which could be a prominent image or a promotional message 
// to grab the user's attention.

import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <h2>Welcome! <br /> Find Your Merch!</h2>
      <div className="intro">
        {/* brief description of the website and its offerings */}
        <p>We have all kinds of goodies. Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
        <img src="https://codepath-student-store-demo.surge.sh/assets/student_store_icon.18e5d61a.svg" alt="home to signify homepage of store" className="hero-img" />
      </div>
    </div>
  );
};

export default Hero;


