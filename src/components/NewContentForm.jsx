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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Create a new blog post
        <input name="prompt" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
