import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebook, FaGithub, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import Link from "next/link";
export default function ContactInfo() {
  return (
    <div className="rounded-lg border-2 border-white p-10 shadow-lg shadow-white">
      {/* contact info  */}
      <div>
        {/* head  */}
        <p className="pb-6 text-center text-2xl font-medium">Contact Info</p>
        <ul className="flex flex-col gap-5">
          <li>
            <Link
              className="flex items-center gap-3"
              href={`mailto:huzaifaislamrakib@gmail.com`}
            >
              <MdEmail size={25} />

              <p>HuzaifaIslamRakib@gmail.com</p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3"
              href={`tel:+8801915131099`}
            >
              <FaPhoneAlt size={25} />
              <p>+8801915131099 </p>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center gap-3"
              href="https://maps.app.goo.gl/Uem61dQwP9PmfdYs8"
              target="_blank"
            >
              <FaLocationDot size={25} />
              <p>Chittagong, Bangladesh</p>
            </Link>
          </li>
        </ul>
      </div>

      {/* social info  */}
      <div>
        {/* head  */}
        <p className="mt-10 pb-6 text-center text-2xl font-medium">
          Social Links
        </p>
        <ul className="flex items-center justify-center gap-5 text-3xl">
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
  );
}
