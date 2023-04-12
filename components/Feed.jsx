import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Post from "./Post";
const Feed = () => {
  return (
    <div className="flex-grow mt-4 overflow-y-auto pb-28 h-screen">
      <div className="mx-auto md:max-w-lg lg:max-w-2xl ">
        <Stories />
        <InputBox />
        <Post />
      </div>
    </div>
  );
};

export default Feed;
