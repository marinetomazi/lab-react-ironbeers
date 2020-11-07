import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header'

const Homepage = () => {
  return (
    <nav className="homepage">
      <ul>
        <li><Link to="/beers" style={{ textDecoration: 'none' }}>All Beers</Link></li>
        <li><Link to="/random-beer" style={{ textDecoration: 'none' }}>Random Beer</Link></li>
        <li><Link to="/new-beer" style={{ textDecoration: 'none' }}>New Beer</Link></li>
      </ul>
    </nav>
  )
}

export default Homepage;