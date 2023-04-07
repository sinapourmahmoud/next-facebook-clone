import React from "react";
import Image from "next/image";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";

//component
import HeaderLogo from "./HeaderLogo";
//var
let optionBarIconStyles = `hidden md:flex items-center cursor-pointer justify-center p-2 bg-gray-200 rounded-lg`;
const Header = () => {
  return (
    <header className="flex sticky top-0 shadow-md gap-2   items-center justify-between py-3 px-4">
      <div className="flex items-center gap-2">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          alt="Logo"
        />
        <div className="bg-gray-100 flex items-center  p-1 rounded-lg">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            type="text"
            className="hidden md:inline-flex outline-none border-0 h-full bg-transparent p-0.5 text-sm"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="flex items-center justify-center flex-grow ">
        <div className="flex items-center gap-3 sm:gap-4 md:gap-6 lg:gap-16">
          <HeaderLogo
            icon={
              <HomeIcon className=" h-5 md:h-6 text-blue-500 group-hover:text-blue-500 transition-all duration-300 lg:h-7" />
            }
          />
          <HeaderLogo
            icon={
              <FlagIcon className=" h-5 md:h-6 text-gray-500 group-hover:text-blue-500 transition-all duration-300 lg:h-7" />
            }
          />
          <HeaderLogo
            icon={
              <PlayIcon className=" h-5 md:h-6 text-gray-500 group-hover:text-blue-500 transition-all duration-300 lg:h-7" />
            }
          />
          <HeaderLogo
            icon={
              <ShoppingCartIcon className=" h-5 md:h-6 text-gray-500 group-hover:text-blue-500 transition-all duration-300 lg:h-7" />
            }
          />

          <HeaderLogo
            icon={
              <UserGroupIcon className=" h-5 md:h-6 text-gray-500 group-hover:text-blue-500 transition-all duration-300 lg:h-7" />
            }
          />
        </div>
      </div>
      <div className="flex items-center gap-2">
        <p className="text-lg font-semibold whitespace-pre-wrap">Sina P</p>
        <div className={optionBarIconStyles}>
          <ViewGridIcon className="h-4" />
        </div>
        <div className={optionBarIconStyles}>
          <BellIcon className="h-4" />
        </div>
        <div className={optionBarIconStyles}>
          <ChatIcon className="h-4" />
        </div>
        <div className={optionBarIconStyles}>
          <ChevronDownIcon className="h-4" />
        </div>
      </div>
    </header>
  );
};

export default Header;
