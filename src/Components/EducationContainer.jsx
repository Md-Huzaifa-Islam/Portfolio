import React from "react";

export default function EducationContainer() {
  return (
    <div className="bg-gray-100 px-6 py-12 text-gray-800 md:px-20">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Education</h1>
        <p className="text-lg text-gray-600">My Undergraduate Journey</p>
      </div>

      <div className="rounded-lg bg-white p-6 shadow-lg">
        <h2 className="text-2xl font-semibold">
          Bachelor's in Computer Science
        </h2>
        <p className="font-medium text-gray-700">
          Chittagong University of Engineering and Technology
        </p>
        <p className="text-gray-600">2019 - Present</p>
        <p className="mt-2 text-gray-700">
          Currently pursuing my undergraduate degree with a focus on software
          development, computer science principles, and modern technologies.
        </p>
      </div>
    </div>
  );
}
