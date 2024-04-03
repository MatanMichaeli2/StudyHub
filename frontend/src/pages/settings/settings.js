import React from "react";
import Navbar from "../../components/SettingsComp/SettingsNav";
import Heading from "../../components/SettingsComp/SettingsHeading";
import DeleteUser from "../../components/SettingsComp/DeleteUser";
import EditProfile from "../../components/SettingsComp/EditProfile";
import axios from "axios"; // Import Axios
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { BASE_URL } from "../../constants"; // Import BASE_URL from constants
import "./settings.css";

function Settings({ user }) {
  const navigate = useNavigate();
  console.log({ user });
  const userid = user._id;

  const handleDeleteUser = async () => {
    try {
      const response = await axios.delete(
        `${BASE_URL}/Delete/Deluser?id=${userid}`
      );
      console.log("User deleted successfully:", response.data);
      // After successful deletion, navigate back to the home page
      navigate("/");
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const handleSaveProfile = async (updatedProfile) => {
    console.log("Saving profile...", updatedProfile);
    // Here, make an API call to the backend to update the user's information
    try {
      const response = await fetch("/users/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProfile),
      });

      const data = await response.json();
      if (response.ok) {
        console.log("Profile updated successfully:", data);
        // Handle success (e.g., show a success message, update local user data, etc.)
      } else {
        console.error("Failed to update profile:", data.message);
        // Handle failure (e.g., show an error message)
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <div className="settings-page">
      <div className="settings-content">
        <Heading />
        {/* Edit profile */}
        <EditProfile user={user} onSave={handleSaveProfile} />
        {/* Delete User */}
        <DeleteUser onDelete={handleDeleteUser} />
      </div>
    </div>
  );
}

export default Settings;
