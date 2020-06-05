import React from 'react';
import { Link } from 'react-router-dom';
import '../../../../css/mainPage/Menu.css';

function Menu(props) {
  return (
    <div className="menu">
      <Link to="/">
        <div className="menu-items">Introduction</div>
      </Link>
      <Link to="/goals">
        <div className="menu-items">Goals</div>
      </Link>
      <Link to="/projects">
        <div className="menu-items">Projects</div>
      </Link>
      <Link to="/contacts">
        <div className="menu-items">Contacts</div>
      </Link>
    </div>
  );
}

export default Menu;
