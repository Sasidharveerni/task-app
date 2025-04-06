import React from 'react';

const insights = [
  {
    title: 'Insights',
    description: 'You have 4 high-priority tasks today. ML recommends starting with Design and Planning.',
    icon: '📊',
  },
  {
    title: 'Statistics',
    description: '87% of your tasks this week were completed on time.',
    icon: '📈',
  },
  {
    title: 'Adjust',
    description: 'ML has re-prioritized 3 tasks based on your recent activity.',
    icon: '🛠️',
  },
];

const TaskInsights = () => {
  return (
    <div className="card task-insights">
      <h3 className="card-title">Task Insights</h3>
      <div className="insight-list">
        {insights.map((item, index) => (
          <div className="insight-item" key={index}>
            <div className="insight-icon">{item.icon}</div>
            <div className="insight-content">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TaskInsights;
