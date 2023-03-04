import React from 'react';
import "./Navbar.css";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
    <div className="navbar">
   <ul>
    <li><NavLink to="/" className="menu">Home</NavLink></li>
    <li><NavLink to="/about" className="menu">About</NavLink></li>
    <li><NavLink to="/parent" className="menu">Parent</NavLink></li>

 

   </ul>
    </div>
    </>
  )
}

export default Navbar