import Link from "next/link";
import React from "react";

export default function ProjectCard({ data }) {
  const { title, shortDescription, usedTechnologies, image, live, repo, _id } =
    data;
  return (
    <div className="max-w-md rounded-2xl border border-gray-300 p-6 shadow-lg lg:max-w-lg">
      {/* Image and Link Section */}
      <div className="relative aspect-[50/35] w-full overflow-hidden rounded-xl">
        <img
          className="absolute left-1/2 top-1/2 z-10 size-full -translate-x-1/2 -translate-y-1/2 rounded-xl object-cover object-center transition-all duration-300 hover:-z-10 hover:scale-105"
          src={image}
          alt={title}
        />
        <div className="absolute left-1/2 top-1/2 flex size-full -translate-x-1/2 -translate-y-1/2 items-center justify-center gap-4 bg-slate-500 bg-opacity-70 transition-all duration-300 hover:z-10">
          <Link
            className="rounded-3xl border border-white bg-blue-700 p-2 px-4 text-lg font-semibold text-white"
            href={live}
            target="_blank"
          >
            Live Link
          </Link>
          <Link
            className="rounded-3xl border border-white bg-blue-700 p-2 px-4 text-lg font-semibold text-white"
            href={repo}
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
          <h2 className="text-2xl font-semibold">{title}</h2>
          <p className="opacity-70">{shortDescription}</p>
        </div>

        {/* Technologies Section */}
        <div className="flex flex-col gap-2">
          <p className="text-lg font-medium">Used Technology:</p>
          <ul className="flex flex-wrap gap-3">
            {usedTechnologies.map((d, index) => (
              <li
                key={index}
                className="rounded-full bg-mainTheme-0 px-3 py-1 text-sm font-medium text-white"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        {/* Show Details Button */}
        <Link
          href={`/${_id}`}
          className="mx-auto block h-auto w-max rounded-lg bg-btnColor-0 px-5 py-3 text-base font-medium text-white hover:bg-huzaifa-0 hover:text-mainTheme-0"
        >
          Show Details
        </Link>
      </div>
    </div>
  );
}
