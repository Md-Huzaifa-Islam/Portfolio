"use client";
import axios from "axios";
import React from "react";

export default function ContactForm() {
  const handleSendMessage = (e) => {
    e.preventDefault();
    console.log(e.target);
    const formData = new FormData(e.target);

    // Convert FormData to a plain object
    const formObject = Object.fromEntries(formData.entries());

    axios
      .post("http://localhost:5000/sendemail", formObject, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((res) => console.log(res));
  };
  return (
    <div className="mx-auto grid w-full gap-8 rounded-lg border-2 border-white p-10 shadow-lg shadow-btnColor-0 sm:max-w-md md:max-w-lg lg:mx-0 lg:max-w-sm">
      <p className="text-center text-2xl font-semibold">Send me a message</p>
      <form className="grid gap-4" onSubmit={handleSendMessage}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            placeholder="Input your name"
            name="name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            placeholder="email"
            name="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Message</span>
          </label>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Your message"
            name="message"
            required
          ></textarea>
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-btnColor-0 text-base font-medium text-white hover:bg-huzaifa-0 hover:text-mainTheme-0">
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
