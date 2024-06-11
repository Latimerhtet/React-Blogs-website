import React from "react";
import PostFrom from "../components/PostFrom";
import { useRouteLoaderData } from "react-router-dom";

const Edit = () => {
  const post = useRouteLoaderData("postDetail");
  return (
    <div className="blogs">
      <PostFrom
        heading={"Edit your post now!"}
        actionBtnText={"Update post"}
        editOldPost={post}
        method={"PATCH"}
      />
    </div>
  );
};

export default Edit;
