import React from 'react';
import '../StudentCss/HomePagecss.css'; 

function HomePage({ user }) {
  const fullName = user ? `${user.firstName} ${user.lastName}` : 'Student';

  return (
    <div className="home-page-container">
      <div className="welcome-message">
        <h2>Welcome, {fullName}!</h2> What would you like to do today?
      </div>
      <div className="registered-groups">
        <h2>Registered Study Groups</h2>
        <p>You are not registered in any study groups.</p>
      </div>
    </div>
  );
}

export default HomePage;
