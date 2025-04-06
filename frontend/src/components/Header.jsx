import React, { useState } from 'react';

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="app-title">Dashboard</div>
      <div className="profile-section" onClick={() => setOpen(!open)}>
        <img
          className="avatar"
          src="https://i.pravatar.cc/300"
          alt="user"
        />
        <span className="username">John Doe</span>
        {open && (
          <div className="dropdown">
            <p>Profile</p>
            <p>Settings</p>
            <p>Logout</p>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
