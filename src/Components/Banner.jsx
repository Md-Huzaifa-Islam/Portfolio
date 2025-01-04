import BannerBorder from "@/client/BannerBorder";
import TextChanger from "@/client/TextChanger";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Banner() {
  return (
    <div className="grid grid-cols-2 items-center justify-between gap-20 px-5 pt-24 md:container md:mx-auto">
      {/* text part  */}
      <div className="w-10/12">
        <p className="text-4xl/snug font-semibold">
          Hello, I am <br />
          <span className="text-btnColor-0 text-5xl/snug">
            <TextChanger />
          </span>
        </p>

        <p className="mb-6 mt-4">
          I'm a full stack developer who loves turning ideas into reality,
          utilizing the MERN stack and the latest frontend technologies.
        </p>
        <div className="flex max-w-xs items-center justify-between">
          <Link
            target="_blank"
            href={
              "https://docs.google.com/document/d/1Iqb59QkhLh6iaYoGPNEUeADYKo1pPLcGryaupCzZGh0/edit?tab=t.0"
            }
            className="bg-btnColor-0 hover:bg-huzaifa-0 hover:text-mainTheme-0 btn text-base font-medium text-white"
          >
            Download Resume
          </Link>
          <ul className="flex items-center gap-4 text-3xl">
            <li className="text-btnColor-0 hover:text-huzaifa-0">
              <FaLinkedin />
            </li>
            <li className="text-btnColor-0 hover:text-huzaifa-0">
              <FaGithub />
            </li>
            <li className="text-btnColor-0 hover:text-huzaifa-0">
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
