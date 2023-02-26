import React from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { cleanUser } from "../functions/localstorage";

export default function LogOutButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => {
        cleanUser();
        Swal.fire({
          title: "Successful log out",
          text: `See you soon`,
          icon: "success",
          allowOutsideClick: false,
        }).then(() => navigate("/login"));
      }}
    >
      Log out
    </button>
  );
}
