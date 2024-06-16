import React from "react";
import { NavLink, Link, useRouteLoaderData } from "react-router-dom";

const Navbar = () => {
  const hasToken = useRouteLoaderData("main");
  return (
    <nav>
      <Link to={"/"}>
        <p>BLOG.me</p>
      </Link>
      <div>
        <NavLink to={"/"}>Blogs</NavLink>
        {hasToken && <NavLink to={"/createPost"}>Create Blog</NavLink>}
        {!hasToken && <NavLink to={"/auth?mode=login"}>Login</NavLink>}
        {hasToken && <NavLink to={"/logout"}>Logout</NavLink>}
      </div>
    </nav>
  );
};

export default Navbar;
