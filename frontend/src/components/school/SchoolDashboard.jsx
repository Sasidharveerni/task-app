import React, { useState } from 'react'; 
import { 
  Pie, PieChart, Cell, 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from 'recharts'; 
import { 
  Calendar, Clock, Bell, Users, BarChart2, Brain, 
  CheckSquare, List, Settings, LogOut, BookOpen,
  FileText, UserCheck, Award, AlertCircle
} from 'lucide-react'; 
import { useNavigate } from 'react-router';

// Sample Data for School Dashboard
const assignmentTracks = [
  { id: 1, subject: 'English', class: '10', section: 'A', teacher: 'Devi', status: 'In Progress' },
  { id: 2, subject: 'Mathematics', class: '9', section: 'B', teacher: 'Sharma', status: 'Completed' },
  { id: 3, subject: 'Science', class: '8', section: 'C', teacher: 'Rahman', status: 'Not Started' },
  { id: 4, subject: 'History', class: '10', section: 'A', teacher: 'Gupta', status: 'In Progress' }
];

const assignments = [
  { id: 1, subject: 'English', dueDate: '20-05-2025', status: '50%', section: 'C', class: '7th', title: 'Essay on Climate Change' },
  { id: 2, subject: 'Mathematics', dueDate: '15-05-2025', status: '75%', section: 'A', class: '10th', title: 'Quadratic Equations' },
  { id: 3, subject: 'Science', dueDate: '18-05-2025', status: '30%', section: 'B', class: '8th', title: 'Plant Biology Project' },
  { id: 4, subject: 'Computer', dueDate: '22-05-2025', status: '10%', section: 'C', class: '9th', title: 'Web Design Basics' }
];

const students = [
  { id: 1, name: 'Sasi Kumar', section: 'A', class: '10th', rollNo: 2, attendancePercentage: 95 },
  { id: 2, name: 'Ravi Patel', section: 'A', class: '10th', rollNo: 5, attendancePercentage: 88 },
  { id: 3, name: 'Ananya Singh', section: 'B', class: '9th', rollNo: 7, attendancePercentage: 92 },
  { id: 4, name: 'Mohammed Khan', section: 'C', class: '8th', rollNo: 3, attendancePercentage: 78 },
  { id: 5, name: 'Priya Sharma', section: 'A', class: '10th', rollNo: 9, attendancePercentage: 98 }
];

const teacherTasks = [
  { id: 1, class: '8th', name: 'Grading Science Projects', deadline: '14-05-2025', status: 'Pending', priority: 'High' },
  { id: 2, class: '10th', name: 'Prepare Final Exam', deadline: '20-05-2025', status: 'In Progress', priority: 'High' },
  { id: 3, class: '9th', name: 'Parent-Teacher Meetings', deadline: '25-05-2025', status: 'Not Started', priority: 'Medium' },
  { id: 4, class: '7th', name: 'Update Progress Reports', deadline: '18-05-2025', status: 'Pending', priority: 'Low' }
];

const upcomingExams = [
  { id: 1, examType: 'Unit 1', subjects: 6, date: '12-05-2025', classes: ['8th', '9th', '10th'] },
  { id: 2, examType: 'Half Yearly', subjects: 8, date: '15-06-2025', classes: ['6th', '7th', '8th', '9th', '10th'] },
  { id: 3, examType: 'Practical Assessment', subjects: 3, date: '25-05-2025', classes: ['10th'] }
];

const holidays = [
  { id: 1, name: 'Summer Vacation', duration: '60d', startDate: '01-06-2025', endDate: '31-07-2025' },
  { id: 2, name: 'Teacher Day', duration: '1d', startDate: '05-09-2025', endDate: '05-09-2025' },
  { id: 3, name: 'Diwali Break', duration: '5d', startDate: '20-10-2025', endDate: '25-10-2025' }
];

const attendanceData = [
  { class: '6th', present: 45, absent: 5, total: 50 },
  { class: '7th', present: 52, absent: 3, total: 55 },
  { class: '8th', present: 48, absent: 7, total: 55 },
  { class: '9th', present: 58, absent: 2, total: 60 },
  { class: '10th', present: 54, absent: 6, total: 60 }
];

const navigate = useNavigate();
// AssignmentBoard Component
export function AssignmentBoard() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Assignments</h2>
        <BookOpen size={18} className="text-indigo-600" />
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg overflow-hidden border border-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="py-3 px-4 text-left text-gray-700">Subject</th>
              <th className="py-3 px-4 text-left text-gray-700">Class</th>
              <th className="py-3 px-4 text-left text-gray-700">Due Date</th>
              <th className="py-3 px-4 text-left text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {assignments.map(assignment => (
              <tr key={assignment.id} className="hover:bg-gray-50">
                <td className="py-3 px-4">
                  <div className="font-medium text-gray-800">{assignment.subject}</div>
                  <div className="text-sm text-gray-500">{assignment.title}</div>
                </td>
                <td className="py-3 px-4 text-gray-700">{assignment.class} - {assignment.section}</td>
                <td className="py-3 px-4 text-gray-700">{assignment.dueDate}</td>
                <td className="py-3 px-4">
                  <div className="flex items-center">
                    <div className="w-16 bg-gray-200 rounded-full h-2 mr-2">
                      <div 
                        className="h-full rounded-full" 
                        style={{ 
                          width: assignment.status,
                          backgroundColor: parseInt(assignment.status) < 30 ? '#EF4444' : 
                                        parseInt(assignment.status) < 70 ? '#F59E0B' : 
                                        '#10B981'
                        }} 
                      />
                    </div>
                    <span className="text-gray-700">{assignment.status}</span>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button className="mt-4 text-indigo-600 text-sm flex items-center gap-1 hover:text-indigo-800">
        <span>View All Assignments</span>
        <span>→</span>
      </button>
    </div>
  );
}

// AttendanceComponent
export function AttendanceComponent() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Today's Attendance</h2>
        <UserCheck size={18} className="text-indigo-600" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex justify-between mb-2">
            <div className="text-sm text-gray-600">Overall</div>
            <div className="text-sm font-medium text-gray-800">92%</div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-green-500 h-full rounded-full" style={{ width: '92%' }} />
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <div className="text-sm text-gray-600">Total Students</div>
              <div className="font-medium text-xl text-gray-800">280</div>
            </div>
            <div>
              <div className="text-sm text-gray-600">Present Today</div>
              <div className="font-medium text-xl text-gray-800">257</div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={attendanceData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
            <XAxis dataKey="class" stroke="#6B7280" />
            <YAxis stroke="#6B7280" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
              itemStyle={{ color: '#111827' }}
            />
            <Legend />
            <Bar name="Present" dataKey="present" fill="#10B981" radius={[4, 4, 0, 0]} />
            <Bar name="Absent" dataKey="absent" fill="#EF4444" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-4 space-y-2">
        <div className="text-gray-600">Student Highlights</div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {students.slice(0, 2).map(student => (
            <div key={student.id} className="flex justify-between items-center p-2 bg-gray-50 rounded-lg border border-gray-200">
              <div>
                <div className="font-medium text-gray-800">{student.name}</div>
                <div className="text-sm text-gray-500">Class {student.class} - {student.section} | Roll #{student.rollNo}</div>
              </div>
              <div className={`text-sm px-2 py-1 rounded-full font-medium ${
                student.attendancePercentage >= 90 ? 'bg-green-100 text-green-800' : 
                student.attendancePercentage >= 80 ? 'bg-yellow-100 text-yellow-800' : 
                'bg-red-100 text-red-800'
              }`}>
                {student.attendancePercentage}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// TeacherDashboard Component
export function TeacherDashboard() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Teacher Tasks</h2>
        <FileText size={18} className="text-indigo-600" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <div className="text-gray-600">Total Tasks</div>
            <div className="bg-indigo-100 px-2 py-1 rounded-md text-sm text-indigo-800">{teacherTasks.length}</div>
          </div>
          <div className="flex items-center gap-4">
            <div>
              <div className="text-xl font-bold text-gray-800">3</div>
              <div className="text-sm text-gray-500">Pending</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">1</div>
              <div className="text-sm text-gray-500">In Progress</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-800">0</div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="text-gray-600 mb-2">Task Priorities</div>
          <div className="flex items-center gap-4">
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <div className="text-sm text-gray-700">High</div>
                <div className="text-sm text-gray-700">2</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-red-500 h-full rounded-full" style={{ width: '50%' }} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <div className="text-sm text-gray-700">Medium</div>
                <div className="text-sm text-gray-700">1</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-500 h-full rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-1">
                <div className="text-sm text-gray-700">Low</div>
                <div className="text-sm text-gray-700">1</div>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-blue-500 h-full rounded-full" style={{ width: '25%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-3">
        {teacherTasks.map(task => (
          <div key={task.id} className="bg-gray-50 p-3 rounded-lg border border-gray-200">
            <div className="flex justify-between items-center mb-2">
              <div className="font-medium text-gray-800">{task.name}</div>
              <div className={`text-xs px-2 py-1 rounded-full font-medium ${
                task.priority === 'High' ? 'bg-red-100 text-red-800' : 
                task.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                'bg-blue-100 text-blue-800'
              }`}>
                {task.priority}
              </div>
            </div>
            <div className="flex justify-between text-sm">
              <div className="text-gray-500">Class: {task.class}</div>
              <div className="text-gray-500">Due: {task.deadline}</div>
              <div className={`${
                task.status === 'Pending' ? 'text-yellow-600' : 
                task.status === 'In Progress' ? 'text-blue-600' : 
                task.status === 'Completed' ? 'text-green-600' : 
                'text-red-600'
              }`}>
                {task.status}
              </div>
            </div>
          </div>
        ))}
      </div>
      <button className="mt-4 text-indigo-600 text-sm flex items-center gap-1 hover:text-indigo-800">
        <span>Manage All Tasks</span>
        <span>→</span>
      </button>
    </div>
  );
}

// Calendar Component
export function CalendarIntegration() {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold text-gray-800">Academic Calendar</h2>
        <Calendar size={18} className="text-indigo-600" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <AlertCircle size={16} className="text-red-500" />
            <h3 className="font-medium text-gray-800">Upcoming Exams</h3>
          </div>
          <div className="space-y-3">
            {upcomingExams.map(exam => (
              <div key={exam.id} className="flex items-center gap-3 p-2 border-l-2 border-red-500">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{exam.examType}</div>
                  <div className="text-sm text-gray-500">
                    {exam.subjects} subjects • Classes: {exam.classes.join(', ')}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-800">{exam.date}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
          <div className="flex items-center gap-2 mb-3">
            <Bell size={16} className="text-green-500" />
            <h3 className="font-medium text-gray-800">Holidays</h3>
          </div>
          <div className="space-y-3">
            {holidays.map(holiday => (
              <div key={holiday.id} className="flex items-center gap-3 p-2 border-l-2 border-green-500">
                <div className="flex-1">
                  <div className="font-medium text-gray-800">{holiday.name}</div>
                  <div className="text-sm text-gray-500">
                    {holiday.startDate} to {holiday.endDate}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm px-2 py-1 bg-green-100 text-green-800 rounded-full">
                    {holiday.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-800">Calendar Integration</h3>
          <div className="flex gap-2">
            <button className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full hover:bg-blue-200">Google Calendar</button>
            <button className="bg-gray-200 text-gray-700 text-xs px-3 py-1 rounded-full hover:bg-gray-300">iCal</button>
          </div>
        </div>
        <div className="text-sm text-gray-500 mb-3">
          Keep track of all school events, exams, and holidays in your personal calendar.
        </div>
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-700">Auto-sync enabled</div>
          <div className="w-12 h-6 bg-blue-200 rounded-full p-1 cursor-pointer">
            <div className="w-4 h-4 bg-white rounded-full transform translate-x-6 shadow-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Main SchoolDashboard Component
function SchoolDashboard() {
  // Sidebar navigation items
  const navItems = [
    { icon: <BarChart2 size={20} />, label: 'Dashboard', active: true, link: '/dashboard' },
    { icon: <BookOpen size={20} />, label: 'Assignments', active: false , link: '/assignment'},
    { icon: <UserCheck size={20} />, label: 'Attendance', active: false, link: '/attendance' },
    { icon: <Users size={20} />, label: 'Students', active: false, link: '/students' },
    { icon: <Calendar size={20} />, label: 'Calendar', active: false, link: '/calendar' },
    { icon: <FileText size={20} />, label: 'Reports', active: false , link: '/file'},
    { icon: <Award size={20} />, label: 'Examinations', active: false, link: '/award' },
    { icon: <Settings size={20} />, label: 'Settings', active: false, link: '/settings' },
  ];

  // Dashboard stats
  const dashboardStats = [
    { label: 'Total Students', value: '1,250', icon: <Users size={24} className="text-blue-500" />, change: '+15%', color: 'blue' },
    { label: 'Total Classes', value: '45', icon: <List size={24} className="text-green-500" />, change: '+5%', color: 'green' },
    { label: 'Attendance Rate', value: '92%', icon: <UserCheck size={24} className="text-purple-500" />, change: '+3%', color: 'purple' },
    { label: 'Exam Pass Rate', value: '87%', icon: <Award size={24} className="text-yellow-500" />, change: '+7%', color: 'yellow' },
  ];

  return (
    <div className="flex h-screen bg-white text-gray-800">
      {/* Sidebar */}
      <div className="w-64 bg-gray-50 p-4 flex flex-col border-r border-gray-200">
        <div className="flex items-center gap-3 px-2 py-4 mb-6">
          <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center font-bold text-lg text-white">S</div>
          <div>
            <div className="font-semibold text-gray-800">School Dashboard</div>
            <div className="text-xs text-gray-500">Admin Panel</div>
          </div>
        </div>
        <nav className="flex-1">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li key={index}>
                <a 
                  onClick={navigate(`/${item.link}`)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-lg ${
                    item.active ? 'bg-indigo-600 text-white' : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                  {item.active && <div className="w-2 h-2 rounded-full bg-white ml-auto"></div>}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="mt-auto pt-4 border-t border-gray-200">
          <a href="#" className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-gray-100">
            <LogOut size={20} />
            <span>Logout</span>
          </a>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white p-4 border-b border-gray-200 flex justify-between items-center shadow-sm">
          <div>
            <h1 className="text-xl font-semibold text-gray-800">School Dashboard</h1>
            <div className="text-sm text-gray-500">Welcome back, Principal Sharma</div>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
              <Bell size={20} className="text-gray-700" />
            </button>
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center text-white">PS</div>
              <div className="text-sm">
                <div className="text-gray-800">Principal Sharma</div>
                <div className="text-xs text-gray-500">Admin</div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <main className="p-6">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-6">
            {dashboardStats.map((stat, index) => (
              <div key={index} className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-gray-500 mb-1">{stat.label}</div>
                    <div className="text-3xl font-bold text-gray-800">{stat.value}</div>
                    <div className={`text-sm mt-2 text-${stat.color}-500`}>{stat.change} from last month</div>
                  </div>
                  <div className={`p-3 rounded-lg bg-${stat.color}-100`}>
                    {stat.icon}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Main Dashboard Components */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <AssignmentBoard />
            <AttendanceComponent />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
            <TeacherDashboard />
            <CalendarIntegration />
          </div>
        </main>
      </div>
    </div>
  );
}

export default SchoolDashboard;