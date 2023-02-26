import React from "react";
import { getToken } from "../functions/localstorage";

export default function NewContentForm() {
  return (
    <form
      onSubmit={(e) => {
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
          .then((data) => {})
          .catch((e) => console.error(e));

        e.target.prompt.value = "";
      }}
    >
      <label>
        Create a new blog post
        <input name="prompt" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
