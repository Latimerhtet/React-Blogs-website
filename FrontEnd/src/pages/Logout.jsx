import React from "react";
import { redirect } from "react-router-dom";

const Logout = () => {
  return <div></div>;
};

export default Logout;

export const loader = () => {
  const confirmStatus = window.confirm("Are you sure to log out?");
  if (confirmStatus) {
    localStorage.removeItem("token");
  }
  return redirect("/");
};
