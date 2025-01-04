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
    <div className="card w-full max-w-sm shrink-0 bg-base-100 shadow-2xl">
      <form className="card-body" onSubmit={handleSendMessage}>
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
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  );
}
