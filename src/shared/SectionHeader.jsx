import React from "react";

export default function SectionHeader({ heading, subHeading }) {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-4 text-4xl font-semibold">{heading}</h1>
      <p className="text-lg">{subHeading}</p>
    </div>
  );
}
