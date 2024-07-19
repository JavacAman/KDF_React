import React from 'react';
import './Searchbar.css';

function SearchBar() {
  return (
    <div className="search-bar-container">
      <input type="text" className="search-input" placeholder="Search..." />
      <button className="search-button">Search</button>
    </div>
  );
}

export default SearchBar;
