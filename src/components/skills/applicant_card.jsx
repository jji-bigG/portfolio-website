import { PaperClipIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import Divider from "../divider";

function Expandable({
  position,
  companyName,
  location,
  duration,
  workDetails,
  phrase,
  link,
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <dl className="divide-y divide-gray-100">
        <div
          className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:cursor-pointer bg-gray-100 hover:bg-gray-200 transition-all duration-300 ease-in-out"
          onClick={toggleExpand}
        >
          <dt className="text-sm font-medium text-gray-900">Position</dt>
          <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0 flex">
            <PaperClipIcon
              className={`${
                expanded ? "transform rotate-180" : ""
              } h-5 w-5 text-gray-400 transition-all duration-300 ease-in-out mr-2`}
              aria-hidden="true"
            />
            {position || "Add Position"}
          </dd>
        </div>

        {expanded && (
          <>
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">
                Company Name
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {companyName}
              </dd>
            </div>

            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">Location</dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                {location ? location : "Remote"}
              </dd>
            </div>
            {duration && (
              <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
                <dt className="text-sm font-medium text-gray-900">Duration</dt>
                <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                  {duration}
                </dd>
              </div>
            )}
            <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
              <dt className="text-sm font-medium text-gray-900">
                Work Details
              </dt>
              <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                <ul
                  role="list"
                  className="divide-y divide-gray-200 rounded-md border border-gray-200"
                >
                  <li className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                    <div className="flex w-0 flex-1 items-center">
                      <span className="truncate font-medium">
                        {workDetails
                          ? workDetails.map((detail, index) => (
                              <div key={index}>{detail}</div>
                            ))
                          : "Add Work Details"}
                      </span>
                    </div>
                    {link && (
                      <div className="ml-4 flex-shrink-0">
                        <a
                          href={link}
                          className="font-medium text-indigo-600 hover:text-indigo-500"
                        >
                          Visit Website
                        </a>
                      </div>
                    )}
                  </li>
                </ul>
              </dd>
            </div>
          </>
        )}
      </dl>
      {expanded && <Divider phrase={phrase ? phrase : "Continue"} />}
    </>
  );
}

export default function ApplicantCard() {
  return (
    <div className="overflow-hidden bg-white shadow sm:rounded-lg">
      <div className="px-4 py-6 sm:px-6">
        <h3 className="text-base font-semibold leading-7 text-gray-900">
          Previous Experiences
        </h3>
        <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
          Details on my Internships & Projects
        </p>
      </div>
      <div className="border-t border-gray-100">
        <Expandable
          position="Machine Learning Engineer - LLM Algorithms"
          companyName="LeYan Technologies"
          location="Shanghai, China"
          phrase="Internship"
          workDetails={[
            "Configured optimized Docker environments and GitLab CI/CD pipelines onto 3 GPU servers on cloud and in house, reducing deployment time by 30% for OneFlow (PyTorch equivalent) DL testing suite.",
            "Developed RAG+LLM product recommendation assistant by extracting 100k+ QA pairs from terabytes of social media user data.",
            "Refined 50k high-quality data points through generative AI and prompt engineering, using OpenAI SDK and Pandas while parallel computing.",
          ]}
        />

        <Expandable
          position="Full Stack Enterprise Software Engineer"
          companyName="Cornell CMSX"
          location="Ithaca, NY, US"
          phrase="Software Engineer"
          workDetails={[
            "Optimizing Cornell’s course management system for 8,000+ students, managing a 100k+ line Java JSP backend, Jakarta (Spring Boot) RESTful API for reliable production.",
            "Collaborated with cross-functional engineers and performed code reviews through git + GitHub to prioritize bug fixes, track progress, and ensure agile alignment with project objectives.",
            "Resolved 2 support ticket bugs and implemented 1 new React feature/component per week.",
          ]}
        />

        <Expandable
          position="React Frontend Developer - Data Analytics & Apps"
          companyName="Cornell Electric Vehicles Project Team"
          location="Ithaca, NY, US"
          phrase="Developer"
          workDetails={[
            "Maintained React LiveTiming dashboard to aggregate EV status data with various visualizations.",
            "Worked with Electrical subteam to develop a Rust Embedded Software to send monitoring data to Kafka.",
          ]}
        />

        <Expandable
          position="CS 3110 Teaching Assistant"
          companyName="Cornell University"
          location="Ithaca, NY, US"
          phrase="Teaching Assistant"
          workDetails={[
            "Guided 300+ students in functional programming and debugging OCaml implementations.",
            "Held office hours 2 times a week for 2 hours each, providing support for debugging and explaining complex functional programming concepts and data structures.",
            "Managed two teams of 5 students, guiding them through the design and implementation of final projects, each involving 2000+ lines of OCaml code.",
          ]}
        />
        <Expandable
          position={"Full Stack Externship"}
          companyName={"ToSupply.cn 中光云链"}
          location={"Shanghai, China"}
          workDetails={[
            "• Learn & practice Jenkins, Springboot for internal contract database and authentication management system with over 200+ employees, 1,000+ transactions.",
            "• Contribute & PR to a mock React + Django full stack with automatically creating contracts for clients to sign.",
          ]}
          phrase="Externship"
        />
        <Expandable
          position={"Frontend Developer Volunteer"}
          companyName={"International Children's Education Association"}
          workDetails={[
            "• Implemented Global AirLearning program, serving 120+ presentations, 700+ volunteers.",
            "• Lead & onboard a team of 3 the development of a chess tournament registration website with authentication using React, Redux",
          ]}
          phrase="Volunteering Internship"
        />
      </div>
    </div>
  );
}
