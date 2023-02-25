import React from 'react';
import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');
  const [userProfilePicture, setUserProfilePicture] = useState('');

  // Toggle the navbar when the menu icon is clicked
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  }

  // Logout the user
  const logoutUser = () => {
    setLoggedIn(false);
    setUserName('');
    setUserProfilePicture('');
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">My Website</Link>
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <AiOutlineClose /> : <FaBars />}
        </div>
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">About</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link">Contact</Link>
          </li>
          {loggedIn ?
            <>
              <li className="nav-item">
                <div className="user-profile">
                  <img src={userProfilePicture} alt="User Profile" className="user-profile-picture" />
                  <span className="user-profile-name">{userName}</span>
                </div>
              </li>
              <li className="nav-item">
                <button className="logout-button" onClick={logoutUser}>Logout</button>
              </li>
            </>
            :
            <li className="nav-item">
              <Link to="/login" className="nav-link">Login</Link>
            </li>
          }
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
