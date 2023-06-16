import React from 'react'
import { Link } from 'react-router-dom';
import './Logo.css'


const Logo = () => {
  return (
    // display Logo in navbar and links to homepage
    <div className="logo">
    <Link to="/">
    <img src="https://logodix.com/logo/844017.jpg" alt="Logo" /></Link>
  </div>
  )
}

export default Logo
