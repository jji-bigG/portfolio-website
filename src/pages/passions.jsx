import React from "react";
import Sidebar from '../layouts/sidebar'
import { useLocation } from "react-router-dom";

function Passion() {
  const location = useLocation()
  
  return (
      <Sidebar current={location.pathname}>
        <h1>Hi, I am Jerry. Cornell CS + Math</h1>
        <p>This is the main content area.</p>
      </Sidebar>
  );
}

export default Passion;
