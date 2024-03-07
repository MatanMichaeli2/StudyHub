// ContactForm.js

import React, { useState } from 'react';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', formData.name);
    console.log('Email:', formData.email);
    console.log('Message:', formData.message);
    // Add further logic for form submission (e.g., sending data to backend)
  };

  return (
    <form id="contactForm" onSubmit={handleSubmit}>
      <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" />
      <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" />
      <textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="Your Message"></textarea>
      <button type="submit">Submit</button>
    </form>
  );
}

export default ContactForm;
