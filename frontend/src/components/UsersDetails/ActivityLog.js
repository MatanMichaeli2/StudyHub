import React from 'react';
import { Typography } from '@material-ui/core';
//import './ActivityLog.css';

const ActivityLog = ({ activities }) => {
  return (
    <div>
      <div variant="h6">Activity Log</div>
      <ul>
        {activities?.map((activity, index) => (
          <li key={index}>{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default ActivityLog;