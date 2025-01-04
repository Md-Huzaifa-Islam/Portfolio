"use client";
import React from "react";
import about3 from "../../public/animations/about3.json";
import dynamic from "next/dynamic";
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function Animation3() {
  return <Lottie animationData={about3} />;
}
