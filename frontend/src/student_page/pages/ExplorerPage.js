// ExplorerPage.js
import React from 'react';
import LessonSquare from '../components/LessonSquare';
import { lessons } from '../data/lessons.json';

function ExplorerPage() {
  const { suggested } = lessons;

  return (
    <div>
      <h2>Explore Study Groups</h2>
      <div>
        {suggested.map(lesson => (
          <LessonSquare key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}

export default ExplorerPage;
