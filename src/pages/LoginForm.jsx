import React from "react";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { storeUser } from "../functions/localstorage";

function LoginForm() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
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

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Email:
        <input type="email" name="email" required />
      </label>
      <label>
        Password:
        <input type="password" name="password" required />
      </label>
      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;
