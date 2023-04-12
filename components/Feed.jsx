import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
const Feed = () => {
  return (
    <div className="flex-grow mt-4 ">
      <div className="mx-auto md:max-w-lg lg:max-w-2xl ">
        <Stories />
        <InputBox />
      </div>
    </div>
  );
};

export default Feed;
