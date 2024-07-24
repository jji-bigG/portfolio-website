import React from "react";
import Sidebar from "../layouts/sidebar";
import { useLocation } from "react-router-dom";

const posts = [
  {
    id: 3,
    title: "The SQL database",
    href: "/blogs/3",
    description:
      "Publishing my notes and understanding for Cornell's CS 4320: Database Systems after I watch the YouTube Playlist that Professor Trummer generously posted.",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png",
    date: "Jul 8, 2024",
    datetime: "2024-07-8",
    category: { title: "Systems & Database", href: "#" },
    author: {
      name: "Jerry Ji",
      role: "Cornell UG",
      href: "#",
      imageUrl: "/images/selfie.jpeg",
    },
  },
  {
    id: 1,
    title: "Making my personal website",
    href: "#",
    description:
      "Documenting the decision process and my learnings after making this personal website. This is mostly a review of what I already learned from previous (failed) web development projects.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    date: "Jun 16, 2024",
    datetime: "2024-06-16",
    category: { title: "Web Development", href: "#" },
    author: {
      name: "Jerry Ji",
      role: "Cornell UG",
      href: "#",
      imageUrl: "/images/selfie.jpeg",
    },
  },
  {
    id: 2,
    title: "My ML Lib",
    href: "#",
    description:
      "My understanding of tradtional ML algorithms summarized in this python library built solely with numpy. This is a great exercise to get deeper into how PyTorch is being made.",
    imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLhsMlG1FGExpmAWbgZGXDv1iTcgtVEMwV_Q&s",
    date: "May 27, 2024",
    datetime: "2024-05-27",
    category: { title: "Machine Learning", href: "#" },
    author: {
      name: "Jerry Ji",
      role: "Cornell UG",
      href: "#",
      imageUrl: "/images/selfie.jpeg",
    },
  },
  // More posts...
];

function Blogs() {
  const location = useLocation();

  return (
    <Sidebar current={location.pathname}>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-2 lg:px-3">
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              My personal blog page
            </h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              My thoughts and learnings on machine learning, data systems,
              software engineering, and algorithms.
            </p>
            <div className="mt-16 space-y-20 lg:mt-20 lg:space-y-20">
              {posts.map((post) => (
                <article
                  key={post.id}
                  className="relative isolate flex flex-col gap-8 lg:flex-row"
                >
                  <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-square lg:w-64 lg:shrink-0">
                    <img
                      src={post.imageUrl}
                      alt=""
                      className="absolute inset-0 h-full w-full rounded-2xl bg-gray-50 object-cover"
                    />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                  </div>
                  <div>
                    <div className="flex items-center gap-x-4 text-xs">
                      <time dateTime={post.datetime} className="text-gray-500">
                        {post.date}
                      </time>
                      <a
                        href={post.category.href}
                        className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                      >
                        {post.category.title}
                      </a>
                    </div>
                    <div className="group relative max-w-xl">
                      <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                        <a href={post.href}>
                          <span className="absolute inset-0" />
                          {post.title}
                        </a>
                      </h3>
                      <p className="mt-5 text-sm leading-6 text-gray-600">
                        {post.description}
                      </p>
                    </div>
                    <div className="mt-6 flex border-t border-gray-900/5 pt-6">
                      <div className="relative flex items-center gap-x-4">
                        <img
                          src={post.author.imageUrl}
                          alt=""
                          className="h-10 w-10 rounded-full bg-gray-50"
                        />
                        <div className="text-sm leading-6">
                          <p className="font-semibold text-gray-900">
                            <a href={post.author.href}>
                              <span className="absolute inset-0" />
                              {post.author.name}
                            </a>
                          </p>
                          <p className="text-gray-600">{post.author.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Sidebar>
  );
}

export default Blogs;
