import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

class Navigation extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
          <div className="navbar-brand brand-font"><b>i<i>Asset</i></b></div>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/dashboard">DASHBOARD</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeelist">EMPLOYEE LIST</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/assetlist">ASSET LIST</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/employeeasset">EMPLOYEE ASSET</NavLink>
              </li>
              {/* <li className="nav-item">
                <NavLink className="nav-link" to="/createemployee">CREATE EMPLOYEE</NavLink>
              </li> */}
              <li className="nav-item">
              <NavLink className="nav-link active white-font logout" to="/logout"><i className="fa fa-sign-out white-font" aria-hidden="true" />&nbsp;LOGOUT</NavLink>
            </li>
            </ul>
            
          </div>
        </nav>
      </div>
    );
  }
}

export default Navigation;
