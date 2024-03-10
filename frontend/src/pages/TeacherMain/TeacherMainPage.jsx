// TeacherMainPage.js
import React from 'react';
import StudyGroupCard from '../../components/TeacherComponents/StudyGroupCard';
import NavbarT from '../../components/TeacherComponents/NavbarT';
import Navbar from '../../components/Navbar.js'
import Footer from '../../components/TeacherComponents/Tfooter.js';

const TeacherMainPage = () => {
  return (
    <div>
      <Navbar />
      <div className='content'>
      <StudyGroupCard />
      </div>
      <Footer />
    </div>
  );
};

export default TeacherMainPage;
