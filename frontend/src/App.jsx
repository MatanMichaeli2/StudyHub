import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import { Navbar } from './components/Navbar';
import TeacherMainPage from './pages/TeacherMain/TeacherMainPage'; // Import TeacherMainPage

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        {/* Add route for teacher main page */}
        {user && user.role === 'lecturer' && (
          <Route path="/teacher" element={<TeacherMainPage />} />
        )}
      </Routes>a
    </Router>
  );
};

export default App;
