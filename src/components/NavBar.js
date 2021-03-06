import React from "react";
import { NavLink } from "react-router-dom";
import { PageHeader } from 'antd';

const NavBar = () => {
  return (
    <div style={{ width: '30%', display: 'flex', justifyContent: 'space-between' }}>

      <NavLink to="/signup" className="NavBtn">  Signup  </NavLink>
      <NavLink to="/login" className="NavBtn">  Login  </NavLink>
      <NavLink to="/home" className="NavBtn"> Your Profile  </NavLink>
      <NavLink to="/login" className="NavBtn">  Logout  </NavLink>

    </div>
  );
};

export default NavBar;