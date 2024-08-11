import React, { useState } from "react";
import Sidebar, { SidebarTwoColumn } from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

import { ReactTyped as Typed } from "react-typed";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons/faGithub";
import { MapPinIcon, ServerStackIcon } from "@heroicons/react/24/solid";
import { ArrowDownIcon } from "@heroicons/react/24/outline";
import AutoScrollingGallery from "../components/about/photography-aside";

function Passion() {
  const [openAbout, setOpenAbout] = useState("hidden");

  return (
    <SidebarTwoColumn aside={<AutoScrollingGallery />}>
      <section className="text-left m-0 p-0 md:-translate-x-36">
        {/* the overlay */}
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>

        {/* the actual section */}
        <div className="-translate-y-40">
          <img
            className="mb-10 rounded-full hover:select-none hover:shadow-lg transition duration-300 hover:cursor-pointer w-36 mt-52"
            src="/images/IMG_2441.JPG"
            alt=""
          />
          <h2 className="text-6xl mb-8 font-bold">
            I'm <span className="text-cyan-800 font-extrabold">Jerry</span> Ji
          </h2>
          <div className="text-2xl font-semibold">
            <p className="flex bg-gray-100 p-5 rounded-lg">
              {/* <ArrowDownIcon className="w-6 mr-3" /> */}
              <ServerStackIcon className="w-10 mr-5 text-violet-800" />
              <span className="mt-1">
                <Typed
                  strings={[
                    "Machine Learning",
                    "LLM Transformers",
                    "Vision Transformers",
                    "Database Management",
                    "DevOps & MLOps Systems",
                    "Continuous Deployments",
                  ]}
                  typeSpeed={50}
                  backSpeed={25}
                  backDelay={2000}
                  loop
                />
              </span>
            </p>
            <p className="flex mt-3 bg-gray-100 p-5 rounded-lg">
              {/* <ArrowDownIcon className="w-6 mr-3" /> */}
              <MapPinIcon className="w-10 mr-5 text-violet-800" />
              <span className="mt-1">
                <Typed
                  strings={[
                    "Ithaca, NY, US",
                    "SF Bay Area, CA, US",
                    "Shanghai, China",
                  ]}
                  typeSpeed={50}
                  backSpeed={25}
                  backDelay={2000}
                  loop
                />
              </span>
            </p>
          </div>

          <ul className="flex space-x-5 text-5xl mt-10">
            <li className="hover:text-cyan-800 transition-all duration-300 ease-in-out hover:scale-125 hover:cursor-pointer hover:select-none hover:bg-gray-100 p-3 rounded-xl">
              <a
                aria-label="LinkedIn"
                href="https://www.linkedin.com/in/jerryji2793/"
                target="_blank"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li className="hover:text-purple-800 transition-all duration-300 ease-in-out hover:scale-125 hover:cursor-pointer hover:select-none hover:bg-gray-100 p-3 rounded-xl">
              <a
                aria-label="GitHub"
                href="https://github.com/jji-bigG"
                target="_blank"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="hover:text-blue-500 transition-all duration-300 ease-in-out hover:scale-125 hover:cursor-pointer hover:select-none hover:bg-gray-100 p-3 rounded-xl">
              <a aria-label="Twitter" href="#" target="_blank">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
            </li>
            <li className="hover:text-red-500 transition-all duration-300 ease-in-out hover:scale-125 hover:cursor-pointer hover:select-none hover:bg-gray-100 p-3 rounded-xl">
              <a
                aria-label="Instagram"
                href="https://www.instagram.com/jerryji2793/"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </SidebarTwoColumn>
  );
}

export default Passion;
