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
    <nav
      style={{
        width: "100%",
        display: "flex",
        borderBottom: "1px solid black",
      }}
    >
      <div
        onClick={toggleNavbar}
        style={{
          fontSize: "2.2rem",
          width: "5%",
          textAlign: "center",
          alignItems: "center",
          backgroundColor: "var(--primary-dark-color)",
        }}
      >
        {isOpen ? <AiOutlineClose /> : <FaBars />}
      </div>
      {isOpen && (
        <ul
          style={{
            width: "95%",
            display: "flex",
            justifyContent: "space-around",
            margin: "auto",
            listStyleType: "none",
            height: "auto",
            fontSize: "x-large",
          }}
        >
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <LogOutButton />
          </li>
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
