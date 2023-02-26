import React from "react";
import { Link } from "react-router-dom";

export default function Error({ message }) {
  if (message === "No Token given") {
    return (
      <div>
        Error: you must log in
        <br />
        <Link to="/login">Go to login</Link>
      </div>
    );
  }

  return <div>Error: {message}</div>;
}
