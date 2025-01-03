import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 lg:flex-row">
        {/* Left Section: Logo or Name */}
        <div className="mb-4 text-center lg:mb-0 lg:text-left">
          <h2 className="text-3xl font-semibold">Huzaifa</h2>
          <p className="text-gray-400">Frontend & Full Stack Developer</p>
        </div>

        {/* Center Section: Links */}
        <div className="mb-4 flex justify-center space-x-6 lg:mb-0">
          <a
            href="https://www.linkedin.com/in/huzaifa"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/yourusername"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white"
          >
            GitHub
          </a>
          <a
            href="mailto:huzaifa.email@example.com"
            className="text-gray-400 hover:text-white"
          >
            Email
          </a>
        </div>

        {/* Right Section: Copyright */}
        <div className="text-center lg:text-right">
          <p className="text-gray-400">© 2025 Huzaifa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
