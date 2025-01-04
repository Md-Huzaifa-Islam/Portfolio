"use client";
import React from "react";
import { Tooltip } from "react-tooltip";

export default function Skill({ skill }) {
  return (
    <div className="flex w-max flex-col items-center justify-center rounded-lg border border-white bg-white bg-opacity-50 p-4 shadow-lg shadow-white">
      <div
        className="text-5xl"
        data-tooltip-id="my-tooltip"
        data-tooltip-content={skill.name}
        data-tooltip-place="top"
      >
        {skill.icon}
      </div>
      <Tooltip id="my-tooltip" />
    </div>
  );
}
