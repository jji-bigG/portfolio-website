import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/20/solid";

const people = [
  {
    name: "CS 4780",
    title: "Machine Learning for Intelligent Systems",
    role: "CS",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/images/kilian.jpeg",
  },
  {
    name: "MATH 2940",
    title: "Linear Algebra for Engineers",
    role: "Math",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/images/townsend.jpeg",
  },
  {
    name: "CS 3110",
    title: "Functional Programming and Data Structures",
    role: "CS",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/images/ocaml.png",
  },
  {
    name: "MATH 4710",
    title: "Probabilities Theory",
    role: "Math",
    email: "janecooper@example.com",
    telephone: "+1-202-555-0170",
    imageUrl: "/images/gammadistr.webp",
  },
  // More people...
];

export default function CornellCourses() {
  return (
    <ul
      role="list"
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
    >
      {people.map((person) => (
        <li
          key={person.email}
          className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
        >
          <div className="flex flex-1 flex-col p-8">
            <img
              className="mx-auto h-32 w-32 flex-shrink-0 rounded-full"
              src={person.imageUrl}
              alt=""
            />
            <h3 className="mt-6 text-sm font-medium text-gray-900">
              {person.name}
            </h3>
            <dl className="mt-1 flex flex-grow flex-col justify-between">
              <dt className="sr-only">Title</dt>
              <dd className="text-sm text-gray-500">{person.title}</dd>
              <dt className="sr-only">Role</dt>
              <dd className="mt-3">
                {
                  // person.role
                  person.role === "CS" ? (
                    <span className="inline-flex items-center rounded-full bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
                      Computer Science
                    </span>
                  ) : person.role === "Math" ? (
                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20">
                      {person.role}
                    </span>
                  ) : (
                    <span className="inline-flex items-center rounded-full bg-yellow-50 px-2 py-1 text-xs font-medium text-yellow-700 ring-1 ring-inset ring-yellow-600/20">
                      {person.role}
                    </span>
                  )
                }
              </dd>
            </dl>
          </div>
          <div>
            <div className="-mt-px flex divide-x divide-gray-200">
              <div className="flex w-0 flex-1">
                <a
                  href={`mailto:${person.email}`}
                  className="relative -mr-px inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-bl-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <EnvelopeIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Email
                </a>
              </div>
              <div className="-ml-px flex w-0 flex-1">
                <a
                  href={`tel:${person.telephone}`}
                  className="relative inline-flex w-0 flex-1 items-center justify-center gap-x-3 rounded-br-lg border border-transparent py-4 text-sm font-semibold text-gray-900"
                >
                  <PhoneIcon
                    className="h-5 w-5 text-gray-400"
                    aria-hidden="true"
                  />
                  Call
                </a>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
}
