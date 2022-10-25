import React, { useState, useEffect } from "react";

// data
import dataPosts from "../../Assets/Data/posts.json";

// import card components
import Post from "./Post";

const Posts = () => {
  const [data, setData] = useState();

  useEffect(() => {
    return () => {
      setData(dataPosts);
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
