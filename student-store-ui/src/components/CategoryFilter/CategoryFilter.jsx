// component for the visual purposes of selecting a category, not functioning purposes
import React from 'react';
import './CategoryFilter.css';

const CategoryFilter = ({ selectedCategory, onCategoryChange }) => {
    // the categories array stores the list of available categories
  const categories = ["All Categories", "Clothing", "Food", "Accessories", "Tech"];

  return (
    <div className="category-filter">
        {/* the categories array is mapped using the map function to render a button for each category */}
      {categories.map((category, index) => (
        <button
        // the key attribute is set to the index value to provide a unique identifier for each button 
          key={index}
      // the onClick event handler is set to call the onCategoryChange function with the selected category as an argument
          onClick={() => onCategoryChange(category)}
          // the className attribute is conditionally set based on whether the selectedCategory matches the current category being rendered
          // if they match, the selected class (in the css) is applied, indicating that the button is selected
          className={selectedCategory === category ? 'selected' : ''}
        >
            {/* if the category is "All Categories", a hamburger icon is rendered using the <span> element */}
          {category === "All Categories" ? <span>☰ </span> : ''}
          {/* the category name is displayed within the button */}
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
