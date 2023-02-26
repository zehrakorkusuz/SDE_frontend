import React from "react";
import { Link } from "react-router-dom";

export default function Error({ message }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    display: "flex",
    flexDirection: "column",
    fontSize: "xx-large",
    gap: "0.5em",
    padding: "2%",
    border: "1px solid black",
    borderRadius: "5%",
  };

  if (message === "No Token given") {
    return (
      <div style={style}>
        Error: you must log in
        <br />
        <Link to="/login">Go to login</Link>
      </div>
    );
  }

  return <div style={style}>Error: {message}</div>;
}
