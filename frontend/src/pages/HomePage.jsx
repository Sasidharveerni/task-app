import React, { useState } from 'react';
import { 
  Pie, PieChart, Cell, 
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer,
  LineChart, Line, CartesianGrid, Legend
} from 'recharts';
import { Calendar, Clock, Bell, Users, BarChart2, Brain, CheckSquare, List, Settings, LogOut } from 'lucide-react';
import DashBoard from '../components/DashBoard';

// Sample data
const userData = {
  username: 'Sasi',
  profilePic: '/api/placeholder/40/40',
  role: 'Project Manager'
};

const taskData = {
  pending: 8,
  completed: 14,
  overdue: 3,
  total: 25
};





const teamMembers = [
  { id: 1, name: 'Alex Chen', role: 'Developer', tasksAssigned: 6, completionRate: 85 },
  { id: 2, name: 'Sarah Johnson', role: 'Designer', tasksAssigned: 4, completionRate: 92 },
  { id: 3, name: 'Miguel Ramos', role: 'QA Engineer', tasksAssigned: 5, completionRate: 78 },
  { id: 4, name: 'Priya Sharma', role: 'Developer', tasksAssigned: 7, completionRate: 81 }
];

const insightsData = [
  { month: 'Jan', productivity: 65 },
  { month: 'Feb', productivity: 72 },
  { month: 'Mar', productivity: 68 },
  { month: 'Apr', productivity: 79 }
];

const categories = [
  { name: 'Development', value: 35 },
  { name: 'Design', value: 25 },
  { name: 'Research', value: 15 },
  { name: 'Meetings', value: 25 }
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const HomePage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const calculateCompletionPercentage = () => {
    return Math.round((taskData.completed / taskData.total) * 100);
  };

  return (
    <div className="flex bg-gray-900 text-white min-h-screen">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 p-4 flex flex-col">
        <div className="text-2xl font-bold mb-8 text-indigo-400">TaskMaster AI</div>
        
        <div className="flex flex-col gap-2">
          <button 
            className={`flex items-center gap-3 p-3 rounded-lg ${activeTab === 'dashboard' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('dashboard')}
          >
            <BarChart2 size={18} />
            <span>Dashboard</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 p-3 rounded-lg ${activeTab === 'tasks' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('tasks')}
          >
            <CheckSquare size={18} />
            <span>Tasks</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 p-3 rounded-lg ${activeTab === 'analytics' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('analytics')}
          >
            <BarChart2 size={18} />
            <span>Analytics</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 p-3 rounded-lg ${activeTab === 'schedule' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('schedule')}
          >
            <Calendar size={18} />
            <span>Schedule</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 p-3 rounded-lg ${activeTab === 'team' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('team')}
          >
            <Users size={18} />
            <span>Team</span>
          </button>
          
          <button 
            className={`flex items-center gap-3 p-3 rounded-lg ${activeTab === 'insights' ? 'bg-indigo-600' : 'hover:bg-gray-700'}`}
            onClick={() => setActiveTab('insights')}
          >
            <Brain size={18} />
            <span>ML Insights</span>
          </button>
        </div>
        
        <div className="mt-auto">
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 w-full">
            <Settings size={18} />
            <span>Settings</span>
          </button>
          
          <button className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-700 text-red-400 w-full">
            <LogOut size={18} />
            <span>Log Out</span>
          </button>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Welcome back, {userData.username}</h1>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Bell size={20} />
              <span className="absolute -top-1 -right-1 bg-red-500 text-xs rounded-full w-4 h-4 flex items-center justify-center">3</span>
            </div>
            <div className="flex items-center gap-2">
              <img src={userData.profilePic} alt="Profile" className="w-8 h-8 rounded-full" />
              <span>{userData.username}</span>
            </div>
          </div>
        </div>
        
        {/* Dashboard Content */}
        {activeTab === 'dashboard' && (
            <DashBoard />
        )}
        
        {/* Analytics Tab */}
        {activeTab === 'analytics' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Task Distribution */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Task Distribution by Category</h2>
              <div className="flex justify-center">
                <PieChart width={280} height={280}>
                  <Pie
                    data={categories}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categories.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }}
                    itemStyle={{ color: '#E5E7EB' }}
                  />
                </PieChart>
              </div>
            </div>
            
            {/* Productivity Trends */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Productivity Trends</h2>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={insightsData}
                    margin={{ top: 5, right: 30, left: 0, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                    <XAxis dataKey="month" stroke="#999" />
                    <YAxis stroke="#999" />
                    <Tooltip 
                      contentStyle={{ backgroundColor: '#1F2937', border: 'none', borderRadius: '4px' }}
                      itemStyle={{ color: '#E5E7EB' }}
                    />
                    <Legend />
                    <Line type="monotone" dataKey="productivity" stroke="#4F46E5" activeDot={{ r: 8 }} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
            
            {/* Completion Times */}
            <div className="bg-gray-800 p-6 rounded-xl col-span-2">
              <h2 className="text-xl font-semibold mb-4">Task Completion Timeline</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 border-b border-gray-700">Task</th>
                      <th className="text-left pb-3 border-b border-gray-700">Start Date</th>
                      <th className="text-left pb-3 border-b border-gray-700">Completed Date</th>
                      <th className="text-left pb-3 border-b border-gray-700">Duration</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Website Redesign</td>
                      <td className="py-3 border-b border-gray-700">Apr 1, 2025</td>
                      <td className="py-3 border-b border-gray-700">Apr 5, 2025</td>
                      <td className="py-3 border-b border-gray-700">4 days</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Content Creation</td>
                      <td className="py-3 border-b border-gray-700">Apr 3, 2025</td>
                      <td className="py-3 border-b border-gray-700">Apr 7, 2025</td>
                      <td className="py-3 border-b border-gray-700">4 days</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Database Migration</td>
                      <td className="py-3 border-b border-gray-700">Apr 4, 2025</td>
                      <td className="py-3 border-b border-gray-700">Apr 6, 2025</td>
                      <td className="py-3 border-b border-gray-700">2 days</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Client Presentation</td>
                      <td className="py-3 border-b border-gray-700">Apr 5, 2025</td>
                      <td className="py-3 border-b border-gray-700">Apr 8, 2025</td>
                      <td className="py-3 border-b border-gray-700">3 days</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Team Tab */}
        {activeTab === 'team' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Team Members */}
            <div className="bg-gray-800 p-6 rounded-xl md:col-span-2">
              <h2 className="text-xl font-semibold mb-4">Team Members</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 border-b border-gray-700">Name</th>
                      <th className="text-left pb-3 border-b border-gray-700">Role</th>
                      <th className="text-left pb-3 border-b border-gray-700">Tasks</th>
                      <th className="text-left pb-3 border-b border-gray-700">Completion Rate</th>
                    </tr>
                  </thead>
                  <tbody>
                    {teamMembers.map(member => (
                      <tr key={member.id}>
                        <td className="py-3 border-b border-gray-700 flex items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                            {member.name.charAt(0)}
                          </div>
                          {member.name}
                        </td>
                        <td className="py-3 border-b border-gray-700">{member.role}</td>
                        <td className="py-3 border-b border-gray-700">{member.tasksAssigned}</td>
                        <td className="py-3 border-b border-gray-700">
                          <div className="flex items-center">
                            <div className="w-full bg-gray-700 rounded-full h-2 mr-2">
                              <div 
                                className="bg-indigo-500 h-2 rounded-full" 
                                style={{ width: `${member.completionRate}%` }}
                              ></div>
                            </div>
                            <span>{member.completionRate}%</span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            
            {/* Team Performance */}
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Team Performance</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Tasks Completed</span>
                    <span>85%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: '85%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>On-Time Delivery</span>
                    <span>78%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-blue-500 h-2 rounded-full" style={{ width: '78%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Communication</span>
                    <span>92%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-purple-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span>Quality</span>
                    <span>89%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="font-medium mb-2">Team Workload</h3>
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span>Current Sprint</span>
                    <span>24 tasks</span>
                  </div>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>April 5 - April 18</span>
                    <span>68% complete</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Task Management */}
            <div className="bg-gray-800 p-6 rounded-xl col-span-3">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Team Task Distribution</h2>
                <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm">Assign New Task</button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                    Todo
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="font-medium">Update API documentation</div>
                      <div className="text-sm text-gray-400 mt-1">Assigned to: Alex Chen</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="font-medium">Create login page mockups</div>
                      <div className="text-sm text-gray-400 mt-1">Assigned to: Sarah Johnson</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    In Progress
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="font-medium">Implement user authentication</div>
                      <div className="text-sm text-gray-400 mt-1">Assigned to: Alex Chen</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="font-medium">Test payment gateway</div>
                      <div className="text-sm text-gray-400 mt-1">Assigned to: Miguel Ramos</div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <h3 className="font-medium mb-3 flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    Completed
                  </h3>
                  <div className="space-y-2">
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="font-medium">Database schema design</div>
                      <div className="text-sm text-gray-400 mt-1">Completed by: Priya Sharma</div>
                    </div>
                    <div className="bg-gray-800 p-3 rounded-md">
                      <div className="font-medium">Create wireframes</div>
                      <div className="text-sm text-gray-400 mt-1">Completed by: Sarah Johnson</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* ML Insights Tab */}
        {activeTab === 'insights' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">ML Productivity Insights</h2>
              <div className="space-y-4">
              <div className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg">
                  <div className="text-indigo-400 font-medium mb-2">Peak Productivity Time</div>
                  <div className="text-2xl font-bold mb-1">9:00 AM - 11:00 AM</div>
                  <div className="text-sm text-gray-400">Based on your task completion patterns, you're most productive in the morning.</div>
                </div>
                
                <div className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg">
                  <div className="text-indigo-400 font-medium mb-2">Task Type Efficiency</div>
                  <div className="text-2xl font-bold mb-1">Development Tasks</div>
                  <div className="text-sm text-gray-400">You complete development tasks 32% faster than other task types.</div>
                </div>
                
                <div className="bg-indigo-900 bg-opacity-20 p-4 rounded-lg">
                  <div className="text-indigo-400 font-medium mb-2">Collaboration Impact</div>
                  <div className="text-2xl font-bold mb-1">+28% Efficiency</div>
                  <div className="text-sm text-gray-400">Tasks involving Sarah Johnson have the highest completion rate.</div>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Task Recommendations</h2>
              <div className="space-y-3">
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Schedule team tasks in the afternoon</h3>
                    <span className="text-green-400 text-sm">95% match</span>
                  </div>
                  <p className="text-sm text-gray-400">Analytics show your team collaboration is most effective between 2-4 PM.</p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Group similar development tasks</h3>
                    <span className="text-green-400 text-sm">87% match</span>
                  </div>
                  <p className="text-sm text-gray-400">Batching similar tasks increases your productivity by approximately 24%.</p>
                </div>
                
                <div className="bg-gray-700 p-4 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <h3 className="font-medium">Take breaks between long meetings</h3>
                    <span className="text-green-400 text-sm">82% match</span>
                  </div>
                  <p className="text-sm text-gray-400">Data shows your focus decreases by 31% in back-to-back meetings longer than 45 minutes.</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl col-span-2">
              <h2 className="text-xl font-semibold mb-4">AI-Powered Task Prioritization</h2>
              <p className="text-gray-400 mb-4">Our ML model analyzes your work patterns, deadlines, task dependencies, and team availability to suggest the optimal task sequence.</p>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 border-b border-gray-700">Priority</th>
                      <th className="text-left pb-3 border-b border-gray-700">Task</th>
                      <th className="text-left pb-3 border-b border-gray-700">ML Score</th>
                      <th className="text-left pb-3 border-b border-gray-700">Reasoning</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 border-b border-gray-700">1</td>
                      <td className="py-3 border-b border-gray-700">Complete Q2 Report</td>
                      <td className="py-3 border-b border-gray-700">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                            <div className="bg-red-500 h-2 rounded-full" style={{ width: '92%' }}></div>
                          </div>
                          <span>92</span>
                        </div>
                      </td>
                      <td className="py-3 border-b border-gray-700 text-sm text-gray-400">Urgent deadline + dependency for other tasks</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">2</td>
                      <td className="py-3 border-b border-gray-700">Client Meeting Preparation</td>
                      <td className="py-3 border-b border-gray-700">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                            <div className="bg-orange-500 h-2 rounded-full" style={{ width: '89%' }}></div>
                          </div>
                          <span>89</span>
                        </div>
                      </td>
                      <td className="py-3 border-b border-gray-700 text-sm text-gray-400">External stakeholder + scheduled event</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">3</td>
                      <td className="py-3 border-b border-gray-700">Review Marketing Proposals</td>
                      <td className="py-3 border-b border-gray-700">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                            <div className="bg-yellow-500 h-2 rounded-full" style={{ width: '76%' }}></div>
                          </div>
                          <span>76</span>
                        </div>
                      </td>
                      <td className="py-3 border-b border-gray-700 text-sm text-gray-400">Medium priority + team waiting for feedback</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">4</td>
                      <td className="py-3 border-b border-gray-700">Update Team Documentation</td>
                      <td className="py-3 border-b border-gray-700">
                        <div className="flex items-center">
                          <div className="w-16 bg-gray-700 rounded-full h-2 mr-2">
                            <div className="bg-green-500 h-2 rounded-full" style={{ width: '54%' }}></div>
                          </div>
                          <span>54</span>
                        </div>
                      </td>
                      <td className="py-3 border-b border-gray-700 text-sm text-gray-400">Important but not urgent + can be deferred</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
        
        {/* Schedule Tab */}
        {activeTab === 'schedule' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">April 2025</h2>
                <div className="flex gap-2">
                  <button className="p-2 bg-gray-700 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                  <button className="p-2 bg-gray-700 rounded-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              </div>
              
              <div className="grid grid-cols-7 gap-1 text-center text-sm mb-2">
                <div>Sun</div>
                <div>Mon</div>
                <div>Tue</div>
                <div>Wed</div>
                <div>Thu</div>
                <div>Fri</div>
                <div>Sat</div>
              </div>
              
              <div className="grid grid-cols-7 gap-1">
                <div className="h-24 p-1 text-gray-500 bg-gray-900 bg-opacity-50 rounded-lg">30</div>
                <div className="h-24 p-1 text-gray-500 bg-gray-900 bg-opacity-50 rounded-lg">31</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">1</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">2</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">3</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">4</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">5</div>
                
                <div className="h-24 p-1 bg-gray-700 rounded-lg">6</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">7</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">8</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg relative">
                  9
                  <div className="absolute bottom-1 left-1 right-1 bg-indigo-500 p-1 rounded text-xs">
                    Team Stand-up
                  </div>
                </div>
                <div className="h-24 p-1 bg-indigo-900 bg-opacity-20 rounded-lg border border-indigo-500 relative">
                  <div className="flex justify-between">
                    <span>10</span>
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                  </div>
                  <div className="absolute bottom-1 left-1 right-1 bg-indigo-500 p-1 rounded text-xs">
                    Client Call
                  </div>
                </div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">11</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">12</div>
                
                <div className="h-24 p-1 bg-gray-700 rounded-lg">13</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">14</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg relative">
                  15
                  <div className="absolute bottom-1 left-1 right-1 bg-blue-500 p-1 rounded text-xs">
                    Report Due
                  </div>
                </div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">16</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">17</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">18</div>
                <div className="h-24 p-1 bg-gray-700 rounded-lg">19</div>
              </div>
            </div>
            
            <div className="bg-gray-800 p-6 rounded-xl">
              <h2 className="text-xl font-semibold mb-4">Today's Schedule</h2>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="bg-indigo-900 bg-opacity-50 p-2 rounded-lg">
                      9:30
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 p-3 rounded-lg border-l-4 border-indigo-500">
                    <div className="font-medium">Team Stand-up</div>
                    <div className="text-sm text-gray-400">Daily progress update with the development team</div>
                    <div className="flex gap-2 mt-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs">A</div>
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs">S</div>
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs">M</div>
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex items-center justify-center text-xs">P</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="bg-indigo-900 bg-opacity-50 p-2 rounded-lg">
                      11:00
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 p-3 rounded-lg border-l-4 border-green-500">
                    <div className="font-medium">Code Review</div>
                    <div className="text-sm text-gray-400">Review pull requests with Alex</div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="bg-indigo-900 bg-opacity-50 p-2 rounded-lg">
                      2:00
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 p-3 rounded-lg border-l-4 border-yellow-500">
                    <div className="font-medium">Project Review</div>
                    <div className="text-sm text-gray-400">Quarterly project evaluation with leadership</div>
                    <div className="mt-2 text-sm">
                      <div className="inline-block bg-gray-800 px-2 py-1 rounded">Q2 Report</div>
                      <div className="inline-block bg-gray-800 px-2 py-1 rounded ml-2">Presentation</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex gap-4">
                  <div className="text-center">
                    <div className="bg-indigo-900 bg-opacity-50 p-2 rounded-lg">
                      4:30
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-700 p-3 rounded-lg border-l-4 border-blue-500">
                    <div className="font-medium">Marketing Discussion</div>
                    <div className="text-sm text-gray-400">Evaluate new marketing proposals</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        
        {/* Tasks Tab */}
        {activeTab === 'tasks' && (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-gray-800 p-6 rounded-xl">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">All Tasks</h2>
                <div className="flex gap-2">
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1">
                    <span>+</span>
                    <span>New Task</span>
                  </button>
                  <button className="bg-gray-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-1">
                    <span>Filter</span>
                  </button>
                </div>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full">
                  <thead>
                    <tr>
                      <th className="text-left pb-3 border-b border-gray-700">Task</th>
                      <th className="text-left pb-3 border-b border-gray-700">Tag</th>
                      <th className="text-left pb-3 border-b border-gray-700">Deadline</th>
                      <th className="text-left pb-3 border-b border-gray-700">Priority</th>
                      <th className="text-left pb-3 border-b border-gray-700">Status</th>
                      <th className="text-left pb-3 border-b border-gray-700">Assigned To</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Complete Q2 Report</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-xs">Work</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 12, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-red-900 bg-opacity-30 text-red-400 rounded-full text-xs">High</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 rounded-full text-xs">In Progress</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">You</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Client Meeting Preparation</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-xs">Work</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 10, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-red-900 bg-opacity-30 text-red-400 rounded-full text-xs">High</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 rounded-full text-xs">In Progress</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">You, Sarah</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Review Marketing Proposals</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-xs">Work</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 15, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-gray-700 bg-opacity-30 text-gray-400 rounded-full text-xs">Not Started</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">You, Marketing Team</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Update Team Documentation</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-xs">Work</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 18, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-green-900 bg-opacity-30 text-green-400 rounded-full text-xs">Low</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-gray-700 bg-opacity-30 text-gray-400 rounded-full text-xs">Not Started</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">You</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Website Redesign</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-blue-900 bg-opacity-30 text-blue-400 rounded-full text-xs">Work</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 25, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-green-900 bg-opacity-30 text-green-400 rounded-full text-xs">Completed</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Sarah, Alex</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Gym Session</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-purple-900 bg-opacity-30 text-purple-400 rounded-full text-xs">Health</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 9, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 rounded-full text-xs">Medium</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-gray-700 bg-opacity-30 text-gray-400 rounded-full text-xs">Not Started</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">You</td>
                    </tr>
                    <tr>
                      <td className="py-3 border-b border-gray-700">Read Design Book</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-green-900 bg-opacity-30 text-green-400 rounded-full text-xs">Personal</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">Apr 20, 2025</td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-green-900 bg-opacity-30 text-green-400 rounded-full text-xs">Low</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">
                        <span className="px-2 py-1 bg-yellow-900 bg-opacity-30 text-yellow-400 rounded-full text-xs">In Progress</span>
                      </td>
                      <td className="py-3 border-b border-gray-700">You</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePage;