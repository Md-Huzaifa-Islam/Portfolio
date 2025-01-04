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
        <div className="shadow-btnColor-0 max-w-2xl rounded-lg border-2 border-white p-10 shadow-lg">
          <h2 className="text-btnColor-0 mb-2 text-3xl font-semibold">
            Bachelor's in Computer Science
          </h2>
          <p className="text-lg font-medium">
            Chittagong University of Engineering and Technology (CUET)
          </p>
          <p className="">2022 - Present</p>

          <p className="mt-2 opacity-70">
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
