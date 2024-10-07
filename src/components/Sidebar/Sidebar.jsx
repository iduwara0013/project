import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import dashboardIcon from '../../assets/icons/dashboard-icon.svg';  // Replace with actual icons
import doctorsIcon from '../../assets/icons/doctors-icon.svg';
import patientsIcon from '../../assets/icons/patients-icon.svg';

const Sidebar = ({ isOpen }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
      <ul>
        <li>
          <Link to="/">
            <img src={dashboardIcon} alt="Dashboard" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link to="/doctors">
            <img src={doctorsIcon} alt="Doctors" />
            <span>Doctors</span>
          </Link>
        </li>
        <li>
          <Link to="/patients">
            <img src={patientsIcon} alt="Patients" />
            <span>Patients</span>
          </Link>
        </li>
        {/* Add more links as needed */}
      </ul>
    </div>
  );
};

export default Sidebar;
