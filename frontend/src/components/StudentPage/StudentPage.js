import React, { useState, useEffect } from 'react';
import Header from './StudentPage/Header';
import Menu from './StudentPage/Menu';
import LessonList from './StudentPage/LessonList';
import './styles.css';

const StudentPage = () => {
  const [lessons, setLessons] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch lessons data from the server (JSON file or MongoDB)
    fetchLessons();
  }, []);

  const fetchLessons = () => {
    // Fetch lessons data from the server
    fetch('/data/lessons.json')
      .then(response => response.json())
      .then(data => setLessons(data))
      .catch(error => console.error('Error fetching lessons:', error));
  };

  const handleCreateGroupLesson = () => {
    // Logic to handle creating a group lesson
    console.log('Creating group lesson...');
  };

  const handleSearch = event => {
    setSearchTerm(event.target.value);
  };

  const filteredLessons = lessons.filter(lesson =>
    lesson.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="StudentPage">
      <Header onLogout={() => console.log('Logout')} />
      <Menu onCreateGroupLesson={handleCreateGroupLesson} onSearch={handleSearch} />
      <div className="main-content">
        <h2>Registered Lessons</h2>
        <LessonList lessons={filteredLessons} />
      </div>
    </div>
  );
};

export default StudentPage;
