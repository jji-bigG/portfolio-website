import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Passion from "./pages/passions";
import Skills from "./pages/skills";
import Blogs from "./pages/blogs";
import Cornell from "./pages/cornell";
import Calendar from "./pages/calendar";
import Sidebar from "./layouts/sidebar";
import NotFound from "./pages/404";
import SignIn from "./pages/auth/signin";
import BlogPage from "./pages/blog_page";
import ProjectDetailPage from "./pages/project_detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Passion />,
    errorElement: (
      <Sidebar>
        <NotFound />
      </Sidebar>
    ),
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/skills",
    element: <Skills />,
  },
  {
    path: "/blogs",
    element: <Blogs />,
  },
  {
    path: "/blogs/page",
    element: <BlogPage />,
  },
  {
    path: "/cornell",
    element: <Cornell />,
  },
  {
    path: "/calendar",
    element: <Calendar />,
  },
  {
    path: "/projects/:name",
    element: (
      <Sidebar>
        <ProjectDetailPage />
      </Sidebar>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="Loading...">
      <RouterProvider router={router} />
    </React.Suspense>
  </React.StrictMode>
);
