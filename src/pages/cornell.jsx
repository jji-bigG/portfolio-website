import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

function Cornell() {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <h1>cornell</h1>
    </Sidebar>
  );
}

export default Cornell;
