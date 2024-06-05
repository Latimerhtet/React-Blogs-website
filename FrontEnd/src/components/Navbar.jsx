import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to={"/"}>
        <p>BLOG.me</p>
      </Link>
      <div>
        <NavLink to={"/"}>Blogs</NavLink>
        <NavLink to={"/createPost"}>Create Blog</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
