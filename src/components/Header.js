import React from 'react';
import './Header.js';
import { FaBell, FaPlus } from 'react-icons/fa';

function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <h2>Healthcare.</h2>
        <input type="text" placeholder="Search..." />
      </div>
      <div className="header-right">
        <FaBell className="icon" />
        <button className="add-btn"><FaPlus /></button>
        <div className="user-profile">
          <img src="https://via.placeholder.com/32" alt="User Avatar" />
          <span>Nandani</span>
        </div>
      </div>
    </header>
  );
}

export default Header;