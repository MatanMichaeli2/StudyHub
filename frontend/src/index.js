import React from 'react';
import ReactDOM from 'react-dom';
import LandingPage from './pages/landing/LandingPage';
import TeacherMainPage from './pages/teacher/TeacherMainPage';

// For landing page
ReactDOM.render(
  <React.StrictMode>
    <LandingPage />
  </React.StrictMode>,
  document.getElementById('root')
);

// For teacher page
ReactDOM.render(
  <React.StrictMode>
    <TeacherMainPage />
  </React.StrictMode>,
  document.getElementById('teacher-root')
);
