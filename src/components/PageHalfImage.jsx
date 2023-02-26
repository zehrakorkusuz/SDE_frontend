import React from "react";

export default function PageHalfImage({ children, content }) {
  return (
    <div
      style={{
        display: "flex",
        margin: "1.5%",
        justifyContent: "space-around",
      }}
    >
      <div style={{ width: "50%" }}>{children}</div>
      <div
        style={{
          width: "50%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img
          src={content ? content.img_url : ""}
          alt={content ? content.title : "No image to show"}
          style={{
            width: "75%",
            aspectRatio: "1 / 1",
          }}
        ></img>
        <p>{content ? content.title : ""}</p>
      </div>
    </div>
  );
}
