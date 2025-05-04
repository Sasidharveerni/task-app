import React from 'react';

const upcomingExams = [
  { examtype: "Unit 1", subjects: '6', date: "12-05-2025" },
  { examtype: "Mid-Term", subjects: '5', date: "25-06-2025" },
];

const holidays = [
  { name: "Summer Break", duration: "60 days" },
  { name: "Diwali", duration: "5 days" }
];

function Calendar() {
  return (
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Calendar & Events</h2>
      <h3 className="text-md text-indigo-400 mb-2">Upcoming Exams</h3>
      <ul className="mb-4">
        {upcomingExams.map((exam, i) => (
          <li key={i} className="flex justify-between bg-gray-700 p-2 mb-2 rounded">
            <span>{exam.examtype}</span>
            <span className="text-sm text-gray-400">{exam.date} · {exam.subjects} subjects</span>
          </li>
        ))}
      </ul>
      <h3 className="text-md text-indigo-400 mb-2">Holidays</h3>
      <ul>
        {holidays.map((h, i) => (
          <li key={i} className="flex justify-between bg-gray-700 p-2 mb-2 rounded">
            <span>{h.name}</span>
            <span className="text-sm text-gray-400">{h.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Calendar;
