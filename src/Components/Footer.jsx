import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 py-8 text-white">
      <div className="container mx-auto flex flex-col items-center justify-between px-6 lg:flex-row">
        {/* Left Section: Logo or Name */}
        <div className="mb-4 text-center lg:mb-0 lg:text-left">
          <Image src={"/icon.png"} width={30} height={20} alt="logo"></Image>
          <p className="text-gray-400">Full Stack Developer</p>
        </div>

        {/* Center Section: Links */}
        <ul className="flex items-center gap-4 text-3xl">
          <li className="text-btnColor-0 hover:text-huzaifa-0">
            <Link
              href={"https://www.linkedin.com/in/huzaifaislam/"}
              target="_blank"
            >
              <FaLinkedin />
            </Link>
          </li>
          <li className="text-btnColor-0 hover:text-huzaifa-0">
            <Link href={"https://github.com/Md-Huzaifa-Islam"} target="blank">
              <FaGithub />
            </Link>
          </li>
          <li className="text-btnColor-0 hover:text-huzaifa-0">
            <Link
              href={"https://www.facebook.com/Huzaifaislamrokib"}
              target="_blank"
            >
              <FaFacebook />
            </Link>
          </li>
        </ul>

        {/* Right Section: Copyright */}
        <div className="text-center lg:text-right">
          <p className="text-gray-400">© 2025 Huzaifa. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
