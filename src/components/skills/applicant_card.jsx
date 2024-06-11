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
}) {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  return (
    <>
      <dl className="divide-y divide-gray-100">
        <div
          className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6 hover:cursor-pointer bg-gray-50 hover:bg-gray-100 transition-all duration-300 ease-in-out"
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
                    <div className="ml-4 flex-shrink-0">
                      <a
                        href="https://leyantech.com"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Visit Website
                      </a>
                    </div>
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
          position="LLM & E-Commerce Intern"
          companyName="LeYan Technologies 乐言科技"
          location="Shanghai, China"
          phrase="Internship"
          workDetails={[
            "Modified & Compiled OneFlow (PyTorch-like DL framework) from source using Docker environment",
            "Cleaned customer support dialogues for RAG applications",
          ]}
        />
        <Expandable
          position={"CS 3110 Teaching Assistant"}
          companyName={"Cornell University Bowers CIS"}
          location={"Ithaca, NY, USA"}
          phrase="Teaching Assistant"
        />
        <Expandable
          position={"Frontend Developer Intern"}
          companyName={"International Children's Education Association"}
          workDetails={[
            "Developed a website for the organization",
            "Worked with a team of 3",
          ]}
          phrase="Volunteering Internship"
        />
      </div>
    </div>
  );
}
