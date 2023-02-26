import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../functions/localstorage";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    Swal.fire({
      title: "Loading",
      html: "Wait just a little bit...",
      showConfirmButton: false,
      allowOutsideClick: false,
    });

    const email = e.target.email.value;
    const password = e.target.password.value;

    const response = await fetch(
      "https://facade-service-7x5inv6roa-lz.a.run.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      }
    );
    const data = await response.json();

    Swal.close();

    if (response.status === 200) {
      storeUser(data);
      Swal.fire({
        title: "Successful login",
        text: `Hello, ${data.email}`,
        icon: "success",
        allowOutsideClick: false,
      }).then(() => navigate("/dashboard"));
    } else {
      Swal.fire({
        title: "Authentication failed",
        text: `${data.error}`,
        icon: "error",
        allowOutsideClick: false,
      });
    }
  };

  const inputStyle = { fontSize: "inherit" };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
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
      }}
    >
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="email" required style={inputStyle} />

      <label htmlFor="password">Password:</label>
      <input
        type="password"
        name="password"
        id="password"
        required
        style={inputStyle}
      />

      <button type="submit" style={inputStyle}>
        Login
      </button>
    </form>
  );
}

export default LoginForm;
