"use client";
import React from "react";
import about1 from "../../public/animations/about1.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Animation1() {
  return <Lottie animationData={about1} />;
}
