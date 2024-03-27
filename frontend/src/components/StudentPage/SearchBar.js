// SearchBar.js
import React from 'react';

const SearchBar = ({ onSearch }) => {
  return (
    <input type="text" placeholder="Search for lessons..." onChange={onSearch} />
  );
};

export default SearchBar;
