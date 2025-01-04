import ContactForm from "@/client/ContactForm";
import SectionHeader from "@/shared/SectionHeader";
import React from "react";

export default function ContactContainer() {
  return (
    <div className="px-5 pt-28 md:container md:mx-auto">
      <SectionHeader
        heading={"Contact Me"}
        subHeading={"Feel free to send me a message!"}
      />

      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        {/* Left Box: Message Form */}
        <ContactForm />

        {/* Right Box: Contact Details */}
        <div className="w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/3">
          <h2 className="mb-4 text-2xl font-semibold">Contact Details</h2>
          <p className="mb-4 text-gray-700">
            You can reach out to me through the following:
          </p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <span className="font-semibold text-gray-700">Email: </span>
              <span className="ml-2 text-gray-600">
                huzaifa.email@example.com
              </span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-gray-700">Phone: </span>
              <span className="ml-2 text-gray-600">+880 1234 567 890</span>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-gray-700">LinkedIn: </span>
              <a
                href="https://www.linkedin.com/in/huzaifa"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:underline"
              >
                linkedin.com/in/huzaifa
              </a>
            </li>
            <li className="flex items-center">
              <span className="font-semibold text-gray-700">GitHub: </span>
              <a
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-500 hover:underline"
              >
                github.com/yourusername
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
