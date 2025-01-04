"use client";
import React from "react";
import education from "../../public/animations/education.json";
import Lottie from "lottie-react";

export default function EducationAnimation() {
  return <Lottie animationData={education} />;
}
