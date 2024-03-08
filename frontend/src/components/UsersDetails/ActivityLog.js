import React from 'react';
import './ActivityLog.css';

const ActivityLog = ({ activities }) => {
  return (
    <div className="activity-log-container">
      <div>Activity Log</div>
      <ul>
        {activities?.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;

