import React from 'react';
import '../StudentCss/HomePagecss.css';
import 'react-calendar/dist/Calendar.css'; // This imports the default styling for the calendar.
import Calendar from 'react-calendar';


function HomePage({ user,studyGroups, setStudyGroups,fetchStudyGroups }) {
  const fullName = user ? `${user.firstName} ${user.lastName}` : 'Student';

  const currentDate = new Date();

  // Format the date as a string in the format of Month Day, Year (e.g., April 9, 2024)
  const dateString = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  return (
    <div className="home-page-container">
      <div className="welcome-message">
        <h2>Welcome, {fullName}!</h2> What would you like to do today?
        <p>Today is {dateString}.</p>
      </div>
      <div className="calendar-container">
        <Calendar />
      </div>
    </div>
  );  
}

export default HomePage;
