import React from "react";
import {
  Form,
  Link,
  redirect,
  useActionData,
  useNavigation,
} from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/24/solid";
import { getToken } from "../util/Auth";
const PostFrom = ({ heading, actionBtnText, editOldPost, method }) => {
  const errData = useActionData();
  const navigation = useNavigation();
  const isSubmitting = navigation.state == "submitting";

  return (
    <section className="postFrom-main">
      <div className="blog-heading postForm-heading">
        <h3>{heading}</h3>
        <Link to={"/"}>
          <ArrowLeftIcon className="arrow-left-icon" />
        </Link>
      </div>
      <Form method={method.toLowerCase()} className="postForm">
        <div>
          <label htmlFor="post-title">Post Title</label>
          <input
            type="text"
            name="title"
            id="post-title"
            defaultValue={editOldPost ? editOldPost.title : ""}
          />
          {errData && errData.errors && errData.errors.title ? (
            <span>!{errData.errors.title}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="post-date">Post Date</label>
          <input
            type="date"
            name="date"
            id="post-date"
            defaultValue={editOldPost ? editOldPost.date : ""}
          />
          {errData && errData.errors && errData.errors.date ? (
            <span>!{errData.errors.date}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="post-image">Image URL</label>
          <input
            type="text"
            name="image"
            id="post-image"
            defaultValue={editOldPost ? editOldPost.image : ""}
          />
          {errData && errData.errors && errData.errors.image ? (
            <span>!{errData.errors.image}</span>
          ) : null}
        </div>
        <div>
          <label htmlFor="post-description">Description</label>
          <textarea
            name="description"
            id="post-description"
            cols="30"
            rows="10"
            defaultValue={editOldPost ? editOldPost.description : ""}
          ></textarea>
          {errData && errData.errors && errData.errors.description ? (
            <span>!{errData.errors.description}</span>
          ) : null}
        </div>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Submitting" : actionBtnText}
        </button>
      </Form>
    </section>
  );
};

export default PostFrom;

export const action = async ({ request, params }) => {
  const post = await request.formData();
  const token = getToken();
  const desiredMethod = request.method;
  const postData = {
    id: crypto.randomUUID(),
    title: post.get("title"),
    date: post.get("date"),
    image: post.get("image"),
    description: post.get("description"),
  };
  let url = "http://localhost:8080/posts";
  let direction = "/";
  if (desiredMethod === "PATCH") {
    const id = params.id;
    url = `http://localhost:8080/posts/${id}`;
  }

  const response = await fetch(url, {
    method: desiredMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + token,
    },
    body: JSON.stringify(postData),
  });
  if (response.status === 422) {
    return response;
  }
  if (!response.ok) {
    throw json({ message: "Action is not successful" }, { status: 600 });
  } else {
    return redirect(direction);
  }
};
