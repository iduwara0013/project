import React from 'react';
import './TopBar.css';
import logo from '../../assets/images/logo.png';  // Import your logo

const TopBar = ({ toggleSidebar }) => {
  return (
    <div className="top-bar">
      <div className="logo-container">
        <img src={logo} alt="MediConnect Logo" />
        <span>MediConnect</span>
      </div>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        <img src="your-icons.svg" alt="Toggle Sidebar" />
      </button>
      <div className="user-profile">
        <span>Mr. Admin</span>
        {/* Add user profile dropdown or other elements as needed */}
      </div>
    </div>
  );
};

export default TopBar;
