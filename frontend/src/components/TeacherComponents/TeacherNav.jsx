import React from "react";
import { Link } from "react-router-dom";
import './TeacherCss/teachernav.css'

function TeacherNav() {
  return (
    <div className="navbar">
      <img src="/images/newlogo2.png" alt="StudyHub Logo" />
      <div>
        <a href="#about">About</a>
        <a href="#service">Services</a>
        <a href="#contact">Contact us</a>
        <a href="#settings">Settings</a>

      </div>
    </div>
  );
}

export default TeacherNav;