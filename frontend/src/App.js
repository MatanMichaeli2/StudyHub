import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage.js';
import TeacherMainPage from './pages/TeacherPage/TeacherPage.jsx';

function App() {
  return (
    <div>
      <BrowserRouter>
       <Routes>
         <Route index element={<LandingPage />} />
         <Route path="/teacher" element={<TeacherMainPage />} />
       </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
