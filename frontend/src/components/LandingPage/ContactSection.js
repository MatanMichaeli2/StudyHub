import React from 'react';

function ContactSection() {
  return (
    <section className="contact-section" id="contact">
      <div className="text-container">
        <h2>Reach Out Today</h2>
        <p>Reach out to us using the contact form below. We look forward to hearing from you and assisting you with your study group needs.</p>
      </div>
      <form id="contactForm">
        <div className="input-group">
          <input type="text" id="name" name="name" placeholder="Name" required />
          <input type="email" id="email" name="email" placeholder="Email" required />
        </div>
        <textarea id="message" name="message" placeholder="Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default ContactSection;
