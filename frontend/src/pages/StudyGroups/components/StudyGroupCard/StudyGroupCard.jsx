import { useState } from "react";

export const StudyGroupCard = ({
  group,
  didJoinGroup,
  handleJoinClick,
  handleLeaveClick,
}) => {
  const [showParticipants, setShowParticipants] = useState(false);

  return (
    <div key={group._id} className="study-group-card">
      <h2>Topic: {group.subjectTopic}</h2>
      <p>participants: {group.participants.length}</p>
      <p>Max participants: {group.maxParticipants}</p>

      <div>
        {didJoinGroup ? (
          <button onClick={() => handleLeaveClick(group)}>Leave</button>
        ) : (
          <button onClick={() => handleJoinClick(group)}>Join</button>
        )}
        <button onClick={() => setShowParticipants((prev) => !prev)}>
          Show Participants
        </button>
      </div>

      {showParticipants && (
        <div>
          <h3>Participants</h3>
          <ul>
            {group.participants.map((participant) => (
              <li key={participant._id}>
                {participant.firstName} {participant.lastName}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
