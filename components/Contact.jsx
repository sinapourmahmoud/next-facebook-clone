import Image from "next/image";
import React from "react";

const Contact = ({ name, src }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer">
      <div className="relative w-10 h-10 rounded-full">
        <Image
          src={src}
          alt="profile"
          layout="fill"
          objectFit="cover"
          className="rounded-full"
        />
        <div className="absolute bottom-0.5 z-30 right-0.5 w-3 h-3 bg-green-500 rounded-full"></div>
      </div>
      <p className="font-medium text-base">{name}</p>
    </div>
  );
};

export default Contact;
