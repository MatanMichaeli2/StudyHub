import React, { useEffect, useState } from "react";
import axios from "axios";
import './TeacherCss/card.css'

function StudyGroupCard() {
  const [cards, setStudyGroups] = useState([]);
  const [participants, setParticipants] = useState(0); // State variable for number of participants
  const [updatedParticipants, setUpdatedParticipants] = useState(0); // State variable for updated number of participants

  useEffect(() => {
    axios.get("http://localhost:3001/getCard")
      .then(response => {
        setStudyGroups(response.data);
        // Assuming the first card is displayed by default and updating participants count
        if (response.data.length > 0) {
          setParticipants(response.data[0].participantsCount);
          setUpdatedParticipants(response.data[0].participantsCount);
        }
      })
      .catch(err => console.log(err));
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  // Function to handle incrementing participants count
  const incrementParticipants = () => {
    setUpdatedParticipants(updatedParticipants + 1);
  };

  // Function to handle decrementing participants count
  const decrementParticipants = () => {
    if (updatedParticipants > 0) {
      setUpdatedParticipants(updatedParticipants - 1);
    }
  };

  // Function to handle applying changes to participants count
  const applyChanges = () => {
    if (cards.length === 0) {
      console.log('No study groups available');
      return;
    }

    // Assuming you have an API endpoint to update the participants count for the selected card
    axios.post(`http://localhost:3001/updateCard`, {
      id: cards[0]._id,
      participantsCount: updatedParticipants
    })
      .then(response => {
        // Assuming the response contains the updated card data
        setStudyGroups([response.data]);
        setParticipants(updatedParticipants); // Update the displayed participants count
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="study-group-container">
      {cards.length === 0 ? (
        <p>No active study groups</p>
      ) : (
        <>
          <div className="study-group-card">
            <h2>{cards[0].subjectTopic}</h2>
            <p>Number of participants: {participants}</p>
            <div>
              <button onClick={incrementParticipants}>+</button>
              <button onClick={decrementParticipants}>-</button>
              <button onClick={applyChanges}>Apply</button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default StudyGroupCard;
