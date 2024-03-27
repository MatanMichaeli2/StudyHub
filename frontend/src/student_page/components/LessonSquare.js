// LessonSquare.js
import React, { useState } from 'react';

function LessonSquare({ lesson }) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpansion = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="lesson-square" onClick={toggleExpansion}>
      <h3>{lesson.lessonName}</h3>
      <p>Creator: {lesson.creator}</p>
      {lesson.teacher && <p>Teacher: {lesson.teacher}</p>}
      <p>Participants: {lesson.participants}</p>
      {expanded && (
        <div>
          <p>Zoom Link: {lesson.zoomLink}</p>
          <p>Students: {lesson.students.join(', ')}</p>
          {lesson.chatLink && <button>Group Chat</button>}
          <p>Info: {lesson.info}</p>
          <button>Leave Group</button>
        </div>
      )}
    </div>
  );
}

export default LessonSquare;
