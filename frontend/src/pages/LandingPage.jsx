import React from 'react';
import logo from '../assets/Image.png';
import { useNavigate } from 'react-router';
//import './LandingPage.css'; // Assuming you put styles here

function LandingPage() {
    const navigate = useNavigate();
  return (
    <div className="landing-page">
      <div className="left-section">
        <img className="logo" src={logo} alt="Taskify Logo" />
      </div>

      <div className="right-section">
        <h2 className="title">Taskify</h2>
        <hr />
        <p className="subtitle">Efficient task management made simple!</p>
        <hr />
        <div className="button-group">
          <button className="btn primary" onClick={() => navigate('/register')}>Get Started</button>
          <button className="btn secondary" onClick={() => navigate('/login')}>Log in</button>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
