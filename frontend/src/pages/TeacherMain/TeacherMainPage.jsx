import React from 'react';
import StudyGroupCard from '../../components/TeacherComponents/StudyGroupCard';
import NavbarT from '../../components/TeacherComponents/NavbarT';
import Navbar from "../../components/LandingPage/Navbar";
import Footer from '../../components/TeacherComponents/Tfooter.js';
import TeacherAddGroup from '../../components/TeacherComponents/TeacherAddGroup.js';
import '../../components/TeacherComponents/TeacherCss/Tpage.css';

const TeacherMainPage = ({ user }) => {
  return (
    <div className='Tpage'>
      <Navbar />
      <div className='content'>
        <div className='section'>
          <TeacherAddGroup user={user} />
        </div>
        <div className='section'>
          <StudyGroupCard user={user} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default TeacherMainPage;
