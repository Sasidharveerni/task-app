import React from 'react';
import Sidebar from '../components/Sidebar';
import WelcomeCard from '../components/WelcomeCard';
import Objectives from '../components/Objectives';
import TaskInsights from '../components/TaskInsights';
import Header from '../components/Header';
import RecentActivity from '../components/RecentActivity';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="homepage">
      <Sidebar />

      <main className="main-content">
        <Header />
        <WelcomeCard />

        <div className="section-row">
          <Objectives />
          <TaskInsights />
        </div>

        <div className="section-row" style={{ marginTop: '2rem' }}>
          <RecentActivity />
        </div>
      </main>
    </div>
  );
};

export default HomePage;
