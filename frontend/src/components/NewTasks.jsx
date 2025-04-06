import React from 'react';

const taskData = [
  {
    id: 1,
    user: 'Confidential',
    project: 'Project X',
    time: 'Now',
  },
  {
    id: 2,
    user: 'Insightful',
    project: 'Team Manager',
    time: 'Recently',
  },
  {
    id: 3,
    user: 'Insightful',
    project: 'Benefits',
    time: 'Yesterday',
  },
];

const NewTasks = () => {
  return (
    <div className="card new-tasks">
      <h3 className="card-title">New Task!</h3>
      {taskData.map((task) => (
        <div className="task-row" key={task.id}>
          <div className="task-avatar">
            <img src={`https://i.pravatar.cc/40?img=${task.id}`} alt={task.user} />
          </div>
          <div className="task-info">
            <p><strong>{task.user}</strong> created a new task for <strong>{task.project}</strong></p>
            <small>{task.time}</small>
          </div>
          <div className="task-actions">
            <button className="btn view">View</button>
            <button className="btn respond">Respond</button>
            <button className="btn archive">Archive</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default NewTasks;
