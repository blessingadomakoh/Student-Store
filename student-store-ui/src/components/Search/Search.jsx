// Renders the search functionality, allowing users to search 
// for specific products or content on the website.

import React from 'react';
import './Search.css'; // Import the CSS file

const Search = ({ onSearch }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search..."
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;

