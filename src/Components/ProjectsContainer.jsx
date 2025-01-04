import SectionHeader from "@/shared/SectionHeader";
import React from "react";
import ProjectSlider from "./ProjectSlider";

export default function ProjectsContainer() {
  return (
    <div className="px-5 pt-28 md:container md:mx-auto">
      <SectionHeader
        heading={"Projects"}
        subHeading={"Here are a few projects I've worked on."}
      />

      <div className="pt-10">
        <ProjectSlider />
      </div>
    </div>
  );
}
