import React from "react";
import Stories from "./Stories";
import InputBox from "./InputBox";
import Post from "./Post";
const Feed = ({ posts }) => {
  return (
    <div className="flex-grow mt-4 overflow-y-auto scrollbar-hide pb-28 h-screen">
      <div className="mx-auto md:max-w-lg lg:max-w-2xl ">
        <Stories />
        <InputBox />
        <div className="flex flex-col gap-2">
          {posts?.map((post) => (
            <Post
              key={post.id}
              title={post.title}
              postedBy={post.postedBy}
              email={post.email}
              postImage={post.postImage}
              userImage={post.userImage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Feed;
