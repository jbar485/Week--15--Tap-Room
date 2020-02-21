import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

function Header(){
  return (
    <div>
    <div className='links'>
    <Link to="/kegs">Kegs</Link> | <Link to="/newkeg">New Keg</Link>
    </div>
    <div className='topBackground'>
    <Link to="/"><img className='logo' src="https://heathenbrewing.com/wp-content/uploads/2017/10/heathen-tiki.png" alt="logo"/></Link>
    <h1>TROY3OY BREWING - TROY3OY PUBLIC HOUSE</h1>
    </div>
    </div>
  );
}

export default Header;