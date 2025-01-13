import SectionHeader from "@/shared/SectionHeader";
import React from "react";
import ProjectSlider from "./ProjectSlider";
import axios from "axios";
import Loading from "./Loading";
const fetchData = async () => {
  try {
    const response = await axios.get(
      "https://portfolio-server-gamma-gules.vercel.app/projects",
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
};
export default async function ProjectsContainer() {
  const data = await fetchData();

  return (
    <div className="px-5 pt-28 md:container md:mx-auto">
      <SectionHeader
        heading={"Projects"}
        subHeading={"Here are a few projects I've worked on."}
      />

      <div className="pt-10">
        {data ? <ProjectSlider data={data} /> : <Loading />}
      </div>
    </div>
  );
}
