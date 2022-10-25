import React from "react";

// components
import Stories from "../Stories";
import Posts from "../Posts";
import NewProfile from "../NewProfile";
import Suggestions from "../Suggestions";

const Feed = () => {
  return (
    <div className="flex max-w-[790px] mt-4 mx-auto lg:max-w-[854px]">
      <section className="max-w-[470px] mx-auto w-[100vw]">
        {/* feed */}
        <Stories />
        {/* post */}
        <Posts />
      </section>
      <section className="max-w-[320px] w-full mx-8 hidden lg:block">
        {/* profiles */}
        <NewProfile />
        {/* suggestions */}
        <Suggestions />
      </section>
    </div>
  );
};

export default Feed;
