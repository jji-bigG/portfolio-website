import React from "react";
import Sidebar from "../layouts/sidebar";
import Markdown from "react-markdown";

export default function BlogPage() {
  return (
    <Sidebar current={"/blogs/page"}>
      {/* <Markdown># Hi, *Pluto*!</Markdown> */}
    </Sidebar>
  );
}
