import React from "react";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import { getToken } from "../functions/localstorage";

export default function ChangeTextForm({ id, content_text, closeModify }) {
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    const content_text = e.target.textarea.value;

    fetch(`https://facade-service-7x5inv6roa-lz.a.run.app/api/content/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${getToken()}`,
      },
      body: JSON.stringify({ content_text }),
    })
      .then((res) => res.json())
      .then((data) =>
        Swal.fire({
          title: "Text modified",
          text: "The modification was successful",
          icon: "success",
          allowOutsideClick: false,
        })
      )
      .then(() =>
        queryClient.invalidateQueries({ queryKey: [`single_id_${id}`] })
      )
      .catch((e) =>
        Swal.fire({
          title: "Something went wrong",
          text: `Try again late. Error: ${e.message}`,
          icon: "error",
          allowOutsideClick: false,
        })
      );

    closeModify();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="textarea">Modify the text</label>
      <br />
      <button type="submit">Save changes</button>
      <br />
      <textarea
        id="textarea"
        defaultValue={content_text.trim()}
        autoFocus
        rows={30}
        style={{ width: "80%", height: "auto" }}
      />
    </form>
  );
}
