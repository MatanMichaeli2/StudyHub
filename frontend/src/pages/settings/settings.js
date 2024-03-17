import React from 'react';
import Navbar from '../../components/SettingsComp/SettingsNav';
import Heading from '../../components/SettingsComp/SettingsHeading';
import DeleteUser from '../../components/SettingsComp/DeleteUser';
import EditProfile from '../../components/SettingsComp/EditProfile';

import './settings.css';
function Settings() {
  const handleDeleteUser = () => {
    // Add logic to delete user
    console.log('Deleting user...');
  };


  const handleSaveProfile = async (updatedProfile) => {
    console.log('Saving profile...', updatedProfile);
    // Here, make an API call to the backend to update the user's information
    try {
      const response = await fetch('/users/update', { // Adjust the URL as needed
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedProfile),
      });

      const data = await response.json();
      if (response.ok) {
        console.log('Profile updated successfully:', data);
        // Handle success (e.g., show a success message, update local user data, etc.)
      } else {
        console.error('Failed to update profile:', data.message);
        // Handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error('Error updating profile:', error);
      // Handle error (e.g., show an error message)
    }
  };
  

  return (
    <div className="settings-page">
      {/* Navbar */}
      <Navbar />

      {/* Settings content */}
      <div className="settings-content">
        {/* Heading */}
        <Heading />

        {/* Edit profile */}
        <EditProfile onSave={handleSaveProfile} />

        {/* Delete User */}
        <DeleteUser onDelete={handleDeleteUser} />
      </div>
    </div>
  );
}

export default Settings;
