import React from "react";
import { stories } from "@/utils/data";
import StoryDetail from "./StoryDetail";
const Stories = () => {
  return (
    <div className="flex   justify-between items-center">
      {stories.map((story) => (
        <StoryDetail
          name={story.name}
          profile={story.profile}
          src={story.src}
          key={story.src}
        />
      ))}
    </div>
  );
};

export default Stories;
