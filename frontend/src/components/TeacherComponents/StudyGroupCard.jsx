import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../constants'; // Import BASE_URL from constants
import './TeacherCss/card.css'




function StudyGroupCard({ user }) {
  const [cards, setStudyGroups] = useState([]);
  const [participants, setParticipants] = useState(0); // State variable for number of participants
  const [updatedParticipants, setUpdatedParticipants] = useState(0); // State variable for updated number of participants

  useEffect(() => {
    if (user && user.username) {
      const loggedInTeacherName = user.username;
      axios.get(`${BASE_URL}/getCard/card?loggedInTeacherUsername=${loggedInTeacherName}`)
        .then(response => {
          console.log("API response:", response.data); // Log API response
          setStudyGroups(response.data);
          // Assuming the first card is displayed by default and updating participants count
          if (response.data.length > 0) {
            setParticipants(response.data[0].participantsCount);
            setUpdatedParticipants(response.data[0].participantsCount);
          }
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  console.log("Cards:", cards); // Log cards state

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
    // Assuming you have an API endpoint to update the participants count for each card
    axios.post(`${BASE_URL}/updateCard/updated`, {
      cards: cards.map(card => ({
        id: card._id,
        participantsCount: updatedParticipants
      }))
    })
      .then(response => {
        // Assuming the response contains the updated card data
        setStudyGroups(response.data);
        // Update the displayed participants count for each card
        setParticipants(response.data.map(card => card.participantsCount));
      })
      .catch(err => console.log(err));
  };

  return (
    <div className="study-group-container">
      {cards.length === 0 ? (
        <p>No active study groups</p>
      ) : (
        cards.map(card => (
          <div key={card._id} className="study-group-card">
            <h2>Topic: {card.subjectTopic}</h2>
            <p>Number of participants: {participants}</p>
            <div>
              <button onClick={incrementParticipants}>+</button>
              <button onClick={decrementParticipants}>-</button>
              <button onClick={applyChanges}>Limit participants</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default StudyGroupCard;
