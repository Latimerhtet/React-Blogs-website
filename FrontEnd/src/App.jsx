import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Main from "./Layouts/Main";
import CreatePost from "./pages/CreatePost";
import Posts from "./pages/Posts";
import { loader as postsLoader } from "./pages/Posts";
import {
  loader as postDetailLoader,
  action as deleteAction,
} from "./pages/PostDetail";
import { action as creatingPostAction } from "./components/PostFrom";
import { action as editingPostAction } from "./components/PostFrom";
import PostDetail from "./pages/PostDetail";
import Error from "./pages/Error";
import Edit from "./pages/Edit";
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
          path: ":id",
          id: "postDetail",
          loader: postDetailLoader,
          children: [
            {
              index: true,
              element: <PostDetail />,
              action: deleteAction,
            },
            { path: "edit", element: <Edit />, action: editingPostAction },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
