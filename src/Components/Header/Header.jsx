import React from 'react';
import './Header.css';
import profile from '../../image/pf.png';
import logo from '../../image/dflogo.png';
import SearchBar from './Searchbar';

function Header() {
  return (
    <div className='header'>
      <div className="df-logo">
        <img src={logo} alt="Df-logo" />
        <h2>DISCUSSION FORUM</h2>
      </div>

      <ul className='header-list'>
        <li>HOME</li>
        <li>ACADEMICS</li>
        <li>LIFE STYLE</li>
        <li>CAREER</li>
        <li>KIET LOCALITY</li>
        <li>ABOUT</li>
      </ul>
      <div className="profile-icon">
        <img src={profile} alt="Profile" />
      </div>
      <SearchBar />
    </div>
  );
}

export default Header;
