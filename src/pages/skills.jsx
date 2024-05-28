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
          "/images/logos/mongodb.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/MySQL_textlogo.svg/2560px-MySQL_textlogo.svg.png",
          "https://akztcujgjipefxjrfsak.supabase.co/storage/v1/object/public/statics/perks/light/supabase.png",
          "/images/logos/pyt.png",
          "https://rust-lang.org/logos/rust-logo-512x512.png",
          "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png",
        ]}
      />
    </Sidebar>
  );
};

export default Skills;
