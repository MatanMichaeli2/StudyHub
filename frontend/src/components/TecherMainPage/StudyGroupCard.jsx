import React, { useEffect, useState } from "react";
import axios from "axios";

function StudyGroupCard() {
  const [studyGroups, setStudyGroups] = useState([]);

  useEffect(() => {
    const fetchStudyGroups = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/studygroups");
        setStudyGroups(response.data); // Set the fetched data to state
      } catch (error) {
        console.error("Error fetching study groups:", error);
      }
    };
    fetchStudyGroups();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      {studyGroups.length === 0 ? (
        <p>No active study groups</p>
      ) : (
        studyGroups.map((group, index) => (
          <div key={index} className="study-group-card">
            <h2>{group.topic}</h2>
            <p>Number of students: {group.participants}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default StudyGroupCard;
