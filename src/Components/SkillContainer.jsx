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
} from "react-icons/si";
export default function SkillContainer() {
  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
    { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },
    { name: "JavaScript", icon: <SiJavascript className="text-yellow-500" /> },
    { name: "TailwindCSS", icon: <SiTailwindcss className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
    { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  ];
  return (
    <div className="bg-gray-100 px-6 py-12 text-gray-800 md:px-20">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Skills</h1>
        <p className="text-lg text-gray-600">
          Technologies and tools I work with.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="mb-2 text-5xl">{skill.icon}</div>
            <p className="font-medium text-gray-700">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
