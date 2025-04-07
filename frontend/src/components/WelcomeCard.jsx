import React from 'react';
import { useNavigate } from 'react-router';

const WelcomeCard = () => {
  const navigate = useNavigate();
  const userName = 'John Doe'; // You can pass this via props or context

  return (
    <div className="card welcome-card">
      <h2 className="welcome-title">Welcome back, {userName} 👋</h2>
      <p className="welcome-subtitle">Let’s get some tasks crushed today!</p>
      <button className="start-button" onClick={() => navigate('/addtask')}>Start a New Task</button>
    </div>
  );
};

export default WelcomeCard;
