import React from 'react';
import './App.css';           // ✅ Correct path
import './styles/global.css'; // ✅ Keep this if global.css is in styles/
import Header from './components/Header.js';
import Sidebar from './components/Sidebar.js';
import DashboardMainContent from './components/DashboardMainContent.js';

function App() {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main-section">
        <Header />
        <DashboardMainContent />
      </div>
    </div>
  );
}

export default App;
