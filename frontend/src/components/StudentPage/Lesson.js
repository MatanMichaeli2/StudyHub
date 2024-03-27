import React from 'react';

const Lesson = ({ lesson }) => {
  const { name, participants, teacher, type } = lesson;
  
  return (
    <div className="lesson">
      <h3>{name}</h3>
      <p>Participants: {participants}</p>
      <p>{type === 'group' ? `Created by: ${teacher}` : `Teacher: ${teacher}`}</p>
    </div>
  );
};

export default Lesson;