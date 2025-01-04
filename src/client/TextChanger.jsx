"use client";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
export default function TextChanger() {
  return (
    <>
      <Typewriter
        cursor
        cursorBlinking
        delaySpeed={1000}
        deleteSpeed={55}
        loop={0}
        typeSpeed={75}
        words={[
          "Md. Huzaifa Islam",
          "A Full Stack Developer",
          "A Frontend Developer",
        ]}
      />
    </>
  );
}
