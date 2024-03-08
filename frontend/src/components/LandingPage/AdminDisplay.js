//working version(database)

// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// import Header from "../UsersDetails/Header";
// import UsersDetails from "../UsersDetails/UserDetails";
// import AdditionalInfo from "../UsersDetails/AdditionalInfo";
// import ContactInfo from "../UsersDetails/ContactInfo";
// import ActivityLog from "../UsersDetails/ActivityLog";
// import "./AdminDisplay.css";

// const AdminDisplay = () => {
//   const [users, setUsers] = useState([]);
//   const [activities, setActivities] = useState([]);
//   const [searchQuery, setSearchQuery] = useState('');

//   useEffect(() => {
//     const fetchUserData = async () => {
//       try {
//         const response = await axios.get('/getData'); // Make GET request to /getData endpoint
//         setUsers(response.data); // Set user data from API response
//       } catch (error) {
//         console.error('Error fetching user data:', error);
//       }
//     };

//     const fetchActivityLog = async () => {
//       // Simulate fetching activity log data from an API
//       // In a real application, you would fetch this data from a server
//       const activityLogData = ['Logged in', 'Viewed profile', 'Completed assignment'];
//       setActivities(activityLogData);
//     };

//     fetchUserData(); // Fetch user data
//     fetchActivityLog(); // Fetch activity log (assuming you're fetching it separately)
//   }, []);    // Empty dependency array to run effect only once

//   // Function to handle search query change
//   const handleSearchChange = event => {
//     setSearchQuery(event.target.value);
//   };

//   // Filter users based on search query
//   const filteredUsers = users.filter(user =>
//     user.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div id="admin">
//       <Header />

//       {/* Search input */}
//       <div className="search-container">
//         <input
//           className="search-input"
//           type="text"
//           placeholder="Search by name"
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {filteredUsers.map((user, index) => (
//         <div key={index}>
//           <UsersDetails user={user} />
//           <hr />
//           <AdditionalInfo user={user} />
//           <hr />
//           <ContactInfo user={user} />
//           <ActivityLog />
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDisplay;


//working version(files)
import React, { useState, useEffect } from 'react';
import Header from "../UsersDetails/Header";
import UsersDetails from "../UsersDetails/UserDetails";
import AdditionalInfo from "../UsersDetails/AdditionalInfo";
import ContactInfo from "../UsersDetails/ContactInfo";
import ActivityLog from "../UsersDetails/ActivityLog";
//import Actions from "../UsersDetails/Actions";
import "./AdminDisplay.css";
import userData from '../../data/users.json'; // Import user data from local JSON file

const AdminDisplay = () => {
  const [users, setUsers] = useState([]);
  const [activities, setActivities] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchActivityLog = async () => {
    // Simulate fetching activity log data from an API
    // In a real application, you would fetch this data from a server
    const activityLogData = ['Logged in', 'Viewed profile', 'Completed assignment'];
    setActivities(activityLogData);
  };

  useEffect(() => {
    setUsers(userData); // Set user data from imported JSON file
    fetchActivityLog(); // Fetch activity log (assuming you're fetching it separately)
  }, []);    //[userData]

  // Function to handle search query change
  const handleSearchChange = event => {
    setSearchQuery(event.target.value);
  };

  // Filter users based on search query
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div id="admin">
      <Header  />

      {/* Search input */}
      <div className="search-container">
        <input
          className="search-input"
          type="text"
          placeholder="Search by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {filteredUsers.map((user, index) => (
        <div key={index}>
           <UsersDetails user={user} />
           <hr />
          <AdditionalInfo user={user} />
          <hr />

          <ContactInfo user={user} />
          <ActivityLog />
          {/* <Actions activities={activities} />  */}
        </div>
      ))}
    </div>
  );
};

export default AdminDisplay;



// import React, { useState, useEffect } from 'react';
// import Header from "../UsersDetails/Header";
// import UsersDetails from "../UsersDetails/UserDetails";
// import AdditionalInfo from "../UsersDetails/AdditionalInfo";
// import ContactInfo from "../UsersDetails/ContactInfo";
// import ActivityLog from "../UsersDetails/ActivityLog";
// //import Actions from "../UsersDetails/Actions";
// import "./AdminDisplay.css";
// import userData from '../../data/users.json'; // Import user data from local JSON file

// const AdminDisplay = () => {
//   const [users, setUsers] = useState([]);
//   const [activities, setActivities] = useState([]);

//    const fetchActivityLog = async () => {
//     // Simulate fetching activity log data from an API
//     // In a real application, you would fetch this data from a server
//     const activityLogData = ['Logged in', 'Viewed profile', 'Completed assignment'];
//     setActivities(activityLogData);
//   };
  
//   useEffect(() => {
//     setUsers(userData); // Set user data from imported JSON file
//     fetchActivityLog(); // Fetch activity log (assuming you're fetching it separately)
//   }, []);    //[userData]



//   return (
//     <div id="admin">
      
//       <Header  />
//       {users?.map((user, index) => (
//         <div key={index}>
//            <UsersDetails user={user} />
//            <hr />
//           <AdditionalInfo user={user} />
//           <hr />

//           <ContactInfo user={user} />
//           <ActivityLog />
//           {/* <Actions activities={activities} />  */}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default AdminDisplay;