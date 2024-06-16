import React from "react";
import {
  Link,
  json,
  redirect,
  useLoaderData,
  useNavigate,
  useRouteLoaderData,
  useSubmit,
} from "react-router-dom";
import {
  CalendarDaysIcon,
  ArrowLeftIcon,
  PencilSquareIcon,
  TrashIcon,
} from "@heroicons/react/24/solid";
import { getToken } from "../util/Auth";
const PostDetail = () => {
  const hasToken = useRouteLoaderData("main");
  const post = useRouteLoaderData("postDetail");
  const submit = useSubmit();
  const navigate = useNavigate();
  const { id, title, date, image, description } = post;
  const editPostHandler = () => {
    navigate(`edit`);
  };
  const deletePostHandler = () => {
    const confirmStatus = window.confirm("Are you sure to delete this post?");
    if (confirmStatus) {
      submit(null, { method: "DELETE" });
    }
    return;
  };
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
          <div className="actions-Div">
            <Link to={"/"}>
              <ArrowLeftIcon className="arrow-left-icon" />
            </Link>
            {hasToken && (
              <>
                <PencilSquareIcon
                  className="editIcon"
                  onClick={editPostHandler}
                />
                <TrashIcon onClick={deletePostHandler} className="deleteIcon" />
              </>
            )}
          </div>
        </div>
        <img src={image} alt={title} />
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PostDetail;

export const loader = async ({ request, params }) => {
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

export const action = async ({ request, params }) => {
  const token = getToken();
  const response = await fetch(`http://localhost:8080/posts/${params.id}`, {
    method: request.method,
    headers: { Authorization: "Bearer " + token },
  });
  if (!response.ok) {
    throw json({ message: "Delete action is not successful" }, { status: 400 });
  } else {
    return redirect("/");
  }
};
