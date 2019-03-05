import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
             <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <NavLink className="nav-link" to="/dashboard">Dashboard</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/employeelist">Employee List</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/assetlist">Asset List</NavLink>
              </li>
              <li className="nav-item active">
                <NavLink className="nav-link" to="/createemployee">Create Employee</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
