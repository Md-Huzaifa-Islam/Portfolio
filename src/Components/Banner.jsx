import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 items-center justify-between">
      {/* text part  */}
      <div>
        <p>Hello, I am Md. Huzaifa Islam</p>
        {/* Frontend Developer
Full Stack Developer
MERN Stack */}
        <p>
          I'm a full stack developer who loves turning ideas into reality,
          utilizing the MERN stack and the latest frontend technologies.
        </p>
        <div className="flex items-center justify-between">
          <button className="btn btn-ghost">Download Resume</button>
          <ul className="flex items-center text-3xl">
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaGithub />
            </li>
            <li>
              <FaFacebook />
            </li>
          </ul>
        </div>
      </div>
      {/* image part  */}
      <div className="justify-self-center">
        {/* <Image /> */}
        <Image src={"/image.png"} width={400} alt="profile pic" height={400} />
      </div>
    </div>
  );
}
