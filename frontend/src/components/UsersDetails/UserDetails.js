import React from 'react';
import './UserDetails.css';

const UserDetails = ({ user }) => {
  return (
    <div>
    <h4>{user.name.charAt(0)}</h4>
    <div variant="h5">{user.name}</div>
        <div>Email: {user.email}</div>
        <div>Role: {user.role}</div>
        <div>Date Joined: {user.dateJoined}</div>
        <div>Last Login: {user.lastLogin}</div>
    </div>

  );
};

export default UserDetails;

