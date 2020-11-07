import React from 'react';
import { Link } from 'react-router-dom';
import home from '../home.png';

const Header = () => {
  return (
    <nav className="header">
        <Link to="/" style={{ textDecoration: 'none' }}>
            <img src={home}></img>
        </Link>
    </nav>
  )
}

export default Header;