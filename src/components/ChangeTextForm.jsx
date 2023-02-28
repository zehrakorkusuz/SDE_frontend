import React from "react";
import Swal from "sweetalert2";
import { useQueryClient } from "@tanstack/react-query";
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";
import { getToken } from "../functions/localstorage";

const backend_url = process.env.REACT_APP_BACKEND_URL;

export default function ChangeTextForm({ id, content_text, closeModify }) {
  const queryClient = useQueryClient();

  function handleSubmit(e) {
    e.preventDefault();
    const content_text = e.target.textarea.value;

    fetch(`${backend_url}/content/${id}`, {
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

  const buttonStyle = {
    fontSize: "inherit",
    padding: "1%",
    borderRadius: "5%",
    width: "20%",
  };

  return (
    <form onSubmit={handleSubmit} style={{ fontSize: "x-large" }}>
      <label htmlFor="textarea">Modify the text</label>
      <br />
      <GrammarlyEditorPlugin clientId="client_QzTJJhevmqQn3uy9Kj38eE">
        <textarea
          id="textarea"
          defaultValue={content_text.trim()}
          autoFocus
          rows={25}
          style={{ width: "100%", height: "100%", fontSize: "inherit" }}
        />
      </GrammarlyEditorPlugin>
      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button type="submit" style={buttonStyle}>
          Save changes
        </button>

        <button onClick={() => closeModify()} style={buttonStyle}>
          Cancel
        </button>
      </div>
    </form>
  );
}
