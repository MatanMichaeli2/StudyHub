import React, { useState, useEffect } from 'react';
import './EditProfileCss/EditProfile.css';

function EditProfile({ currentUser }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
  });

  useEffect(() => {
    if (currentUser) {
      setFormData({
        firstName: currentUser.firstName || '',
        lastName: currentUser.lastName || '',
        username: currentUser.username || '',
        email: currentUser.email || '',
        password: '',
      });
    }
  }, [currentUser]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare data for update, exclude password if not changed
    const updateData = { ...formData };
    if (!formData.password) {
      delete updateData.password;
    }

    try {
      const response = await fetch('http://localhost:3001/users/updateByEmail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Profile updated successfully:', data);
        // Handle success
      } else {
        console.error('Failed to update profile:', data.message);
        // Handle failure
      }
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    }

    setIsEditing(false);
  };

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  return (
    <div className="edit-profile-container">
      {!isEditing && (
        <button onClick={toggleEdit} className="edit-profile-button">
          Edit Profile
        </button>
      )}
     {isEditing && (
        <div className="edit-profile-form-container active">
          <div className="edit-profile-box">
            <h2>Edit Profile</h2>
            <form onSubmit={handleSubmit}>
              <label htmlFor="firstName">First Name</label>
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} autoComplete="off" />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} autoComplete="off" />

              <label htmlFor="username">Username</label>
              <input type="username" name="username" value={formData.username} onChange={handleChange} autoComplete="off" />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" />

              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="new-password" />

              <button type="submit" className="edit-profile-button">Save Changes</button>
              <button type="button" onClick={toggleEdit} className="close-edit-button">Close Edit</button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditProfile;
