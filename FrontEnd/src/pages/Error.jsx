import React from "react";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  let error = useRouteError();
  let errText = "Unknown Error";
  if (error.status == 500) {
    errText = "The page you are trying to access is not found";
  } else if (error.status == 400) {
    errText = "Action is not successful!!";
  } else if (error.status == 101) {
    errText = "invalid error";
  }
  return (
    <div className="error">
      <div>
        <h2>{errText}</h2>
        <Link to={"/"}>
          <button>Go to Blogs</button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
