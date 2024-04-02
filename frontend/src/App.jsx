import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/landing/LandingPage";
import Registration from "./components/Registration";
import Login from "./components/Login";
import TeacherMainPage from "./pages/TeacherMain/TeacherMainPage"; // Import TeacherMainPage
import Settings from "./pages/settings/settings";
import Navbar from "./components/Navbar";
import { StudyGroups } from "./pages/StudyGroups/StudyGroups";
import { ChatsPage } from "./pages/ChatsPage";
import { ExplorerPage } from "./pages/ExplorerPage";
import { BASE_URL } from "./constants";
import axios from "axios";
import StudentMainPage from './pages/StudentMain/StudentMainPage';
import AdminMainPage from './pages/AdminMain/AdminMainPage';

const App = () => {
  const [user, setUser] = useState(null);
  const [studyGroups, setStudyGroups] = useState([]);
  console.log("user", user);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/study-group/card`)
      .then((response) => {
        console.log("API response:", response.data); // Log API response
        setStudyGroups(response.data);
        // Initialize participants count and updatedParticipants array with data from API
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <Router>
      <Navbar user={user} />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/register"
          element={<Registration studyGroups={studyGroups} />}
        />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route
          path="/study-groups"
          element={
            <StudyGroups
              user={user}
              setStudyGroups={setStudyGroups}
              studyGroups={studyGroups}
            />
          }
        />
        <Route path="/settings" element={<Settings user={user} />} />

        <Route path="/explorer" component={ExplorerPage} />
        <Route path="/chats" component={ChatsPage} />

        {/* Add route for teacher main page */}
        {user && user.role === 'lecturer' &&(
          <Route
            path="/teacher"
            element={<TeacherMainPage user={user} />} // Pass user object as prop
          />
        )}

          {user && user.role === 'student' && (
          <Route
           path="/student"
           element={<StudentMainPage user={user}/>}
          />
        )}
        {user && user.role === 'admin' &&(
          <Route
            path="/admin"
            element={<AdminMainPage user={user} />}
          />
        )}
      </Routes>
    </Router>
  );
};

export default App;
