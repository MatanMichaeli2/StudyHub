import React from 'react';
import Navbar from '../../components/SettingsComp/SettingsNav';
import Heading from '../../components/SettingsComp/SettingsHeading';
import DeleteUser from '../../components/SettingsComp/DeleteUser';
import './settings.css';
function Settings() {
  const handleDeleteUser = () => {
    // Add logic to delete user
    console.log('Deleting user...');
  };

  return (
    <div className="settings-page">
      {/* Navbar */}
      <Navbar />

      {/* Settings content */}
      <div className="settings-content">
        {/* Heading */}
        <Heading />

        {/* Delete User */}
        <DeleteUser onDelete={handleDeleteUser} />
      </div>
    </div>
  );
}

export default Settings;
