"use client";
import React from "react";
import education from "../../public/animations/education.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function EducationAnimation() {
  return <Lottie animationData={education} />;
}
