//  Renders the about section, providing information 
// about the College of CodePath or any other relevant details about the store.

import React from "react";
import "./About.css"

const About = () => {
    return (
        <div id="about">
            {/* Title */}
            <h1 className="about-title">About</h1>
            {/* Description */}
            <p className="about">Thank you for shopping with us <br />
                and supporting black-owned businesses.<br /><br />
                See you again!</p>
        </div>
    );
}

export default About;



