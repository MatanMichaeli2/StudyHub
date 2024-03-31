// ChatsPage.js
import React from "react";
import ChatData from "./data/chats.json";

export function ChatsPage() {
  return (
    <div>
      <h2>Chats</h2>
      <div>
        {ChatData.chats.map((chat) => (
          <div key={chat.lessonId}>
            <h3>{chat.lessonName}</h3>
            <p>Participants: {chat.participants.join(", ")}</p>
            <p>
              Chat Link: <a href={chat.chatLink}>{chat.chatLink}</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
