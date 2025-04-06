import React from 'react';

const tasks = [
  { label: 'Prioritization', value: 4.8 },
  { label: 'Smart', value: 4.2 },
  { label: 'UI design', value: 7.9 },
  { label: 'Categoriza', value: 5.6 },
  { label: 'Filters', value: 6.7 },
  { label: 'Task', value: 8.2 },
];

const TaskOverview = () => {
  const totalTasks = 5;
  const mlCompleted = 3;
  const percent = (mlCompleted / totalTasks) * 100;

  return (
    <div className="card task-overview">
      <h3 className="card-title">Task Overview</h3>

      <div className="task-ring-section">
        <div className="ring-container">
          <svg className="progress-ring" width="120" height="120">
            <circle
              className="ring-background"
              cx="60" cy="60" r="50"
              strokeWidth="12" />
            <circle
              className="ring-progress"
              cx="60" cy="60" r="50"
              strokeWidth="12"
              strokeDasharray={314}
              strokeDashoffset={314 - (314 * percent) / 100} />
          </svg>
          <div className="ring-label">
            <p>ML-</p>
            <h2>{mlCompleted}/{totalTasks}</h2>
          </div>
        </div>

        <div className="task-list">
          {tasks.map((task, i) => (
            <div className="task-item" key={i}>
              <span className="dot" />
              <div>
                <p>{task.value}</p>
                <small>{task.label}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskOverview;
