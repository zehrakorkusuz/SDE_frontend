import React from "react";
import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar when the menu icon is clicked
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="menu-icon" onClick={toggleNavbar}>
          {isOpen ? <AiOutlineClose /> : <FaBars />}
        </div>
        {isOpen && (
          <ul className={isOpen ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/login" className="nav-link">
                Login
              </Link>
            </li>
            <LogOutButton />
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
