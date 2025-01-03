import React from "react";

export default function AboutMe() {
  return (
    <div className="bg-gray-100 px-6 py-12 text-gray-800 md:px-20">
      {/* Hero Section */}
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">About Me</h1>
        <p className="text-lg text-gray-600">
          Get to know a little more about me and what I do.
        </p>
      </div>

      {/* Main Content */}
      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="mb-4 text-2xl font-semibold">Who I Am</h2>
        <p className="leading-relaxed text-gray-700">
          I’m a passionate frontend and full-stack developer dedicated to
          creating engaging and user-friendly web applications. With a strong
          focus on modern frameworks like React and Next.js, I specialize in
          building scalable and efficient digital solutions.
        </p>
        <p className="mt-4 leading-relaxed text-gray-700">
          Over the years, I’ve worked on diverse projects, leveraging the MERN
          stack to deliver high-performance applications. Whether it’s crafting
          seamless user interfaces or designing full-stack solutions, I’m
          committed to making every project a success.
        </p>
      </div>
    </div>
  );
}
