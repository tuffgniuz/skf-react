import React from "react";
import { Outlet, Link } from "react-router-dom";

import "./index.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <h1 className="brand">SKF</h1>
          <ul className="navbar-list">
            <li className="navbar-item">
              <Link to="/">Dashboard</Link>
            </li>
            <li className="navbar-item">
              <Link to="/projects">Projects</Link>
            </li>
            {/* <li className="navbar-item"> */}
            {/*   <a href="">Code Examples</a> */}
            {/* </li> */}
            {/* <li className="navbar-item"> */}
            {/*   <a href="">Checklist</a> */}
            {/* </li> */}
            {/* <li className="navbar-item"> */}
            {/*   <a href="">Knowledge Base</a> */}
            {/* </li> */}
            {/* <li className="navbar-item"> */}
            {/*   <a href="">Labs</a> */}
            {/* </li> */}
            <li className="navbar-item">
              <Link to="/training">Training</Link>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Navbar;
