import React, { useEffect } from "react";
import {
  NavLink,
  Outlet,
  redirect,
  useLoaderData,
  useNavigation,
} from "react-router-dom";
import Navbar from "../components/Navbar";
import { getExpiredDuration } from "../util/Auth";
import LoadingSpinner from "../components/LoadingSpinner";

const Main = () => {
  const token = useLoaderData();
  const { state } = useNavigation();
  useEffect(() => {
    if (!token) {
      return;
    }
    if (token === "Token Expired") {
      localStorage.removeItem("token");
      localStorage.removeItem("exp");
      return redirect("/auth?mode=login");
    }
    const duraion = getExpiredDuration();
    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("exp");
      redirect("/auth?mode=login");
    }, [duraion]);
  }, [token]);
  return (
    <div>
      <Navbar />
      {state === "loading" ? <LoadingSpinner /> : <Outlet />}
    </div>
  );
};

export default Main;
