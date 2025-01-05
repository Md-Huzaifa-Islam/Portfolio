import AboutSlider from "@/client/AboutSlider";
import Animation1 from "@/client/Animation1";
import Animation2 from "@/client/Animation2";
import Animation3 from "@/client/Animation3";
import SectionHeader from "@/shared/SectionHeader";
import Link from "next/link";
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
        <div className="relative flex flex-col-reverse items-center justify-between gap-10 lg:bottom-0 lg:grid lg:grid-cols-2 lg:gap-0 xl:bottom-14">
          <div className="max-w-2xl rounded-lg border-2 border-white p-10 shadow-lg shadow-btnColor-0">
            <h2 className="mb-4 text-2xl font-semibold text-btnColor-0">
              Who I Am ?{" "}
            </h2>
            <p className="leading-relaxed">
              Hi, I’m{" "}
              <Link
                target="_blank"
                href={
                  "https://docs.google.com/document/d/1Iqb59QkhLh6iaYoGPNEUeADYKo1pPLcGryaupCzZGh0/edit?tab=t.0"
                }
                className="font-semibold text-btnColor-0"
              >
                Md. Huzaifa Islam
              </Link>
              , a passionate Frontend Developer based in Chittagong, Bangladesh.
              I specialize in building interactive, responsive, and
              user-friendly web applications using modern technologies like
              React.js, Next.js, and TypeScript. I love solving problems,
              creating intuitive designs, and learning cutting-edge tools in web
              development.
            </p>
          </div>
          {/* animation side  */}
          <div className="hidden max-w-xl justify-self-end lg:flex lg:max-w-md">
            <AboutSlider />
          </div>
        </div>
      </div>
    </>
  );
}
