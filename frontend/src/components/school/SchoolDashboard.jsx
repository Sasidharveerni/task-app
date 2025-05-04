import React from 'react';
import AssignmentBoard from './AssignmentBoard';
import Attendance from './Attendance';
import TeacherDashboard from './TeacherDashboard';
import Calendar from './Calendar';

function SchoolDashboard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
      <AssignmentBoard />
      <Attendance />
      <TeacherDashboard />
      <Calendar />
    </div>
  );
}

export default SchoolDashboard;
