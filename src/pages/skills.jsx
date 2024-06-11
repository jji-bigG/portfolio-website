import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";
import Logos from "../components/skills/logos";
import ApplicantCard from "../components/skills/applicant_card";

const Skills = () => {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <Logos
        msg="Programming Languages:"
        logos={[
          "/images/logos/rustlang.png",
          "/images/logos/python.png",
          "/images/logos/ocaml.png",
          // "/images/logos/nodejs.png",
          "/images/logos/java.png",
        ]}
      />
      <Logos
        msg="Frameworks:"
        logos={[
          "/images/logos/pytorch.png",
          "/images/logos/mongodb.png",
          "/images/logos/postgresql cp.png",
          "/images/logos/nextjs.png",
          "/images/logos/nuxtjs.png",
        ]}
      />
      <Logos
        msg="Developer Tools:"
        logos={["/images/logos/supabase.png", "/images/logos/docker.png"]}
      />
      <ApplicantCard />
    </Sidebar>
  );
};

export default Skills;
