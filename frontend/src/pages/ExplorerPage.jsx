import React from "react";
import lessonsData from "./data/lessons.json";
import { LessonSquare } from "../components/LessonSquare";

const lessons = lessonsData;

export function ExplorerPage() {
  const { suggested } = lessons;

  return (
    <div>
      <h2>Explore Study Groups</h2>
      <div>
        {suggested.map((lesson) => (
          <LessonSquare key={lesson.id} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
