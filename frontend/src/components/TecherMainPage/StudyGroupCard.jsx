import React, { useEffect, useState } from "react";
import axios from "axios";
import './StudyGroupCard.css'

// function StudyGroupCard() {
  // const [studyGroups, setStudyGroups] = useState([]);

  // useEffect(() => {
    // const fetchStudyGroups = async () => {
      // try {
        // const response = await axios.get("http://localhost:5000/api/studygroups");
        // setStudyGroups(response.data); // Set the fetched data to state
      // } catch (error) {
        // console.error("Error fetching study groups:", error);
      // }
    // };
    // fetchStudyGroups();
  // }, []); // Empty dependency array ensures the effect runs only once on component mount

  function StudyGroupCard() {
    const [studyGroups, setStudyGroups] = useState([]);
  
    useEffect(() => {
      const fetchStudyGroups = async () => {
        try {
          // Fetch data from the studyGroupsData.json file
          const response = await axios.get("/StudyGroupData.json");
          setStudyGroups(response.data); // Set the fetched data to state
        } catch (error) {
          console.error("Error fetching study groups:", error);
        }
      };
      fetchStudyGroups();
    }, []); // Empty dependency array ensures the effect runs only once on component mount

    const handleCloseRegistration = (index) => {
      console.log("Close registration for study group at index:", index);
    };
    
    return (
      <div className="study-group-container">
        {studyGroups.length === 0 ? (
          <p>No active study groups</p>
        ) : (
          studyGroups.map((group, index) => (
            <div key={index} className="study-group-card">
              <h2>{group.topic}</h2>
              <p>Number of students: {group.participants}</p>
              <p>Start date: {group.start_date}</p>
              <button className="close-registration-button" onClick={() => handleCloseRegistration(index)}>Close Registration</button>
            </div>
          ))
        )}
      </div>
    );
  }
 
 
 
 
 
 
 
 
 
 
 
 


export default StudyGroupCard;
