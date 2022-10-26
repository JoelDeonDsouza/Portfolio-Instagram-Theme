import React, { useState, useEffect } from "react";

// data
import DataPosts from "../../Assets/Data/posts.js";

// import card components
import Post from "./Post";

const Posts = () => {
  const [data, setData] = useState();

  useEffect(() => {
    return () => {
      setData(DataPosts);
    };
  }, []);

  return (
    <div className="mt-1 mx-1">
      {data?.map((item) => (
        <Post
          key={item.id}
          name={item.userName}
          img={item.postImg}
          tag={item.caption}
          title={item.title}
        />
      ))}
    </div>
  );
};

export default Posts;
