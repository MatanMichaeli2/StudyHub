import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <img src="/images/newlogo2.png" alt="StudyHub Logo" />
      <div>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact us</a>
        <a href="#admin">Admin Display</a>
         {/* <Link to="/login">Log in</Link>  */}
      </div>
    </div>
  );
}

export default Navbar;
