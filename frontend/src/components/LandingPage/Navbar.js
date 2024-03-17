import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Navbar({user}) {
  const navigate = useNavigate();

  function settings() {
    navigate('/settings');
  }

  return (
    <div className="navbar">
      <img src="/images/newlogo2.png" alt="StudyHub Logo" />
      <div>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact us</a>
        <a href="#admin">Admin Display</a>
        {user && user.role === "lecturer" && <Link to="/settings" onClick={settings}>Settings</Link>}
        <Link to="/login">Log in</Link>
      </div>
    </div>
  );
}


export default Navbar;
