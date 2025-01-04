"use client";
import React from "react";
import about2 from "../../public/animations/about2.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Animation2() {
  return <Lottie animationData={about2} />;
}
