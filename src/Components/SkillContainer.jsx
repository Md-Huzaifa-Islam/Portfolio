import Skill from "@/client/Skill";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiMongodb,
  SiJavascript,
  SiTypescript,
  SiExpress,
} from "react-icons/si";
export default function SkillContainer() {
  const skills = [
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "Express.js", icon: <SiExpress className="text-black" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];
  return (
    <div className="px-5 md:container md:mx-auto">
      <SectionHeader
        heading={"My Skills"}
        subHeading={"Technologies and tools I work with."}
      />

      <div className="flex flex-wrap items-center justify-center gap-32 gap-y-28 pt-20">
        {skills.map((skill, index) => (
          <Skill key={index} skill={skill} />
        ))}
      </div>
    </div>
  );
}
