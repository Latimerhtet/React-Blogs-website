import React from "react";
import { Link } from "react-router-dom";

const Interior = () => {
  return (
    <div className="blogs">
      <h2>Are you new in our blog website?</h2>
      <Link to={"/auth?mode=login"}>
        <button className="formalBtn">Login First</button>
      </Link>
    </div>
  );
};

export default Interior;
