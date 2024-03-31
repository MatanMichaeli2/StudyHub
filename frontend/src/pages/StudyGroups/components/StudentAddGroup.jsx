//TeacherAddGroup.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../../constants";

export const StudentAddGroup = ({ user }) => {
  const [subjectTopic, setTopic] = useState("");
  const [maxParticipants, setMaxParticipants] = useState(3);
  const navigate = useNavigate(); // Initialize navigate

  const handleCreateGroup = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        `${BASE_URL}/createStudyGroup/created`,
        {
          subjectTopic,
          maxParticipants,
        }
      );

      // Handle the response (optional)
      console.log("New study group created:", response.data);

      // Clear the input field after creating the study group
      setTopic("");
      setMaxParticipants(3);
    } catch (error) {
      console.error("Error creating study group:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleCreateGroup}>
        <input
          type="text"
          value={subjectTopic}
          onChange={(e) => setTopic(e.target.value)}
          placeholder="Enter topic"
        />
        <input
          type="number"
          min={2}
          value={maxParticipants}
          onChange={(e) => setMaxParticipants(e.target.value)}
          placeholder="Max participants"
        />
        <button className="teacher-add-group-button" type="submit">
          Open New Group
        </button>
      </form>
    </div>
  );
};
