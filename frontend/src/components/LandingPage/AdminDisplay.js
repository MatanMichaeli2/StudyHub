import React, { useState, useEffect } from 'react';
import Header from "../UsersDetails/Header";
import UsersDetails from "../UsersDetails/UserDetails";
import AdditionalInfo from "../UsersDetails/AdditionalInfo";
import ContactInfo from "../UsersDetails/ContactInfo";
import ActivityLog from "../UsersDetails/ActivityLog";
import Actions from "../UsersDetails/Actions";

import userData from '../../data/users.json'; // Import user data from local JSON file

const AdminDisplay = () => {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);

   const fetchActivityLog = async () => {
    // Simulate fetching activity log data from an API
    // In a real application, you would fetch this data from a server
    const activityLogData = ['Logged in', 'Viewed profile', 'Completed assignment'];
    setActivities(activityLogData);
  };
  
  useEffect(() => {
    setUsers(userData); // Set user data from imported JSON file
    fetchActivityLog(); // Fetch activity log (assuming you're fetching it separately)
  }, [userData]);



  return (
    <div id="admin">
      
      <Header  />
      {users?.map((user, index) => (
        <div key={index}>
           <UsersDetails user={user} />
           <hr />
          <AdditionalInfo user={user} />
          <hr />

          <ContactInfo user={user} />
          <ActivityLog />
          <Actions activities={activities} /> 
        </div>
      ))}
    </div>
  );
};

export default AdminDisplay;