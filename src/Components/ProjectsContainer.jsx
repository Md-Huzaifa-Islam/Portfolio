import React from "react";

export default function ProjectsContainer() {
  const projects = [
    {
      name: "EquiSports",
      description:
        "A sports equipment e-commerce platform featuring product management, user authentication, and a smooth shopping experience.",
      techStack: ["React.js", "Node.js", "MongoDB", "TailwindCSS", "Vite"],
      link: "https://github.com/yourusername/equisports",
    },
    {
      name: "Consulting Website",
      description:
        "A platform for career counseling, offering user registration, protected routes, and personalized services like resume reviews.",
      techStack: ["React", "Firebase", "TailwindCSS"],
      link: "https://github.com/yourusername/consulting-website",
    },
    {
      name: "GadgetHaven",
      description:
        "An e-commerce platform for gadgets with features like product filtering, cart management, and dynamic title rendering.",
      techStack: ["React.js", "Redux", "TailwindCSS"],
      link: "https://github.com/yourusername/gadgethaven",
    },
  ];
  return (
    <div className="bg-gray-100 px-6 py-12 text-gray-800 md:px-20">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Projects</h1>
        <p className="text-lg text-gray-600">
          Here are a few projects I've worked on.
        </p>
      </div>

      <div className="space-y-8">
        {projects.map((project, index) => (
          <div key={index} className="rounded-lg bg-white p-6 shadow-lg">
            <h2 className="text-2xl font-semibold">{project.name}</h2>
            <p className="mt-2 text-gray-700">{project.description}</p>
            <p className="mt-2 font-medium text-gray-600">
              Tech Stack: {project.techStack.join(", ")}
            </p>
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block text-blue-500 hover:underline"
            >
              View on GitHub
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
