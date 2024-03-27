import React from 'react';

const Menu = ({ onCreateGroupLesson, onSearch }) => {
  return (
    <div className="menu">
      <button onClick={onCreateGroupLesson}>Create Group Lesson</button>
      <input type="text" placeholder="Search for lessons..." onChange={onSearch} />
    </div>
  );
};

export default Menu;
