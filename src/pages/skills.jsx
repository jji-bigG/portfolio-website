import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";
import LogoSkills from "../components/skills/logos";
import ApplicantCard from "../components/skills/applicant_card";

const Skills = () => {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <ApplicantCard />
      <LogoSkills
        logos={[
          "/images/logos/rustlang.png",
          "/images/logos/pytorch.png",
          "/images/logos/java.png",
          "/images/logos/mongodb.png",
          "/images/logos/supabase.png",
          "/images/logos/nextjs.png",
          "/images/logos/python.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/TypeScript_Logo_%28Blue%29.svg/2560px-TypeScript_Logo_%28Blue%29.svg.png",
        ]}
      />
    </Sidebar>
  );
};

export default Skills;
