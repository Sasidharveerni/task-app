import React, { useState } from 'react'; 
import { 
  Pie, PieChart, Cell, 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from 'recharts'; 
import { 
  Calendar, Clock, Bell, Users, BarChart2, Brain, 
  CheckSquare, List, Settings, LogOut, BookOpen,
  FileText, UserCheck, Award, AlertCircle, Search,
  Filter, ChevronDown, Download, Mail, Phone,
  PlusCircle, Trash2, Edit, Eye, EyeOff, ExternalLink,
  Printer, Clipboard, MoreHorizontal, Tag, MessageCircle
} from 'lucide-react';

// Mock Data
const studentsData = [
  { id: 1, name: 'Sasi Kumar', rollNo: 2, class: '10th', section: 'A', gender: 'Male', attendancePercentage: 95, performance: 87, contact: '+91 9876543210', parent: 'Raj Kumar', address: '123 Main St, Chennai' },
  { id: 2, name: 'Priya Sharma', rollNo: 9, class: '10th', section: 'A', gender: 'Female', attendancePercentage: 98, performance: 92, contact: '+91 9876543211', parent: 'Vijay Sharma', address: '456 Park Ave, Delhi' },
  { id: 3, name: 'Rahul Gupta', rollNo: 15, class: '9th', section: 'B', gender: 'Male', attendancePercentage: 82, performance: 78, contact: '+91 9876543212', parent: 'Sanjay Gupta', address: '789 Lake Rd, Mumbai' },
  { id: 4, name: 'Ananya Singh', rollNo: 7, class: '9th', section: 'B', gender: 'Female', attendancePercentage: 92, performance: 88, contact: '+91 9876543213', parent: 'Rajesh Singh', address: '234 Hill St, Bangalore' },
  { id: 5, name: 'Mohammed Khan', rollNo: 3, class: '8th', section: 'C', gender: 'Male', attendancePercentage: 78, performance: 75, contact: '+91 9876543214', parent: 'Abdul Khan', address: '567 River Ln, Hyderabad' },
  { id: 6, name: 'Kavya Patel', rollNo: 12, class: '8th', section: 'C', gender: 'Female', attendancePercentage: 90, performance: 86, contact: '+91 9876543215', parent: 'Nitin Patel', address: '890 Beach Rd, Ahmedabad' },
  { id: 7, name: 'Vijay Reddy', rollNo: 5, class: '7th', section: 'A', gender: 'Male', attendancePercentage: 85, performance: 72, contact: '+91 9876543216', parent: 'Ram Reddy', address: '432 Temple St, Pune' },
  { id: 8, name: 'Sneha Verma', rollNo: 8, class: '7th', section: 'A', gender: 'Female', attendancePercentage: 93, performance: 91, contact: '+91 9876543217', parent: 'Kiran Verma', address: '765 Market Ave, Kolkata' }
];

const reportData = {
  attendanceReport: [
    { month: 'Jan', attendance: 95 },
    { month: 'Feb', attendance: 93 },
    { month: 'Mar', attendance: 91 },
    { month: 'Apr', attendance: 94 },
    { month: 'May', attendance: 90 },
    { month: 'Jun', attendance: 85 },
    { month: 'Jul', attendance: 80 },
    { month: 'Aug', attendance: 92 },
    { month: 'Sep', attendance: 94 },
    { month: 'Oct', attendance: 96 },
    { month: 'Nov', attendance: 95 },
    { month: 'Dec', attendance: 92 }
  ]
};

// Complete Attendance Component
export function AttendanceComponent() {
  const [viewMode, setViewMode] = useState('today');
  const [selectedClass, setSelectedClass] = useState('All');
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  
  const classOptions = ['All', '6th', '7th', '8th', '9th', '10th'];
  
  const attendanceByClass = {
    '6th': { present: 45, absent: 5, total: 50, percentage: 90 },
    '7th': { present: 52, absent: 3, total: 55, percentage: 95 },
    '8th': { present: 48, absent: 7, total: 55, percentage: 87 },
    '9th': { present: 58, absent: 2, total: 60, percentage: 97 },
    '10th': { present: 54, absent: 6, total: 60, percentage: 90 }
  };
  
  const totalAttendance = Object.values(attendanceByClass).reduce(
    (acc, curr) => {
      return {
        present: acc.present + curr.present,
        absent: acc.absent + curr.absent,
        total: acc.total + curr.total,
        percentage: Math.round(((acc.present + curr.present) / (acc.total + curr.total)) * 100)
      };
    },
    { present: 0, absent: 0, total: 0, percentage: 0 }
  );
  
  // For monthly trends
  const monthlyData = reportData.attendanceReport;
  
  // For today's attendance by student
  const todayAttendance = studentsData.map(student => {
    const existingRecord = attendanceRecords.find(r => r.studentId === student.id);
    return {
      ...student,
      status: existingRecord?.status || (Math.random() > 0.1 ? 'Present' : 'Absent'),
      arrivalTime: existingRecord?.arrivalTime || (Math.random() > 0.1 ? '8:' + Math.floor(Math.random() * 30 + 10) + ' AM' : '-'),
    };
  });

  const filteredStudents = selectedClass === 'All' 
    ? todayAttendance
    : todayAttendance.filter(student => student.class === selectedClass);
  
  // Handle taking attendance
  const handleTakeAttendance = () => {
    const newRecords = filteredStudents.map(student => ({
      studentId: student.id,
      name: student.name,
      class: student.class,
      section: student.section,
      status: 'Present', // Default to present
      arrivalTime: '8:30 AM', // Default time
      date: new Date().toLocaleDateString('en-GB') // Current date in DD/MM/YYYY format
    }));
    setAttendanceRecords([...attendanceRecords, ...newRecords]);
    alert('Attendance session started! You can now mark students as present/absent.');
  };
  
  // Handle exporting data
  const handleExportData = () => {
    const dataToExport = filteredStudents.map(student => ({
      'Student Name': student.name,
      'Roll No': student.rollNo,
      'Class': student.class,
      'Section': student.section,
      'Status': student.status,
      'Arrival Time': student.arrivalTime,
      'Parent Contact': student.contact
    }));
    
    const csvContent = [
      Object.keys(dataToExport[0]).join(','),
      ...dataToExport.map(item => Object.values(item).join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `attendance_${selectedClass}_${new Date().toISOString().slice(0,10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  // Handle status change
  const handleStatusChange = (studentId, newStatus) => {
    setAttendanceRecords(prev => {
      const existingIndex = prev.findIndex(r => r.studentId === studentId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], status: newStatus };
        return updated;
      }
      const student = studentsData.find(s => s.id === studentId);
      return [
        ...prev,
        {
          studentId,
          name: student.name,
          class: student.class,
          section: student.section,
          status: newStatus,
          arrivalTime: '8:30 AM',
          date: new Date().toLocaleDateString('en-GB')
        }
      ];
    });
  };
  
  // Handle time change
  const handleTimeChange = (studentId, newTime) => {
    setAttendanceRecords(prev => {
      const existingIndex = prev.findIndex(r => r.studentId === studentId);
      if (existingIndex >= 0) {
        const updated = [...prev];
        updated[existingIndex] = { ...updated[existingIndex], arrivalTime: newTime };
        return updated;
      }
      const student = studentsData.find(s => s.id === studentId);
      return [
        ...prev,
        {
          studentId,
          name: student.name,
          class: student.class,
          section: student.section,
          status: 'Present',
          arrivalTime: newTime,
          date: new Date().toLocaleDateString('en-GB')
        }
      ];
    });
  };

  return (
    <div className="bg-white min-h-screen p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Attendance Management</h1>
        <div className="flex gap-2">
          <button 
            className="bg-indigo-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-indigo-700"
            onClick={handleTakeAttendance}
          >
            <PlusCircle size={16} />
            <span>Take Attendance</span>
          </button>
          <button 
            className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-gray-200 border border-gray-300"
            onClick={handleExportData}
          >
            <Download size={16} />
            <span>Export Data</span>
          </button>
        </div>
      </div>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600">Total Students</div>
          <div className="text-2xl font-bold text-gray-800">{totalAttendance.total}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600">Present Today</div>
          <div className="text-2xl font-bold text-green-600">{totalAttendance.present}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600">Absent Today</div>
          <div className="text-2xl font-bold text-red-600">{totalAttendance.absent}</div>
        </div>
        <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
          <div className="text-sm text-gray-600">Attendance Rate</div>
          <div className="text-2xl font-bold text-blue-600">{totalAttendance.percentage}%</div>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <div className="flex gap-2 flex-wrap">
          <button 
            className={`px-4 py-2 rounded-lg ${viewMode === 'today' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            onClick={() => setViewMode('today')}
          >
            Today
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${viewMode === 'weekly' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            onClick={() => setViewMode('weekly')}
          >
            This Week
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${viewMode === 'monthly' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            onClick={() => setViewMode('monthly')}
          >
            Monthly
          </button>
          <button 
            className={`px-4 py-2 rounded-lg ${viewMode === 'trends' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-800 hover:bg-gray-200'}`}
            onClick={() => setViewMode('trends')}
          >
            Trends
          </button>
        </div>
        <div className="flex items-center bg-white rounded-lg px-3 ml-auto border border-gray-300">
          <span className="text-gray-600 mr-2">Class:</span>
          <select 
            className="bg-white p-2 focus:outline-none"
            value={selectedClass}
            onChange={(e) => setSelectedClass(e.target.value)}
          >
            {classOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>
      </div>
      
      {viewMode === 'today' && (
        <>
          {/* Today's Attendance By Class */}
          <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">Today's Attendance by Class</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={Object.entries(attendanceByClass).map(([className, data]) => ({
                      class: className,
                      present: data.present,
                      absent: data.absent
                    }))}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                    <XAxis dataKey="class" stroke="#6B7280" />
                    <YAxis stroke="#6B7280" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                      itemStyle={{ color: '#111827' }}
                    />
                    <Legend />
                    <Bar dataKey="present" stackId="a" fill="#10B981" />
                    <Bar dataKey="absent" stackId="a" fill="#EF4444" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={[
                        { name: 'Present', value: totalAttendance.present },
                        { name: 'Absent', value: totalAttendance.absent }
                      ]}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      <Cell fill="#10B981" />
                      <Cell fill="#EF4444" />
                    </Pie>
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                      itemStyle={{ color: '#111827' }}
                    />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
          
          {/* Student Attendance List */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-200 shadow-sm">
            <table className="min-w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="py-3 px-4 text-left text-gray-700">Student</th>
                  <th className="py-3 px-4 text-left text-gray-700">Roll No</th>
                  <th className="py-3 px-4 text-left text-gray-700">Class</th>
                  <th className="py-3 px-4 text-left text-gray-700">Status</th>
                  <th className="py-3 px-4 text-left text-gray-700">Arrival Time</th>
                  <th className="py-3 px-4 text-left text-gray-700">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {filteredStudents.map(student => (
                  <tr key={student.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-3 px-4 text-gray-800">{student.name}</td>
                    <td className="py-3 px-4 text-gray-800">{student.rollNo}</td>
                    <td className="py-3 px-4 text-gray-800">{student.class}</td>
                    <td className="py-3 px-4 text-gray-800">
                      <select 
                        value={student.status}
                        onChange={(e) => handleStatusChange(student.id, e.target.value)}
                        className="bg-white p-2 rounded-lg border border-gray-300 focus:outline-none"
                      >
                        <option value="Present">Present</option>
                        <option value="Absent">Absent</option>
                      </select>
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      {student.status === 'Present' ? (
                        <input 
                          type="time" 
                          value={student.arrivalTime} 
                          onChange={(e) => handleTimeChange(student.id, e.target.value)} 
                          className="bg-white p-2 rounded-lg border border-gray-300 focus:outline-none"
                        />
                      ) : (
                        '-'
                      )}
                    </td>
                    <td className="py-3 px-4 text-gray-800">
                      <button 
                        onClick={() => handleStatusChange(student.id, student.status === 'Present' ? 'Absent' : 'Present')}
                        className="text-indigo-600 hover:text-indigo-800"
                      >
                        {student.status === 'Present' ? 'Mark Absent' : 'Mark Present'}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="p-4">
              <button 
                onClick={() => setAttendanceRecords([])}
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
              >
                Clear Attendance
              </button>
            </div>
          </div>
        </>
      )}
      {viewMode === 'weekly' && (
        <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Weekly Attendance Report</h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#111827' }}
              />
              <Legend />
              <Bar dataKey="attendance" fill="#10B981" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      )}
      {viewMode === 'monthly' && (
        <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Monthly Attendance Report</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#111827' }}
              />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
      {viewMode === 'trends' && (
        <div className="bg-white p-6 rounded-lg mb-6 border border-gray-200 shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Attendance Trends</h2>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart
              data={monthlyData}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
              <XAxis dataKey="month" stroke="#6B7280" />
              <YAxis stroke="#6B7280" />
              <Tooltip 
                contentStyle={{ backgroundColor: '#FFFFFF', border: '1px solid #E5E7EB', borderRadius: '4px', boxShadow: '0 1px 3px rgba(0,0,0,0.1)' }}
                itemStyle={{ color: '#111827' }}
              />
              <Legend />
              <Line type="monotone" dataKey="attendance" stroke="#10B981" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
}
              