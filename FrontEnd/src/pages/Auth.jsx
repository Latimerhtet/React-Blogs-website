import React from "react";
import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const Auth = () => {
  return (
    <div className="blogs">
      <AuthForm />
    </div>
  );
};

export default Auth;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Invalid route" }, { status: 101 });
  }
  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };
  const response = await fetch(`${import.meta.env.VITE_DOMAIN}/${mode}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(authData),
  });
  if (response.status === 422 || response.status === 401) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "User authentication failed!" });
  }
  const resData = await response.json();
  const token = resData.token;

  localStorage.setItem("token", token);
  const expiredTime = new Date();
  expiredTime.setHours(expiredTime.getHours() + 1);
  localStorage.setItem("exp", expiredTime);
  return redirect("/");
};
