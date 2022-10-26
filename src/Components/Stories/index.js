import React, { useState, useEffect } from "react";

// data
import DataStory from "../../Assets/Data/story.js";

// components
import Story from "./Story";

const Stories = () => {
  const [data, setData] = useState();

  useEffect(() => {
    return () => {
      setData(DataStory);
    };
  }, []);

  return (
    <div>
      <div className="flex space-x-4 bg-white border overflow-x-scroll mx-1 rounded-lg scrollbar-thin scrollbar-thumb-gray-300 p-5">
        {data?.map((item) => (
          <Story
            key={item.id}
            storyText={item.text}
            storyImg={item.img}
            storyLink={item.href}
          />
        ))}
      </div>
    </div>
  );
};

export default Stories;
