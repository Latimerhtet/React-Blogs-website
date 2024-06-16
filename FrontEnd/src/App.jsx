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
import Auth, { action as authAction } from "./pages/Auth";
import Logout, { loader as logoutLoader } from "./pages/Logout";
import { checkTokenLoader, tokenLoader } from "./util/Auth";
import Interior from "./pages/Interior";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      errorElement: <Error />,
      id: "main",
      loader: tokenLoader,
      children: [
        { index: true, element: <Posts />, loader: postsLoader },
        {
          path: "/createpost",
          element: <CreatePost />,
          loader: checkTokenLoader,
          action: creatingPostAction,
        },
        { path: "/auth", element: <Auth />, action: authAction },
        { path: "/logout", element: <Logout />, loader: logoutLoader },
        { path: "/interior", element: <Interior /> },
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
            {
              path: "edit",
              element: <Edit />,
              action: editingPostAction,
              loader: checkTokenLoader,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default App;
