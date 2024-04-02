import React from "react";
import StudyGroupCard from "../../components/TeacherComponents/StudyGroupCard";
import NavbarT from "../../components/TeacherComponents/NavbarT";
import Footer from "../../components/TeacherComponents/Tfooter.js";
import { TeacherAddGroup } from "../../components/TeacherComponents/TeacherAddGroup.js";
import "../../components/TeacherComponents/TeacherCss/Tpage.css";

const TeacherMainPage = ({ user }) => {
  // Construct the full name or use a default message if user data is not available
  const fullName = user ? `${user.firstName} ${user.lastName}` : 'Teacher';

  return (
    <div className="Tpage">
      <NavbarT user={user} />
      <div className="content">
        {/* Welcome message */}
        <div className="welcome-message">
          <h2>Welcome, {fullName}!</h2>
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
