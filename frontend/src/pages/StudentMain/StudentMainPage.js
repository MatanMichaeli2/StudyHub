import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../../components/TeacherComponents/Tfooter.js';
import '../../components/StudentComp/StudentCss/Spage.css'
import NavbarS from '../../components/StudentComp/NavbarS.js';

function StudentPage() {
  return (
    <div className='Spage'>
      <div className="NavbarS">
        <NavbarS />
      </div> 
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default StudentPage;