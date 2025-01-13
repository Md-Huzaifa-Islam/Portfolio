import BannerBorder from "@/client/BannerBorder";
import TextChanger from "@/client/TextChanger";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
export default function Banner() {
  return (
    <div className="flex flex-col-reverse items-center justify-between gap-12 px-5 pt-14 md:container md:mx-auto lg:grid lg:grid-cols-2 lg:gap-20 lg:pt-24">
      {/* text part  */}
      <div className="w-10/12">
        <p className="text-3xl/snug font-semibold sm:text-4xl/snug">
          Hello, I am <br />
          <span className="whitespace-nowrap text-4xl/snug text-btnColor-0 sm:text-5xl/snug">
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
            download={true}
            href={
              "https://docs.google.com/document/d/1Iqb59QkhLh6iaYoGPNEUeADYKo1pPLcGryaupCzZGh0/export?format=docx"
            }
            className="btn bg-btnColor-0 text-base font-medium text-white hover:bg-huzaifa-0 hover:text-mainTheme-0"
          >
            Download Resume
          </Link>
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
        </div>
      </div>

      {/* image part  */}

      <div className="relative size-[210px] justify-self-center sm:size-[250px] lg:size-[330px] xl:size-[420px]">
        <BannerBorder />
        <div className="absolute left-1/2 top-1/2 flex size-[200px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white sm:size-[235px] lg:size-[310px] xl:size-[400px]">
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
