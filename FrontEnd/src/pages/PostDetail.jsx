import React from "react";
import { Link, json, useLoaderData } from "react-router-dom";
import { CalendarDaysIcon, ArrowLeftIcon } from "@heroicons/react/24/solid";
const PostDetail = () => {
  const post = useLoaderData();
  const { id, title, date, image, description } = post;
  return (
    <div className="blog-div">
      <div className="blog" key={id}>
        <div className="blog-heading">
          <div>
            <h2>{title}</h2>
            <p className="postDate">
              <CalendarDaysIcon className="calendarIcon" /> <span>{date}</span>
            </p>
          </div>
          <Link to={"/"}>
            <ArrowLeftIcon className="arrow-left-icon" />
          </Link>
        </div>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostDetail;

export const loader = async ({ method, params }) => {
  const response = await fetch(`http://localhost:8080/posts/${params.id}`);
  if (!response.ok) {
    throw json(
      { message: "The blog you are trying to access is unavailable!" },
      { status: 500 }
    );
  } else {
    const blog = await response.json();
    return blog.post;
  }
};
