"use client";
import Loading from "@/Components/Loading";
import axios from "axios";
import Link from "next/link";
import { useParams } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function page() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  useEffect(() => {
    axios
      .get(`https://portfolio-server-gamma-gules.vercel.app/projects/${id}`)
      .then((res) => setData(res.data));
  }, []);

  const {
    title,
    shortDescription,
    description,
    usedTechnologies,
    image,
    live,
    repo,
  } = data || {};

  return (
    <div className="container mx-auto p-4">
      {data ? (
        <div className="grid md:grid-cols-2">
          {/* Left Side - Image */}
          <div className="h-full w-full p-4">
            <img
              src={image}
              alt={title}
              className="w-full rounded-lg object-cover object-center shadow-lg lg:h-full"
            />
          </div>

          {/* Right Side - Details */}
          <div className="w-full p-4">
            <h1 className="mb-4 text-4xl font-bold">{title}</h1>
            <p className="mb-4 text-lg">{shortDescription}</p>
            <p className="mb-4 text-base opacity-70">{description}</p>

            <h2 className="mb-2 text-2xl font-semibold">Technologies Used:</h2>
            <ul className="mb-4 flex h-fit max-h-40 list-disc flex-col flex-wrap gap-y-3 pl-5">
              {usedTechnologies.map((d, index) => (
                <li
                  key={index}
                  className="w-max rounded-full bg-mainTheme-0 px-3 py-1 text-sm font-medium text-white"
                >
                  {d}
                </li>
              ))}
            </ul>

            <div>
              <p className="mb-2 text-2xl font-semibold">Check it out</p>
              <div className="flex gap-4">
                <Link
                  target="_blank"
                  href={live}
                  className="rounded-xl bg-btnColor-0 px-5 py-2 text-base font-medium text-white hover:bg-huzaifa-0 hover:text-mainTheme-0"
                >
                  Live Link
                </Link>
                <Link
                  target="_blank"
                  href={repo}
                  className="rounded-xl bg-btnColor-0 px-5 py-2 text-base font-medium text-white hover:bg-huzaifa-0 hover:text-mainTheme-0"
                >
                  Git Repository Link
                </Link>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Loading />
      )}
    </div>
  );
}
