import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";


const Navbar = () => {
  const datee = new Date().toLocaleDateString();
  const timee = new Date().toLocaleTimeString();
  const [time, settime] = useState();

  setInterval(() => {
    settime(timee);
  }, 2000);

  return (
    <>
      <div className="datetime">
        <h4>{datee}</h4>
        <h4>{time}</h4>
      </div>
      <div className="navbar">
        <h1 className="logo">Madx Gaming</h1>
        <div className="menu">

          <NavLink exact activeClassName="active_class" to="/">Home</NavLink>
          <NavLink exact activeClassName="active_class" to="/netflix">Netflix Movies</NavLink>
          <NavLink exact activeClassName="active_class" to="/amazon">Amazon Movies</NavLink>
          
        </div>
      </div>
    </>
  );
};

export default Navbar;
