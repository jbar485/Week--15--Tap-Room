import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
  return (
    <div>
      <Link to="/">Home</Link> | <Link to="/kegs">Kegs</Link> | <Link to="/newkeg">New Keg</Link> 
      <h1>TroyBoy Brewing</h1>
    </div>
  );
}

export default Header;