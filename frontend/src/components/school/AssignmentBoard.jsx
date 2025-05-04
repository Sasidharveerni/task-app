import React from 'react';

const assignmentTrack = { subject: 'English', class: '10', section: 'A', teacher: 'Devi' };
const assignments = [
  { subject: 'English', dueDate: '20-05-2025', status: '50%', section: 'C', class: '7th' },
  { subject: 'Math', dueDate: '18-05-2025', status: '75%', section: 'B', class: '6th' },
  { subject: 'Science', dueDate: '22-05-2025', status: '30%', section: 'A', class: '8th' },
  { subject: 'History', dueDate: '25-05-2025', status: '100%', section: 'D', class: '9th' },
];

function AssignmentBoard() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Assignment Tracker</h2>
      <p className="text-sm text-gray-400 mb-2">Handled by: {assignmentTrack.teacher} ({assignmentTrack.subject} - Class {assignmentTrack.class}{assignmentTrack.section})</p>
      <div className="space-y-3">
        {assignments.map((a, i) => (
          <div key={i} className="bg-gray-700 p-3 rounded-lg flex justify-between">
            <div>
              <div className="font-medium">{a.subject}</div>
              <div className="text-sm text-gray-400">Class {a.class}, Section {a.section}</div>
            </div>
            <div className="text-sm text-indigo-400">Due: {a.dueDate} · {a.status}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AssignmentBoard;
