import React from 'react';

const students = [
  { name: "Sasi", Section: "A", class: "10th", RollNo: 2, attendancePercentage: 92 },
  { name: "Kiran", Section: "B", class: "9th", RollNo: 5, attendancePercentage: 87 },
  { name: "Maya", Section: "C", class: "8th", RollNo: 11, attendancePercentage: 95 },
  { name: "Arun", Section: "A", class: "10th", RollNo: 6, attendancePercentage: 76 },
];

function Attendance() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Attendance Summary</h2>
      <div className="space-y-3">
        {students.map((s, i) => (
          <div key={i} className="flex justify-between items-center bg-gray-700 p-3 rounded-lg">
            <div>
              <div className="font-medium">{s.name} ({s.RollNo})</div>
              <div className="text-sm text-gray-400">Class {s.class} · Section {s.Section}</div>
            </div>
            <div className={`text-sm font-medium ${s.attendancePercentage >= 90 ? 'text-green-400' : 'text-yellow-400'}`}>
              {s.attendancePercentage}%
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Attendance;
