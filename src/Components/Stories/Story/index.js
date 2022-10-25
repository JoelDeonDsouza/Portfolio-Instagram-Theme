import React from "react";

const Story = ({ storyText, storyImg, storyLink }) => {
  return (
    <div>
      <a href={storyLink}>
        {/* ! React Hydration Error */}
        <img
          src={storyImg}
          alt="img"
          layout="fill"
          className="rounded-full p-[1.5px] border-[3px] border-red-500"
          width={70}
          height={70}
        />
        <p className="text-xs w-[60px] truncate text-center">{storyText}</p>
      </a>
    </div>
  );
};

export default Story;
