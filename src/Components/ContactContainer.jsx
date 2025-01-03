import React from "react";

export default function ContactContainer() {
  return (
    <div className="bg-gray-100 px-6 py-12 text-gray-800 md:px-20">
      <div className="mb-8 text-center">
        <h1 className="mb-4 text-4xl font-bold">Contact Me</h1>
        <p className="text-lg text-gray-600">Feel free to send me a message!</p>
      </div>

      <div className="flex flex-col justify-between gap-12 lg:flex-row">
        {/* Left Box: Message Form */}
        <div className="w-full rounded-lg bg-white p-6 shadow-lg lg:w-1/2">
          <h2 className="mb-4 text-2xl font-semibold">Send Me a Message</h2>
          <form>
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Your Name"
                className="w-full rounded-md border border-gray-300 p-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Email"
                className="w-full rounded-md border border-gray-300 p-3"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Your Message"
                rows="4"
                className="w-full rounded-md border border-gray-300 p-3"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full rounded-md bg-blue-500 py-3 text-white hover:bg-blue-600"
            >
              Send Message
            </button>
          </form>
        </div>

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
