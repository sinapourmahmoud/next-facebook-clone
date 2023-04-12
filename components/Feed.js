import React from "react";
import Stories from "./Stories";

const Feed = () => {
  return (
    <div className="flex-grow mt-4 ">
      <div className="mx-auto md:max-w-lg lg:max-w-2xl ">
        <Stories />
      </div>
    </div>
  );
};

export default Feed;
