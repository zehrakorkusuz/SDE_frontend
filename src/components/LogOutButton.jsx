import React from "react";
import { cleanUser } from "../functions/localstorage";

export default function LogOutButton() {
  return <button onClick={() => cleanUser()}>Log out</button>;
}
