import BannerBorder from "@/client/BannerBorder";
import TextChanger from "@/client/TextChanger";
import Image from "next/image";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Banner() {
  return (
    <div className="grid grid-cols-2 items-center justify-between gap-20 px-5 md:container md:mx-auto">
      {/* text part  */}
      <div className="w-10/12">
        <p className="text-5xl/snug font-semibold">
          Hello, I am <br />
          <TextChanger />
        </p>

        <p className="mb-6 mt-4">
          I'm a full stack developer who loves turning ideas into reality,
          utilizing the MERN stack and the latest frontend technologies.
        </p>
        <div className="flex max-w-xs items-center justify-between">
          <button className="btn btn-ghost">Download Resume</button>
          <ul className="flex items-center gap-5 text-3xl">
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

      <div className="relative size-[420px] justify-self-center">
        <BannerBorder />
        <div className="absolute left-1/2 top-1/2 flex size-[400px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white">
          <Image
            src={"/image.png"}
            width={400}
            alt="profile pic"
            height={400}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
