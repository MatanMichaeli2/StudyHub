// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';
import './StudentCss/Menu.css'

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home page</Link></li>
        <li><Link to="/study-groups">Create Study Group</Link></li>
        <li><Link to="/settings">User settings</Link></li>

      </ul>
    </nav>
  );
}

export default Menu;
