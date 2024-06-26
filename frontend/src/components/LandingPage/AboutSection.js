import React from 'react';

function AboutSection() {
  return (
    <div className="about-section" id="about">
      <div className="about-text">
        <h2>About us</h2>
        <p>Welcome to StudyHub, your premier destination for study groups online. Our mission is to provide a collaborative and productive environment for students to excel academically.</p>
        <p>At StudyHub, we believe in the power of teamwork and knowledge sharing. Join us and elevate your learning experience with like-minded individuals who are committed to achieving academic success.</p>
      </div>
      <img src="../../images/about-us-pic.webp" alt="Study group" style={{ height: '400px', width: '600px' }} />
    </div>
  );
}

export default AboutSection;
