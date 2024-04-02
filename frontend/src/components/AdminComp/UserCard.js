import React from 'react';

function UserCard({ user }) {
  return (
    <div className="user-card">
      <p>Username: {user.username}</p>
      <p>First Name: {user.firstName}</p>
      <p>Last Name: {user.lastName}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserCard;
