"use client";
import React from "react";
import { motion } from "motion/react";

export default function BannerBorder() {
  return (
    <>
      {/* <motion.div
      animate={{ rotate: 360 }}
      className="absolute left-1/2 top-1/2 -z-10 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-black "
    ></motion.div>
     */}
      <motion.div
        className="absolute inset-0 rounded-full bg-gradient-to-r from-red-500 via-green-500 to-blue-500"
        animate={{
          rotate: 360, // Rotate continuously
        }}
        transition={{
          repeat: Infinity, // Repeat animation indefinitely
          duration: 5, // Duration for a full rotation
          ease: "linear", // Smooth linear rotation
        }}
      />
    </>
  );
}
