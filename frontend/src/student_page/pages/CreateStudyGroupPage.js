// CreateStudyGroupPage.js
import React from 'react';

function CreateStudyGroupPage() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2>Create Study Group</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Group Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Creator Name:</label>
          <input type="text" />
        </div>
        <div>
          <label>Information:</label>
          <textarea></textarea>
        </div>
        <button type="submit">Create Group</button>
      </form>
    </div>
  );
}

export default CreateStudyGroupPage;
