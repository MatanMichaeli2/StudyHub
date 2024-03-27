// Menu.js
import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/create-study-group">Create Study Group</Link></li>
        <li><Link to="/explorer">Explorer</Link></li>
        <li><Link to="/chats">Chats</Link></li>
      </ul>
    </nav>
  );
}

export default Menu;
