import React from 'react';
import { useNavigate } from 'react-router-dom';

function HeroSection() {

    const navigate = useNavigate();

    const handleJoinNow = () => {
        navigate('/register');
    };

  return (
    <div className="hero-section">
      <h1>Elevate Your Learning Experience</h1>
      <p>Join our study group online, where collaborative learning and tailored mentorship pave your path to success.</p>
        <button onClick={handleJoinNow}>Join Now</button>
    </div>
  );
}

export default HeroSection;
