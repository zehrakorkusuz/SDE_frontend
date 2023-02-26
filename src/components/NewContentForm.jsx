import React from "react";
import Swal from "sweetalert2";
import { getToken } from "../functions/localstorage";

export default function NewContentForm() {
  function handleSubmit(e) {
    e.preventDefault();
    const prompt = e.target.prompt.value;

    fetch(`https://facade-service-7x5inv6roa-lz.a.run.app/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ prompt }),
    })
      .then((res) => res.json())
      .then((data) =>
        Swal.fire({
          title: "Sent the request",
          text: "The new blog post will appear here soon",
          icon: "success",
          allowOutsideClick: false,
        })
      )
      .then(() => (e.target.prompt.value = ""))
      .catch((e) =>
        Swal.fire({
          title: "Something went wrong",
          text: `Try again late. Error: ${e.message}`,
          icon: "error",
          allowOutsideClick: false,
        })
      );
  }

  const inputStyle = { fontSize: "inherit" };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "40%",
        fontSize: "x-large",
        gap: "0.3em",
      }}
    >
      <label htmlFor="prompt">Create a new blog post</label>
      <input name="prompt" id="prompt" style={inputStyle} />

      <button type="submit" style={inputStyle}>
        Submit
      </button>
    </form>
  );
}
