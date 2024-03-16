// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link>
        <img src="/images/newlogo2.png" alt="StudyHub Logo" className="logo" />
      </Link>
      <Link to="/teacher" className="homepage-link">Home</Link>
    </nav>
  );
}

export default Navbar;
