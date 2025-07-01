import React from 'react';
import { Link } from 'react-router-dom';

function Navbar({ watchLaterCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light px-4">
      <Link to="/" className="navbar-brand">MiniTube</Link>

      <div className="collapse navbar-collapse">
        <input
          className="form-control me-2 w-50"
          type="search"
          placeholder="Search (dummy)"
          aria-label="Search"
        />
        <Link to="/watch-later" className="btn btn-outline-primary ms-2">
          Watch Later {watchLaterCount > 0 && `(${watchLaterCount})`}
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
