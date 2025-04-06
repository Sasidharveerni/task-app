import React from 'react';

const objectives = [
  {
    icon: '💡',
    title: 'Marketing',
    description: 'Progress update for their objective.',
    action: 'View',
  },
  {
    icon: '🎯',
    title: 'Operational Goals',
    description: 'New items added to their goal.',
    action: 'View',
  },
  {
    icon: '🛠️',
    title: 'Taskify Team',
    description: 'Enhanced task management experience.',
    action: 'Explore',
  },
];

const Objectives = () => {
  return (
    <div className="card objectives-section">
      <h3 className="card-title">Objectives</h3>
      <div className="objective-list">
        {objectives.map((item, index) => (
          <div className="objective-item" key={index}>
            <div className="objective-icon">{item.icon}</div>
            <div className="objective-info">
              <strong>{item.title}</strong>
              <p>{item.description}</p>
            </div>
            <button className="btn small">{item.action}</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Objectives;
