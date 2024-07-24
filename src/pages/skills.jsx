import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";
import Logos from "../components/skills/logos";
import ApplicantCard from "../components/skills/applicant_card";

const Skills = () => {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <h5 className="text-2xl font-bold mb-2">I have previously worked with</h5>
      <Logos
        msg="Programming Languages:"
        logos={[
          "/images/logos/python.png",
          "/images/logos/ocaml.png",
          "/images/logos/ts.png",
          // "/images/logos/nodejs.png",
          "/images/logos/java.png",
          "/images/logos/rustlang.png",
        ]}
      />
      <Logos
        msg="Frameworks:"
        logos={[
          "/images/logos/pytorch.png",
          "/images/logos/nextjs.png",
          "/images/logos/nuxtjs.png",
        ]}
      />
      <Logos
        msg="Microservices:"
        logos={[
          "/images/logos/supabase.png",
          "/images/logos/docker.png",
          "/images/logos/mongodb.png",
          "/images/logos/postgresql cp.png",
        ]}
      />
      <ApplicantCard />
    </Sidebar>
  );
};

export default Skills;
