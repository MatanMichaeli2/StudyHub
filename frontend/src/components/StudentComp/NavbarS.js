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
        <Link to="/">Home</Link>
        <a href="#contact">Contact us</a>
        <a href="#admin">Admin Display</a>
        <Link to="/settings" onClick={settings}>Settings</Link>
        <Link to="/study-groups">Study Groups</Link>

      </div>
    </div>
  );
}


export default Navbar;
