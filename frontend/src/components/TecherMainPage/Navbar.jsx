// Navbar.js
import { Link } from 'react-router-dom';
import React from 'react';
import './Navbar.css'

function Navbar() {
  return (
    <nav>
      <ul>
        <li><a href="#home">Home</a></li>
        <li><a href="#study-groups">Study Groups</a></li>
        {/* Add more links as needed */}
      </ul>
    </nav>
  );
}

export default Navbar;
