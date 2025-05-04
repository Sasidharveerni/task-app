import { useState } from 'react';
import TaskImg from '../assets/task-img.png'
import { ArrowRight, CheckCircle, BookOpen, Building, Clock, PieChart, Users, PhoneCall, Menu, X } from 'lucide-react';

export default function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const features = [
    {
      icon: <CheckCircle className="text-emerald-500 w-6 h-6" />,
      title: "Task Management",
      description: "Assign, track, and complete tasks in a visual Kanban board."
    },
    {
      icon: <BookOpen className="text-blue-500 w-6 h-6" />,
      title: "Syllabus Tracking",
      description: "Monitor curriculum progress and completion across departments."
    },
    {
      icon: <Building className="text-indigo-500 w-6 h-6" />,
      title: "Role-Based Dashboards",
      description: "Customized views for admins, HODs, faculty, and students."
    },
    {
      icon: <Clock className="text-orange-500 w-6 h-6" />,
      title: "Smart Deadlines",
      description: "ML-powered task prioritization and automated reminders."
    },
    {
      icon: <PieChart className="text-rose-500 w-6 h-6" />,
      title: "Progress Analytics",
      description: "Visual insights on productivity and project status."
    },
    {
      icon: <Users className="text-purple-500 w-6 h-6" />,
      title: "Team Collaboration",
      description: "Seamless communication within projects and departments."
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-50 to-slate-100 min-h-screen">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Taskify</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-700 hover:text-blue-600 transition-colors">Features</a>
              <a href="#for-who" className="text-gray-700 hover:text-blue-600 transition-colors">For Who</a>
              <a href="#pricing" className="text-gray-700 hover:text-blue-600 transition-colors">Pricing</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md shadow-sm transition-colors">
                Get Started
              </button>
            </div>
            <div className="md:hidden flex items-center">
              <button onClick={toggleMenu} className="text-gray-700">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-inner">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md">Features</a>
              <a href="#for-who" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md">For Who</a>
              <a href="#pricing" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md">Pricing</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:bg-gray-50 hover:text-blue-600 rounded-md">Contact</a>
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md shadow-sm mt-3 transition-colors">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
                Task Management Simplified for <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">India's Educational Institutions</span>
              </h1>
              <p className="mt-6 text-lg text-gray-600">
                Taskify helps schools, colleges, and startups manage projects, track syllabus coverage, and meet deadlines—without the complexity or high costs of enterprise tools.
              </p>
              <div className="mt-8 flex sm:flex-row justify-between">
                <button className="px-2 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md flex items-center justify-center transition-colors w-50">
                  Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="px-6 py-3 border border-gray-300 text-gray-700 hover:bg-gray-50 rounded-lg shadow-sm flex items-center justify-center transition-colors w-50">
                  Schedule Demo
                </button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl shadow-xl overflow-hidden">
                <img 
                  src={TaskImg} 
                  alt="Taskify dashboard preview" 
                  className="w-full h-auto object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center space-x-2">
                  <span className="flex h-3 w-3 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                  </span>
                  <span className="text-sm font-medium text-gray-700">500+ institutions trust us</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trusted By */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-500 font-medium mb-8">TRUSTED BY LEADING INSTITUTIONS ACROSS INDIA</p>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-70">
            <div className="h-12 flex items-center justify-center">
              <div className="bg-gray-300 w-full h-8 rounded"></div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="bg-gray-300 w-full h-8 rounded"></div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="bg-gray-300 w-full h-8 rounded"></div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="bg-gray-300 w-full h-8 rounded"></div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="bg-gray-300 w-full h-8 rounded"></div>
            </div>
            <div className="h-12 flex items-center justify-center">
              <div className="bg-gray-300 w-full h-8 rounded"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Everything You Need, Nothing You Don't</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Purpose-built for educational institutions and startups with features that actually matter.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* For Who Section */}
      <div id="for-who" className="py-16 bg-gradient-to-br from-indigo-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Designed for India's Unique Challenges</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Taskify adapts to your institution's specific needs and workflows.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-blue-100 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-blue-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Educational Institutions</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Track syllabus completion</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Monitor faculty productivity</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Manage departmental projects</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-indigo-100 flex items-center justify-center">
                <Building className="w-16 h-16 text-indigo-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">Startups & Businesses</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Agile sprint management</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Resource allocation</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Milestone tracking</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="h-48 bg-purple-100 flex items-center justify-center">
                <Users className="w-16 h-16 text-purple-500" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900">All Team Types</h3>
                <ul className="mt-4 space-y-3">
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Role-based access control</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Mobile-friendly interface</span>
                  </li>
                  <li className="flex">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                    <span className="text-gray-600">Offline capability</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing */}
      <div id="pricing" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Affordable Plans for Every Institution</h2>
            <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
              Pay only for what you need, with plans designed for Indian institutions.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-3">
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900">Basic</h3>
              <p className="mt-4 text-gray-600">Perfect for small teams and startups</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900">₹999</span>
                <span className="ml-1 text-xl text-gray-500">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Up to 25 users</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Kanban boards</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Task assignments</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Basic reporting</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-xl shadow-lg p-8 transform md:scale-105 relative">
              <div className="absolute top-0 right-0 bg-yellow-400 text-xs font-bold uppercase tracking-wider text-gray-900 rounded-bl-lg rounded-tr-lg py-1 px-3">
                Most Popular
              </div>
              <h3 className="text-2xl font-bold text-white">Pro</h3>
              <p className="mt-4 text-blue-100">For growing institutions</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-white">₹1,999</span>
                <span className="ml-1 text-xl text-blue-200">/month</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white">Up to 100 users</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white">Advanced workflows</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white">ML task prioritization</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white">Comprehensive analytics</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-400 mr-2 flex-shrink-0" />
                  <span className="text-white">Priority support</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-white hover:bg-gray-100 text-blue-600 font-semibold py-3 px-4 rounded-lg transition-colors">
                Get Started
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8 hover:shadow-md transition-shadow">
              <h3 className="text-2xl font-bold text-gray-900">Enterprise</h3>
              <p className="mt-4 text-gray-600">For large institutions</p>
              <div className="mt-4 flex items-baseline">
                <span className="text-5xl font-extrabold text-gray-900">Custom</span>
              </div>
              <ul className="mt-8 space-y-4">
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Unlimited users</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom integrations</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Dedicated support</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">On-premise option</span>
                </li>
                <li className="flex">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                  <span className="text-gray-600">Custom training</span>
                </li>
              </ul>
              <button className="mt-8 w-full bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-3 px-4 rounded-lg transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white">Ready to transform your institution?</h2>
            <p className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto">
              Join 500+ institutions across India already using Taskify to improve productivity and outcomes.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center sm:space-x-4 space-y-4 sm:space-y-0">
              <button className="px-8 py-4 bg-white text-blue-600 rounded-lg shadow-md font-semibold hover:bg-gray-100 transition-colors">
                Start Free Trial
              </button>
              <button className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>


            {/* Contact */}
      <div id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Get in touch</h2>
              <p className="mt-4 text-lg text-gray-600">
                Have questions about Taskify? Our team is here to help you find the perfect solution for your institution.
              </p>
              <div className="mt-8 space-y-6">
                <div className="flex items-center">
                  <PhoneCall className="h-6 w-6 text-blue-600 mr-3" />
                  <span className="text-gray-700">+91 98765 43210</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="text-gray-700">support@taskify.in</span>
                </div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span className="text-gray-700">Koramangala, Bangalore, India</span>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
                <div className="grid grid-cols-1 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input type="email" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Institution Type</label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500">
                      <option>School</option>
                      <option>College</option>
                      <option>University</option>
                      <option>Startup</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                    <textarea rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"></textarea>
                  </div>
                  <div>
                  <button
                      type="submit"
                      className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md shadow-sm transition duration-300 ease-in-out"
                    >
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      
</div>
)
}