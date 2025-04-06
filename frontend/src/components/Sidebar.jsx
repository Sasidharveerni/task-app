import React from 'react';
import { FaTasks, FaGraduationCap, FaUsers, FaBullseye, FaClock, FaCog, FaSignOutAlt } from 'react-icons/fa';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Taskify</h2>

      <nav className="nav-section">
        <p className="section-title">Main</p>
        <ul>
          <li><FaTasks /> Dashboard</li>
          <li><FaGraduationCap /> Priorities</li>
          <li><FaUsers /> Teams</li>
          <li><FaBullseye /> Objectives</li>
          <li><FaClock /> Schedules</li>
        </ul>
      </nav>

      <nav className="nav-section">
        <p className="section-title">Projects</p>
        <ul>
          <li>💡 Ideas</li>
          <li>🎨 Design</li>
          <li>🔐 Security</li>
          <li>📂 Tasks Management</li>
        </ul>
      </nav>

      <div className="sidebar-footer">
        <div className="profile">
          <img src="https://i.pravatar.cc/40" alt="user" className="avatar" />
          <div className="user-info">
            <p>John Smith</p>
            <a href="mailto:johnsmith@email.abc">johnsmith@email.abc</a>
          </div>
        </div>
        <div className="bottom-icons">
          <FaCog className="icon" />
          <FaSignOutAlt className="icon" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
