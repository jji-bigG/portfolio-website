import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

function Blogs() {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <h1>blogs</h1>
    </Sidebar>
  );
}

export default Blogs;
