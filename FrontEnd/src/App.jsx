import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import { loader as postsLoader } from "./pages/Posts";
import { loader as postDetailLoader } from "./pages/PostDetail";
import { action as creatingPostAction } from "./pages/CreatePost";
import PostDetail from "./pages/PostDetail";
import Error from "./pages/Error";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Posts />, loader: postsLoader },
        {
          path: "/createpost",
          element: <CreatePost />,
          action: creatingPostAction,
        },
        {
          path: "/postDetail/:id",
          element: <PostDetail />,
          loader: postDetailLoader,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
