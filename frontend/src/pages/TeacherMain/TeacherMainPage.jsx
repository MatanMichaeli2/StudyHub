import React from "react";
import StudyGroupCard from "../../components/TeacherComponents/StudyGroupCard";
import NavbarT from "../../components/TeacherComponents/NavbarT";
import Footer from "../../components/TeacherComponents/Tfooter.js";
import { TeacherAddGroup } from "../../components/TeacherComponents/TeacherAddGroup.js";
import "../../components/TeacherComponents/TeacherCss/Tpage.css";
import 'react-calendar/dist/Calendar.css'; // This imports the default styling for the calendar.
import Calendar from 'react-calendar';

const TeacherMainPage = ({ user }) => {
  // Construct the full name or use a default message if user data is not available
  const fullName = user ? `${user.firstName} ${user.lastName}` : 'Teacher';

  const currentDate = new Date();

  // Format the date as a string in the format of Month Day, Year (e.g., April 9, 2024)
  const dateString = currentDate.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });


  return (
    <div className="Tpage">
      <NavbarT user={user} />
      <div className="content">
        {/* Welcome message */}
        <div className="welcome-message">
        <h2>Welcome, {fullName}!</h2> What would you like to do today?
          <p>Today is {dateString}.</p>
        </div>
        <div className="calendar-container">
        <Calendar />
      </div>
        <div className="section">
          <TeacherAddGroup user={user} />
        </div>
        <div className="section">
          <StudyGroupCard user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherMainPage;
