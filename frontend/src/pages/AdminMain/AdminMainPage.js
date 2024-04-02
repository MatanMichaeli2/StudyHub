import React, { useState, useEffect } from 'react';
import Footer from '../../components/TeacherComponents/Tfooter.js';
import '../../components/AdminComp/AdminCss/Apage.css';
import NavbarA from '../../components/AdminComp/NavbarA.js';
import UserCard from '../../components/AdminComp/UserCard.js';

function AdminPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/users/all')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error("There was an error fetching the user data:", error));
  }, []);

  return (
    <div className='Apage'>
      <div className="NavbarA">
        <NavbarA />
      </div>
      <h1>User's List:</h1>
      <div className="user-cards-container">
        {users.map(user => (
          <UserCard key={user._id} user={user} />
        ))}
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default AdminPage;
