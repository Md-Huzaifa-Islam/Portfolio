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

      <div className="relative flex flex-col items-center justify-between gap-5 sm:grid sm:grid-cols-[1fr_2fr] lg:bottom-10 lg:grid-cols-2">
        <div className="max-w-xs justify-self-start lg:max-w-lg xl:max-w-xl">
          <EducationAnimation />
        </div>
        <div className="max-w-2xl rounded-lg border-2 border-white p-10 shadow-lg shadow-btnColor-0">
          <h2 className="mb-2 text-3xl font-semibold text-btnColor-0">
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
