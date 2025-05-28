import React from 'react';
import './Sidebar.js';
import { FaHome, FaHistory, FaCalendarAlt, FaStethoscope, FaChartBar, FaFlask, FaComments, FaCog, FaHeadset } from 'react-icons/fa';

function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>General</h3>
      <nav>
        <ul>
          <li><FaHome /> Dashboard</li>
          <li><FaHistory /> History</li>
          <li><FaCalendarAlt /> Calendar</li>
          <li><FaStethoscope /> Appointments</li>
          <li><FaChartBar /> Statistics</li>
          <li><FaFlask /> Tests</li>
          <li><FaComments /> Chat</li>
          <li><FaHeadset /> Support</li>
          <li><FaCog /> Settings</li>
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;