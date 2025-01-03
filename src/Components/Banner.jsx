import Image from "next/image";
import React from "react";

export default function Banner() {
  return (
    <div className="grid grid-cols-2 items-center justify-between">
      {/* text part  */}
      <div>
        <p>text part</p>
      </div>
      {/* image part  */}
      <div className="justify-self-center">
        <p>image</p>
        {/* <Image /> */}
      </div>
    </div>
  );
}
