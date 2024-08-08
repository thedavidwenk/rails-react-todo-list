import React from 'react';
// import PropTypes from 'prop-types';
import './Navbar.css';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">Todo List</Link>
      {" | "}
      <Link to="/new">New Todo</Link>
    </nav>
  )
};

export default Navbar;
