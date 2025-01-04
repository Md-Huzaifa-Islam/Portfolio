import Link from "next/link";
import React from "react";

export default function ProjectCard() {
  return (
    <div className="max-w-md rounded-2xl border border-gray-300 p-6 shadow-lg">
      {/* Image and Link Section */}
      <div className="relative aspect-[50/35] w-full overflow-hidden rounded-xl">
        <img
          className="absolute left-1/2 top-1/2 z-10 size-full -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover object-center transition-all duration-300 hover:-z-10 hover:scale-105"
          src="https://i.ibb.co.com/vYNCvtQ/equisport.jpg"
          alt="Project Image"
        />
        <div className="absolute left-1/2 top-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4 bg-slate-500 bg-opacity-70 transition-all duration-300 hover:z-10">
          <Link
            className="rounded-3xl border border-white bg-blue-700 p-2 px-4 text-lg font-semibold text-white"
            href={"https://sports-equipments.web.app/"}
            target="_blank"
          >
            Live Link
          </Link>
          <Link
            className="rounded-3xl border border-white bg-blue-700 p-2 px-4 text-lg font-semibold text-white"
            href={"https://sports-equipments.web.app/"}
            target="_blank"
          >
            Git Repo
          </Link>
        </div>
      </div>

      {/* Details Section */}
      <div className="mt-6 space-y-4">
        {/* Title and Description */}
        <div className="space-y-2">
          <h2 className="text-2xl font-semibold">Project Title</h2>
          <p className="opacity-70">
            A brief description of the project, highlighting its key features
            and purpose.
          </p>
        </div>

        {/* Technologies Section */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Used Technology:</p>
          <ul className="flex flex-wrap gap-3">
            <li className="bg-mainTheme-0 rounded-full px-3 py-1 text-sm font-medium text-white">
              React
            </li>
            <li className="bg-mainTheme-0 rounded-full px-3 py-1 text-sm font-medium text-white">
              TailwindCSS
            </li>
            <li className="bg-mainTheme-0 rounded-full px-3 py-1 text-sm font-medium text-white">
              Node.js
            </li>
          </ul>
        </div>

        {/* Show Details Button */}
        <Link
          href="/"
          className="text-btnColor-0 mt-5 block text-center text-base font-medium hover:underline"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}
