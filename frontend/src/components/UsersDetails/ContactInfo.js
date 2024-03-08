import React from 'react';
import './ContactInfo.css';

const ContactInfo = ({ user }) => {
  return (
    <div className="contact-info-container">
      Address: {user.address}
      <br />
      Phone: {user.phone}
      <br />
      Social Media: {user.socialMedia}
    </div>
  );
};

export default ContactInfo;

