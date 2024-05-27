import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";
import LogoSkills from "../components/skills/logos";

const Skills = () => {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <LogoSkills
        logos={[
          "https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/laravel-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg",
          "https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg",
        ]}
      />
    </Sidebar>
  );
};

export default Skills;
