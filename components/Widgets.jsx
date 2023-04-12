import React from "react";
import { DotsHorizontalIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { SearchIcon } from "@heroicons/react/outline";
import Contact from "./Contact";
import { contacts } from "@/utils/data";
const Widgets = () => {
  return (
    <div className="hidden lg:flex flex-col gap-5 w-60  h-screen mt-3">
      <div className="flex items-center  gap-2">
        <p className="text-gray-700 text-lg font-semibold flex-1">Contacts</p>
        <SearchIcon className="text-gray-500 h-5 cursor-pointer" />
        <VideoCameraIcon className="text-gray-500 h-5 cursor-pointer" />
        <DotsHorizontalIcon className="text-gray-500 h-5 cursor-pointer" />
      </div>
      <div className="flex flex-col gap-3">
        {contacts.map((item) => (
          <Contact key={item.src} name={item.name} src={item.src} />
        ))}
      </div>
    </div>
  );
};

export default Widgets;
