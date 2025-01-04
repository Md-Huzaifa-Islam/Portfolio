import EducationAnimation from "@/client/EducationAnimation";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

export default function EducationContainer() {
  return (
    <div className="px-5 pt-28 md:container md:mx-auto">
      <SectionHeader
        heading={"Education"}
        subHeading={"My Undergraduate Journey at CUET"}
      />

      <div className="relative bottom-10 grid grid-cols-2 items-center justify-between">
        <div className="max-w-xl justify-self-start">
          <EducationAnimation />
        </div>
        <div className="max-w-2xl rounded-lg border-2 border-white p-10 shadow-lg shadow-white">
          <h2 className="text-2xl font-semibold">
            Bachelor's in Computer Science
          </h2>
          <p className="font-medium text-gray-700">
            Chittagong University of Engineering and Technology (CUET)
          </p>
          <p className="text-gray-600">2019 - Present</p>

          <p className="mt-2 text-gray-700">
            Currently pursuing a Bachelor's degree in Computer Science, with a
            focus on software development, data structures, and modern
            technologies. I am in my final year, actively working on projects
            related to full-stack web development, machine learning, and AI.
          </p>
        </div>
      </div>
    </div>
  );
}
