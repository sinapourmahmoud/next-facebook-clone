import { ChatAltIcon, ShareIcon, ThumbUpIcon } from "@heroicons/react/solid";
import Image from "next/image";
import React from "react";
const Post = () => {
  return (
    <div className="bg-white shadow-xl rounded-3xl p-3">
      <div className="flex items-center gap-2">
        <img
          src="https://links.papareact.com/snf"
          alt="profile"
          className="w-11 h-11 rounded-full object-cover"
        />
        <div>
          <p className="text-base font-bold">Sina</p>
          <p className="text-gray-400 text-sm font-light">51df51f5d1fd5f1</p>
        </div>
      </div>
      <p className="text-lg font-semibold mt-4 mb-2 leading-7">
        lllllllllllllllllllsa
      </p>
      <div className="w-full h-52 md:h-96 relative rounded-lg">
        <Image
          src="https://links.papareact.com/snf"
          alt="post"
          objectFit="cover"
          className="rounded-lg"
          layout="fill"
        />
      </div>
      <div className="flex justify-between items-center rounded-b-2xl  text-gray-400 border-t mt-4 ">
        <div className="inputIcon  rounded-none rounded-bl-2xl">
          <ThumbUpIcon className="h-6" />
          <p className="text-xs sm:text-base">Like</p>
        </div>
        <div className="inputIcon rounded-none">
          <ChatAltIcon className="h-6" />
          <p className="text-xs sm:text-base">Comment</p>
        </div>
        <div className="inputIcon rounded-none rounded-br-2xl">
          <ShareIcon className="h-6" />
          <p className="text-xs sm:text-base">Share</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
