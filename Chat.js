import React, { useState, useEffect } from "react";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");

  // Function to send a message
  const sendMessage = () => {
    // Implement logic to send message
    // For example, you can use WebSockets or an API
    setMessages([...messages, { sender: "user", text: newMessage }]);
    setNewMessage("");
  };

  // Simulate receiving messages (for demonstration)
  useEffect(() => {
    const timer = setTimeout(() => {
      setMessages([
        ...messages,
        { sender: "friend", text: "Hello! How are you?" }
      ]);
    }, 2000); // Simulate receiving a message every 2 seconds
    return () => clearTimeout(timer);
  }, [messages]);

  return (
    <div>
      <h2>Chat</h2>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <strong>{message.sender}: </strong>
            {message.text}
          </div>
        ))}
      </div>
      <input
        type="text"
        value={newMessage}
        onChange={(e) => setNewMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
};

export default Chat;