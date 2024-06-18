import { json, useLoaderData } from "react-router-dom";
import Post from "../components/Post";

const Posts = () => {
  const posts = useLoaderData();

  return (
    <>
      <div className="blogs">
        {posts.map((post) => {
          return <Post key={post.id} post={post} />;
        })}
      </div>
    </>
  );
};

export default Posts;

export const loader = async () => {
  const url = import.meta.env.VITE_DOMAIN;
  const response = await fetch(`${url}/posts`);
  if (!response.ok) {
    throw json(
      { message: "The page that you are trying to access is not found!" },
      { status: 500 }
    );
  } else {
    const data = await response.json();
    return data.posts;
  }
};
