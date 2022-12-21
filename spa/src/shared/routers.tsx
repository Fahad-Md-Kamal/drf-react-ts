import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/auth/Login";
import Layout from "../pages/Layout";
import TodoList from "../pages/TodoList";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <TodoList />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);
