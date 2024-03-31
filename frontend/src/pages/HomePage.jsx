import React from "react";
import LessonSquare from "../components/LessonSquare";
import { lessons } from "./data/lessons.json";

export function HomePage() {
  const { registered, suggested } = lessons;

  return (
    <div>
      <h2>Registered Study Groups</h2>
      <div>
        {registered.map((lesson) => (
          <LessonSquare key={lesson.id} lesson={lesson} />
        ))}
      </div>
      <h2>Suggested Study Groups</h2>
      <div>
        {suggested.map((lesson) => (
          <LessonSquare key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
