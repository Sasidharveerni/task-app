import React from 'react';

const activities = [
  { time: 'Just now', activity: 'Completed task "Create ML Model"' },
  { time: '1 hour ago', activity: 'Added task "Design UI Cards"' },
  { time: 'Today', activity: 'Reprioritized backlog tasks' },
  { time: 'Yesterday', activity: 'Completed "Fix login bug"' },
];

const RecentActivity = () => {
  return (
    <div className="card recent-activity">
      <h3 className="card-title">Recent Activity</h3>
      <ul className="activity-list">
        {activities.map((item, index) => (
          <li key={index} className="activity-item">
            <span className="activity-time">{item.time}</span>
            <span className="activity-text">{item.activity}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecentActivity;
