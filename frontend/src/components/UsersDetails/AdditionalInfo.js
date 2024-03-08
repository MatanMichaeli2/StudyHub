import React from 'react';
import './AdditionalInfo.css';

const AdditionalInfo = ({ user }) => {
  return (
    <div className="additional-info-container">
      {user.role === 'Admin' && (
        <div>
          Permissions: {user.permissions.join(', ')}
          <br />
          Admin ID: {user.adminId}
        </div>
      )}
    </div>
  );
};

export default AdditionalInfo;


