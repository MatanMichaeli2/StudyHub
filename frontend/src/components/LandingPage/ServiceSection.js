import React from 'react';

function ServicesSection() {
  return (
    <div className="services-section" id="service">
      <div id="service-text">
        <h2>Services</h2>
      </div>
      {/* Services container with individual service components */}
      <div className="services-container">
        {/* Service 1 */}
        <div className="service">
          <img src="/images/online-executive-education-program-through-OpenClassrooms.jpg" alt="Group Study Sessions" />
          <h3>Group study sessions</h3>
          <p>Join our collaborative study sessions with peers to enhance your learning and exchange knowledge.</p>
        </div>
        {/* Service 2 */}
        <div className="service">
          <img src="/images/conflict750x500AdobeStock_341001801-750x500.jpg" alt="Mentoring and Tutoring" />
          <h3>Mentoring and tutoring</h3>
          <p>Get personalized mentoring and tutoring from experienced professionals to improve your academic performance.</p>
        </div>
        {/* Service 3 */}
        <div className="service">
          <img src="/images/Tips-for-Exams.jpg" alt="Exam Preparation Support" />
          <h3>Exam preparation support</h3>
          <p>Receive guidance and resources to excel in your exams through our comprehensive exam preparation support.</p>
        </div>
      </div>
    </div>
  );
}

export default ServicesSection;
