import React from "react";
import PostFrom from "../components/PostFrom";
import { redirect } from "react-router-dom";
const CreatePost = () => {
  return (
    <div className="blogs">
      <PostFrom />
    </div>
  );
};

export default CreatePost;
export const action = async ({ request, params }) => {
  const post = await request.formData();
  const postData = {
    id: crypto.randomUUID(),
    title: post.get("title"),
    date: post.get("date"),
    image: post.get("image"),
    description: post.get("description"),
  };

  console.log(postData);
  // const response = await fetch("http://localhost:8080/posts", {
  //   method: "POST",
  //   headers: { "Content-Type": "application/json" },
  //   body: JSON.stringify(postData),
  // });

  // if (!response.ok) {
  //   throw json({ message: "Action is not successful" }, { status: 400 });
  // } else {
  //   return redirect("/");
  // }
};
