import React from "react";

export default function Loading() {
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

  return <div style={style}>Loading...</div>;
}
