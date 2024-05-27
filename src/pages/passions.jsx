import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

import "./styles/passions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";

function Passion() {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <section class="home" id="home">
        <div id="particles-js"></div>

        <div class="content">
          <h2>
            Hi There,
            <br /> I'm <span>Jerry</span> Ji
          </h2>
          <p>
            i am into <span class="typing-text">ML, SYS</span>
          </p>
          <a href="#about" class="btn">
            <span>About Me</span>
            <i class="fas fa-arrow-circle-down"></i>
          </a>
          <div class="socials">
            <ul class="social-icons">
              <li>
                <a
                  class="linkedin"
                  aria-label="LinkedIn"
                  href="https://www.linkedin.com/in/jigar-sable/"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  class="github"
                  aria-label="GitHub"
                  href="https://github.com/jigar-sable"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} />
                </a>
              </li>
              <li>
                <a
                  class="twitter"
                  aria-label="Twitter"
                  href="https://twitter.com/jigar_sable"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  class="instagram"
                  aria-label="Instagram"
                  href="https://www.instagram.com/jigarsable.dev"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div class="image">
          <img
            draggable="false"
            class="tilt"
            src="/images/clarkson.png"
            alt=""
          />
        </div>
      </section>

      <section class="about" id="about">
        <div class="row">
          <div class="content">
            <h3>I'm Jerry</h3>
            <span class="tag">Cornell CS + Math</span>

            <p>
              I am interested in the transformative power of data in easing our
              lives and works & tricks to efficiently process them. That is why
              I try to understand the theory of ML through an additional Math
              major, focus on relevant courses such as ML & RL & DL, DataBase,
              Parallel Computing, Compilers, and gain relevant real world
              experience through the various projects I work on.
            </p>

            <div class="box-container">
              <div class="box">
                <p>
                  <span> age: </span> 19
                </p>
                <p>
                  <span> phone : </span> +1 (707) 849-2690
                </p>
              </div>
              <div class="box">
                <p>
                  <span> email : </span> rj378@cornell.edu
                </p>
                <p>
                  <span> place : </span> Ithaca, NY 14852
                </p>
              </div>
            </div>

            {/* <div class="resumebtn">
              <a
                href="https://drive.google.com/file/d/1rZiXl562q7aVyk1kJ2nO85YBAq8ixTiw/view"
                target="_blank"
                class="btn"
              >
                <span>Resume</span>
                <i class="fas fa-chevron-right"></i>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </Sidebar>
  );
}

export default Passion;
