// Renders the search functionality, allowing users to search 
// for specific products or content on the website.

import React from 'react';
import './Search.css'; 

const Search = ({ onSearch }) => {
    return (
        <div className="search-container">
            <input
                className="search-input"
                type="text"
                placeholder="Search..."
                // receives onSearch prop as a function and is triggered whenever the search input changes
                // when the input value changes, the onChange event handler is called, invoking the onSearch function with the current value
                // 
                onChange={(e) => onSearch(e.target.value)}
            />
        </div>
    );
};

export default Search;

