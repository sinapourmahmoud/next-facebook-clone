import React from "react";

const HeaderLogo = ({ icon }) => {
  return (
    <div className="flex items-center justify-center cursor-pointer transition-all duration-300 p-2 rounded-xl group hover:bg-blue-100 border-b-2 border-transparent active:border-blue-300">
      {icon}
    </div>
  );
};

export default HeaderLogo;
