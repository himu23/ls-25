import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className="bg-light p-3" style={{ width: '200px', minHeight: '100vh' }}>
      <h5>Menu</h5>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link to="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
          <Link to="/upload" className="nav-link">Upload</Link>
        </li>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-link">Dashboard</Link>
        </li>
        <li className="nav-item">
          <Link to="/watchlater" className="nav-link">Watch Later</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
