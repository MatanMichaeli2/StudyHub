//TeacherAddGroup.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { BASE_URL } from '../../constants'; // Import BASE_URL from constants
import './TeacherCss/TeacherAddGroupButton.css';

const TeacherAddGroup = ({ user }) => {
  const [subjectTopic, setTopic] = useState('');
  const navigate = useNavigate(); // Initialize navigate

  const handleCreateGroup = async (event) => {
    event.preventDefault(); // Prevent default form submission

    try {
      // Send a request to the backend to create a new study group
      const response = await axios.post(`${BASE_URL}/createStudyGroup/created`, {
        subjectTopic,
        teacher: user.username // Assuming the user object contains the teacher's username
      });

      // Handle the response (optional)
      console.log('New study group created:', response.data);

      // Clear the input field after creating the study group
      setTopic('');

      // Navigate to the teacher main page after creating the group
      navigate('/teacher');
    } catch (error) {
      console.error('Error creating study group:', error);
    }
  };

  return (
    <div className='study-group-container'>
      <form onSubmit={handleCreateGroup}>
        <input
          type="text"
          value={subjectTopic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
        />
        <button className="teacher-add-group-button" type="submit">Open New Group</button>
      </form>
    </div>
  );
};

export default TeacherAddGroup;
