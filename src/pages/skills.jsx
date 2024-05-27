import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

const Skills = () => {
  const location = useLocation();

  return <Sidebar current={location.pathname}>Skills</Sidebar>;
};

export default Skills;
