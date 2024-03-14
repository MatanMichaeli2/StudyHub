import React, { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from '../../constants'; // Import BASE_URL from constants
import './TeacherCss/card.css'

function StudyGroupCard({ user }) {
  const [cards, setStudyGroups] = useState([]);
  const [participants, setParticipants] = useState([]); // State variable for number of participants for each card
  const [updatedParticipants, setUpdatedParticipants] = useState([]); // State variable for updated number of participants
  const [counts, setCounts] = useState([]); // State variable for count of each card

  useEffect(() => {
    if (user && user.username) {
      const loggedInTeacherName = user.username;
      axios.get(`${BASE_URL}/getCard/card?loggedInTeacherUsername=${loggedInTeacherName}`)
        .then(response => {
          console.log("API response:", response.data); // Log API response
          setStudyGroups(response.data);
          // Initialize participants count and updatedParticipants array with data from API
          const initialParticipants = response.data.map(card => card.participantsCount);
          setParticipants(initialParticipants);
          setUpdatedParticipants(initialParticipants);
          // Initialize counts array with 0 for each card
          setCounts(Array(response.data.length).fill(0));
        })
        .catch(err => console.log(err));
    }
  }, [user]);

  const incrementParticipants = (index) => {
    const updatedCounts = [...counts];
    updatedCounts[index] += 1;
    setCounts(updatedCounts);
  };

  const decrementParticipants = (index) => {
    if (counts[index] > 0) {
      const updatedCounts = [...counts];
      updatedCounts[index] -= 1;
      setCounts(updatedCounts);
    }
  };

  const applyChanges = () => {
    axios.patch(`${BASE_URL}/updateCard/updated`, {
      cards: cards.map((card, index) => ({
        id: card._id,
        participantsCount: updatedParticipants[index]
      }))
    })
    .then(response => {
      setStudyGroups(response.data);
      setParticipants(response.data.map(card => card.participantsCount));
    })
    .catch(err => console.log(err));
  };

  return (
    <div className="study-group-container">
      {cards.length === 0 ? (
        <p>No active study groups</p>
      ) : (
        cards.map((card, index) => (
          <div key={card._id} className="study-group-card">
            <h2>Topic: {card.subjectTopic}</h2>
            <p>participants: {participants[index]}</p>
            <p>Max participants: {card.maxParticipants}</p>

            <p>Limit: {counts[index]} </p>
            <div>
              <button onClick={() => incrementParticipants(index)}>+</button>
              <button onClick={() => decrementParticipants(index)}>-</button>
              <button onClick={applyChanges}>Aplly limit</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default StudyGroupCard;
