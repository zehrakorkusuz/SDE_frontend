import React from "react";

export default function ContentTextParagraphs({ content_text, onClick }) {
  return (
    <div>
      {content_text
        .trim()
        .split("\n")
        .map((line, index) => (
          <p key={index}>{line}</p>
        ))}
      <button onClick={onClick}>Modify Text</button>
    </div>
  );
}
