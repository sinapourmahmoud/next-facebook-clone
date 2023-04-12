import React from "react";
import Image from "next/image";
const SidebarRow = ({ title, src, icon }) => {
  return (
    <div className="flex items-center gap-3 cursor-pointer transition-all duration-200 p-2 rounded-lg hover:bg-blue-100 ">
      {src && (
        <Image
          src={src}
          width={30}
          height={30}
          alt={"profile"}
          className="rounded-full"
        />
      )}
      {icon ?? null}
      <p className="text-base font-medium  hidden xl:inline">{title}</p>
    </div>
  );
};

export default SidebarRow;
