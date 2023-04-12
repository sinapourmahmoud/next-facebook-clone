import Image from "next/image";
import React from "react";
import { useSession } from "next-auth/react";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
const inputIcon =
  "flex items-center gap-2 tranisation-all duration-200 hover:bg-gray-100 p-2 rounded-xl cursor-pointer";
const InputBox = () => {
  let data = useSession();
  return (
    <div className="bg-white shadow-lg py-3 px-2 flex flex-col gap-5 my-4 rounded-xl">
      <form>
        <div className="w-full flex items-center gap-5">
          <Image
            src={data?.data?.user?.image}
            className="rounded-full "
            width={40}
            alt="user-profile"
            height={40}
            objectFit="contain"
          ></Image>
          <input
            type="text"
            className="bg-gray-200 w-full h-19 rounded-md p-2 outline-none border-0 font-normal text-base"
            placeholder="Add your post Caption"
          />
        </div>
      </form>
      <div className="flex justify-between p-3 ">
        <div className={inputIcon}>
          <VideoCameraIcon className="h-7 text-red-500"></VideoCameraIcon>
          <p className="text-xs sm:text-sm xl:text-base font-normal xl:font-semibold">
            Live Video
          </p>
        </div>
        <div className={inputIcon}>
          <CameraIcon className="h-7 text-green-400"></CameraIcon>
          <p className="text-xs sm:text-sm xl:text-base font-normal xl:font-semibold">
            Photo/Video
          </p>
          <input type="file" hidden />
        </div>
        <div className={inputIcon}>
          <EmojiHappyIcon className="h-7 text-yellow-500"></EmojiHappyIcon>
          <p className="text-xs sm:text-sm xl:text-base font-normal xl:font-semibold">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
};

export default InputBox;
