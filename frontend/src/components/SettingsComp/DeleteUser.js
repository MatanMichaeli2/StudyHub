// DeleteUser.js
import React from 'react';
import './settingsCss/deleteUser.css';

const DeleteUser = ({ onDelete }) => {
  return (
    <div className="delete-user">
      <button className="delete-button" onClick={onDelete}>Delete Account</button>
    </div>
  );
}

export default DeleteUser;
