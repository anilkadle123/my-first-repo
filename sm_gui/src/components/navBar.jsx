import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NavBar = (props) => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light rounded">
      <Link className="navbar-brand" to="/">
        SMG
      </Link>

      <button
        className="custom-toggler navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarsExample09"
        aria-controls="navbarsExample09"
        aria-expanded={!isNavCollapsed ? true : false}
        aria-label="Toggle navigation"
        onClick={handleNavCollapse}
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div
        className={`${isNavCollapsed ? "collapse" : ""} navbar-collapse`}
        id="navbarsExample09"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink className="nav-link" to="/purchaseEntry">
              PurchaseEntry
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/sales">
              Sales
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/gstReport">
              GST Report
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
