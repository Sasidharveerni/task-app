import React from 'react'
import { 
    Pie, PieChart, Cell, 
    BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
    LineChart, Line, CartesianGrid, Legend
  } from 'recharts';
  import { Calendar, Clock, Bell, Users, BarChart2, Brain, CheckSquare, List, Settings, LogOut } from 'lucide-react';
import SchoolDashboard from './school/SchoolDashboard';
  

function DashBoard() {
    const taskData = {
        pending: 8,
        completed: 14,
        overdue: 3,
        total: 25
      };
      const priorityTasks = [
        { id: 1, title: 'Complete Q2 Report', deadline: '2025-04-12', priority: 'High', mlScore: 92 },
        { id: 2, title: 'Client Meeting Preparation', deadline: '2025-04-10', priority: 'High', mlScore: 89 },
        { id: 3, title: 'Review Marketing Proposals', deadline: '2025-04-15', priority: 'Medium', mlScore: 76 },
        { id: 4, title: 'Update Team Documentation', deadline: '2025-04-18', priority: 'Low', mlScore: 54 }
      ];

      const calculateCompletionPercentage = () => {
        return Math.round((taskData.completed / taskData.total) * 100);
      };

      const upcomingEvents = [
        { id: 1, title: 'Team Stand-up', time: '9:30 AM', date: 'Today' },
        { id: 2, title: 'Project Review', time: '2:00 PM', date: 'Today' },
        { id: 3, title: 'Client Call', time: '11:00 AM', date: 'Tomorrow' }
      ];

      const completionData = [
        { name: 'Mon', completed: 4, total: 6 },
        { name: 'Tue', completed: 6, total: 7 },
        { name: 'Wed', completed: 5, total: 8 },
        { name: 'Thu', completed: 3, total: 5 },
        { name: 'Fri', completed: 7, total: 9 },
        { name: 'Sat', completed: 2, total: 3 },
        { name: 'Sun', completed: 1, total: 2 }
      ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/* Task Summary Card */}
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Task Summary</h2>
      <div className="flex justify-between items-center">
        <div>
          <div className="text-gray-400 mb-1">Total Tasks</div>
          <div className="text-3xl font-bold">{taskData.total}</div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between">
              <span className="text-green-400">Completed</span>
              <span>{taskData.completed}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-blue-400">Pending</span>
              <span>{taskData.pending}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-red-400">Overdue</span>
              <span>{taskData.overdue}</span>
            </div>
          </div>
        </div>



        <div className="w-24 h-24">
          <PieChart width={100} height={100}>
            <Pie
              data={[
                { name: 'Completed', value: taskData.completed },
                { name: 'Pending', value: taskData.pending },
                { name: 'Overdue', value: taskData.overdue }
              ]}
              cx="50%"
              cy="50%"
              innerRadius={25}
              outerRadius={40}
              paddingAngle={5}
              dataKey="value"
            >
              <Cell fill="#4ADE80" />
              <Cell fill="#60A5FA" />
              <Cell fill="#F87171" />
            </Pie>
          </PieChart>
        </div>
      </div>
    </div>

    
    
    {/* Priority Tasks */}
    <div className="bg-gray-800 p-6 rounded-xl row-span-2">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">ML Priority Tasks</h2>
        <Brain size={18} className="text-indigo-400" />
      </div>
      <div className="space-y-4">
        {priorityTasks.map(task => (
          <div key={task.id} className="bg-gray-700 p-4 rounded-lg">
            <div className="flex justify-between mb-2">
              <h3 className="font-medium">{task.title}</h3>
              <div className="text-xs px-2 py-1 rounded-full bg-opacity-20 font-medium" 
                style={{
                  backgroundColor: task.priority === 'High' ? 'rgba(244, 67, 54, 0.2)' : 
                                  task.priority === 'Medium' ? 'rgba(255, 152, 0, 0.2)' : 
                                  'rgba(76, 175, 80, 0.2)',
                  color: task.priority === 'High' ? '#f44336' : 
                        task.priority === 'Medium' ? '#ff9800' : 
                        '#4caf50'
                }}>
                {task.priority}
              </div>
            </div>
            <div className="flex justify-between text-sm text-gray-400">
              <div>Due: {task.deadline}</div>
              <div className="flex items-center">
                <div className="w-1 h-1 rounded-full bg-indigo-400 mr-1"></div>
                <span className="text-indigo-400">ML Score: {task.mlScore}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    
    {/* Completion Rate */}
    <div className="bg-gray-800 p-6 rounded-xl">
      <h2 className="text-xl font-semibold mb-4">Completion Rate</h2>
      <div className="flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-3xl font-bold">{calculateCompletionPercentage()}%</div>
          </div>
          <svg className="w-full h-full" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#444"
              strokeWidth="3"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#4f46e5"
              strokeWidth="3"
              strokeDasharray={`${calculateCompletionPercentage()}, 100`}
            />
          </svg>
        </div>
        <div className="text-center text-gray-400">
          <div>{taskData.completed} of {taskData.total} tasks completed</div>
          <div>Keep up the good work!</div>
        </div>
      </div>
    </div>
    
    {/* Upcoming Events */}
    <div className="bg-gray-800 p-6 rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">Upcoming Events</h2>
        <Calendar size={18} className="text-indigo-400" />
      </div>
      <div className="space-y-4">
        {upcomingEvents.map(event => (
          <div key={event.id} className="flex items-center gap-3 p-3 border-l-2 border-indigo-500">
            <div className="bg-indigo-900 bg-opacity-50 p-2 rounded-lg">
              <Clock size={18} />
            </div>
            <div>
              <div className="font-medium">{event.title}</div>
              <div className="text-sm text-gray-400">{event.date} · {event.time}</div>
            </div>
          </div>
        ))}
        <button className="text-indigo-400 text-sm flex items-center gap-1 mt-2">
          <span>View Full Schedule</span>
          <span>→</span>
        </button>
      </div>
    </div>
    
    {/* Weekly Progress */}
    <div className="bg-gray-800 p-6 rounded-xl col-span-2">
      <h2 className="text-xl font-semibold mb-4">Weekly Task Progress</h2>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={completionData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#444" />
            <XAxis dataKey="name" stroke="#999" />
            <YAxis stroke="#999" />
            <Tooltip 
              contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }}
              itemStyle={{ color: '#E5E7EB' }}
            />
            <Legend />
            <Bar name="Completed Tasks" dataKey="completed" fill="#4F46E5" radius={[4, 4, 0, 0]} />
            <Bar name="Total Tasks" dataKey="total" fill="#6B7280" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  </div>
  )
}

export default DashBoard