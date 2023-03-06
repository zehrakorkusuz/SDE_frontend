import React from "react";
import { Link } from "react-router-dom";
import LogOutButton from "./LogOutButton";

function Navbar() {
  return (
    <nav
      style={{
        width: "100%",
        display: "flex",
        borderBottom: "1px solid black",
      }}
    >
      <ul
        style={{
          width: "95%",
          display: "flex",
          justifyContent: "space-around",
          margin: "auto",
          listStyleType: "none",
          height: "auto",
          fontSize: "x-large",
          padding: "0.5%"
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <LogOutButton />
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
