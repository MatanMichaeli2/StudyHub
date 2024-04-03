import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Footer from '../../components/TeacherComponents/Tfooter.js';
import '../../components/StudentComp/StudentCss/Spage.css';
import NavbarS from '../../components/StudentComp/NavbarS.js';
import Menu from '../../components/StudentComp/Menu';
import HomePage from '../../components/StudentComp/StudentPages/HomePage';

function StudentMainPage({ user }) { // Accept user prop here
  return (
    <div className='Spage'>
      <div className="NavbarS">
        <NavbarS user ={user}/>
      </div>
      <div className="content">
        <Menu />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} /> // Pass user to HomePage
        </Routes>
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </div>
  );
}

export default StudentMainPage;
