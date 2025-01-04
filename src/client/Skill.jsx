"use client";
import React from "react";
import { Tooltip } from "react-tooltip";

export default function Skill({ skill }) {
  return (
    <div className="hover:shadow-btnColor-0 flex w-max flex-col items-center justify-center rounded-lg border border-white p-4 hover:shadow-lg">
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
