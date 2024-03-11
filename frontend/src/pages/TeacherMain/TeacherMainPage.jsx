// TeacherMainPage.js
import React from 'react';
import StudyGroupCard from '../../components/TeacherComponents/StudyGroupCard';
import NavbarT from '../../components/TeacherComponents/NavbarT';
import Navbar from "../../components/LandingPage/Navbar";
import Footer from '../../components/TeacherComponents/Tfooter.js';
import TeacherAddGroup from '../../components/TeacherComponents/TeacherAddGroup.js';

const TeacherMainPage = ({ user }) => {
  return (
    <div>
      <Navbar />
      <div className='content'>
      <TeacherAddGroup user={user} />
      <StudyGroupCard />
      </div>
      <Footer />
    </div>
  );
};

export default TeacherMainPage;
