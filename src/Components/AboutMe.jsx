import SectionHeader from "@/shared/SectionHeader";
import React from "react";

export default function AboutMe() {
  return (
    <>
      <div className="px-5 pt-28 md:container md:mx-auto">
        {/* Hero Section */}
        <SectionHeader
          heading={"About Me"}
          subHeading={"Get to know a little more about me and what I do."}
        />

        {/* Main Content */}
        <div className="rounded-lg p-6 shadow-lg">
          <h2 className="mb-4 text-2xl font-semibold">Who I Am</h2>
          <p className="leading-relaxed">
            Hi, I’m{" "}
            <span className="font-semibold text-blue-500">
              Md. Huzaifa Islam
            </span>
            , a passionate Frontend Developer based in Chittagong, Bangladesh. I
            specialize in building interactive, responsive, and user-friendly
            web applications using modern technologies like React.js, Next.js,
            and TypeScript. I love solving problems, creating intuitive designs,
            and learning cutting-edge tools in web development.
          </p>
        </div>
      </div>
    </>
  );
}
