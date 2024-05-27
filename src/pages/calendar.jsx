import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

function Calendar() {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <h1>calendar</h1>
    </Sidebar>
  );
}

export default Calendar;
