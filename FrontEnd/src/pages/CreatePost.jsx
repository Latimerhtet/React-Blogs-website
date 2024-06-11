import React from "react";
import PostFrom from "../components/PostFrom";
const CreatePost = () => {
  return (
    <div className="blogs">
      <PostFrom
        heading={"Create your post now!"}
        actionBtnText={"Post on NewsFeed"}
        method={"POST"}
      />
    </div>
  );
};

export default CreatePost;
