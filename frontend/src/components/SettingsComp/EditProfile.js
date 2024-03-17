import React, { useState } from 'react';
import './EditProfileCss/EditProfile.css';

function EditProfile({ onSave }) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formData);
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
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} />

              <label htmlFor="lastName">Last Name</label>
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} />

              <label htmlFor="email">Email</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} />

              <label htmlFor="password">Password</label>
              <input type="password" name="password" value={formData.password} onChange={handleChange} />

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
