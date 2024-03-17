import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/landing/LandingPage';
import Registration from './components/Registration';
import Login from './components/Login';
import { Navbar } from './components/LandingPage/Navbar';
import TeacherMainPage from './pages/TeacherMain/TeacherMainPage'; // Import TeacherMainPage
import Settings from './pages/settings/settings';

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/settings" element={<Settings user={user} />} />

        {/* Add route for teacher main page */}
        {user && user.role === 'lecturer' && (
          <Route
            path="/teacher"
            element={<TeacherMainPage user={user} />} // Pass user object as prop
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
