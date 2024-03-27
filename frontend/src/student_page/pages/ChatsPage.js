// ChatsPage.js
import React from 'react';
import { chats } from '../data/chats.json';

function ChatsPage() {
  return (
    <div>
      <h2>Chats</h2>
      <div>
        {chats.map(chat => (
          <div key={chat.lessonId}>
            <h3>{chat.lessonName}</h3>
            <p>Participants: {chat.participants.join(', ')}</p>
            <p>Chat Link: <a href={chat.chatLink}>{chat.chatLink}</a></p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatsPage;
