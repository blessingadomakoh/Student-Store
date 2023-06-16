// Renders the contact section, displaying contact information or 
// a contact form for users to reach out.

// Contact.jsx
import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div id="contact" className="contact">
            {/* an h2 element displaying the heading "Contact Us" */}
            <h2>Contact Us</h2>
            {/* contains contact information such as email, phone number, and address */}
            <div className="info">
                <span>Email: cybergirl@cs.org</span>
            </div>
            <div className="info">
                <span>Phone: 1-800-SHOP</span>
            </div>
            <div className="info">
                <span>Address: 123 Fake Street, San Francisco, CA</span>
            </div>
            <div className="social_icon">
                {/* contains three img elements representing social media icons for Facebook, Twitter, and Instagram */}
                <img src={'https://img.freepik.com/premium-vector/blue-social-media-logo_197792-1759.jpg'} alt="facebook" className="icon" />
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Logo_of_Twitter.svg/512px-Logo_of_Twitter.svg.png?20220821125553'} alt="twitter" className="icon"/>
                <img src={'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/2048px-Instagram_icon.png'} alt="instagram" className="icon"/>
            </div>
        </div>
    );
}

export default Contact;
