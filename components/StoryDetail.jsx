import React from "react";
import Image from "next/image";

const StoryDetail = ({ src, name, profile }) => {
  return (
    <div className="relative w-24   h-24 md:w-28 md:h-28  lg:h-52 lg:w-32   transition-all duration-300 cursor-pointer group hover:scale-105">
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-5 left-3"
        src={profile}
        alt={name}
        width={40}
        height={40}
        layout="fixed"
        objectFit="cover"
      ></Image>
      <Image
        src={src}
        alt={`image-${name}`}
        layout="fill"
        className="w-full h-full rounded-full lg:rounded-3xl brightness-75 transition-all duration-300  group-hover:brightness-100"
      ></Image>
    </div>
  );
};

export default StoryDetail;
