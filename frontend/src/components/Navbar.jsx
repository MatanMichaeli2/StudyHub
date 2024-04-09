import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate

function Navbar({ user }) {

  return (
    <div className="navbar">
      <img src="/images/newlogo2.png" alt="StudyHub Logo" />
      <div>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact us</a>
        <Link to="/study-groups">Study Groups</Link>
        {user && <Link to="/settings">Settings</Link>}
        {!user && <Link to="/login">Log in</Link>}
      </div>
    </div>
  );
}

export default Navbar;
