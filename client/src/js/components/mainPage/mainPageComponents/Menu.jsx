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
      <Link to="/techSkills">
        <div className="menu-items">Technical Skills</div>
      </Link>
      <Link to="/about">
        <div className="menu-items">About</div>
      </Link>
      <Link to="/contacts">
        <div className="menu-items">Contacts</div>
      </Link>
        {/* <div className="menu-items">Introduction</div>
        <div className="menu-items">Goals</div>
        <div className="menu-items">Projects</div>
        <div className="menu-items">Tech</div>
        <div className="menu-items">About</div>
        <div className="menu-items">Contacts</div> */}
    </div>
  );
}

export default Menu;
