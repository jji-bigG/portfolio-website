import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";
import CornellCourses from "../components/cornell/courses";

function Cornell() {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <h1 className="text-2xl font-semibold text-gray-900">Cornell Courses</h1>
      <p className="mt-2 text-sm text-gray-500">
        Courses I took at Cornell University. Hover over a course to see my
        reflection on it. Each course is color-coded by which major it counts
        towards in my degree.
      </p>
      <CornellCourses />
    </Sidebar>
  );
}

export default Cornell;
