import React from "react";
import { Link } from "react-router-dom";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";
const Post = ({ post }) => {
  const { id, title, date, image } = post;
  return (
    <>
      <Link to={`/postDetail/${id}`}>
        <div className="post" key={id}>
          <img src={image} alt={title} />
          <h2>{title}</h2>
          <p className="postDate">
            <CalendarDaysIcon className="calendarIcon" /> <span>{date}</span>
          </p>
        </div>
      </Link>
    </>
  );
};

export default Post;
