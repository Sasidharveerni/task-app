import React from 'react';

const tasks = [
  { class: '8th', name: 'Grading Math Test', status: 'In Progress' },
  { class: '9th', name: 'Prepare Science PPT', status: 'Pending' },
  { class: '10th', name: 'Upload Assignment', status: 'Completed' },
];

function TeacherDashboard() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Teacher Dashboard</h2>
      <div className="space-y-3">
        {tasks.map((task, i) => (
          <div key={i} className="flex justify-between bg-gray-700 p-3 rounded-lg">
            <div>
              <div className="font-medium">{task.name}</div>
              <div className="text-sm text-gray-400">Class {task.class}</div>
            </div>
            <div className={`text-sm ${task.status === 'Completed' ? 'text-green-400' : task.status === 'Pending' ? 'text-yellow-400' : 'text-blue-400'}`}>
              {task.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TeacherDashboard;
