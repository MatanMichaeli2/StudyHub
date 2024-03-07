import React from 'react';
import { Typography } from '@material-ui/core';
//import './ContactInfo.css';

const ContactInfo = ({ user }) => {
  return (
    <div>
      Address: {user.address}
      <br />
      Phone: {user.phone}
      <br />
      Social Media: {user.socialMedia}
    </div>
  );
};

export default ContactInfo;

