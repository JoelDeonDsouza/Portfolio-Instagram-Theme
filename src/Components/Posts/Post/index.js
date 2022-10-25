import React from "react";

// Image
import profilePhoto from "../../../Assets/images/profile.png";
import heart from "../../../Assets/images/heart.png";
import message from "../../../Assets/images/message.png";
import send from "../../../Assets/images/send.png";

const Post = ({ name, img, tag, title }) => {
  return (
    <div>
      <div className="border rounded-lg my-3">
        <div className="flex items-center p-3">
          <div className="flex items-center w-full">
            <div className="h-8 w-8 mr-3">
              <img src={profilePhoto} alt="profile" className="rounded-full" />
            </div>
            <div>
              <p className="font-semibold text-sm">{name}</p>
              <p
                className="text-sm"
                style={{
                  fontWeight: "800",
                  color: "#EF5B0C",
                  textTransform: "uppercase",
                  fontSize: "13px",
                }}
              >
                {title}
              </p>
            </div>
          </div>
        </div>
        {/* post-img */}
        <div className="">
          <img src={img} alt="postImg" />
        </div>
        {/* post-img */}
        <div className="m-3">
          {/* BTN */}
          <div className="flex space-x-4">
            <div className="btn">
              <img src={heart} alt="heart" />
            </div>
            <div className="btn">
              <img src={message} alt="message" />
            </div>
            <div className="btn">
              <img src={send} alt="send" />
            </div>
          </div>
          {/* BTN */}
          {/* title */}
          <div className="mt-2">
            <p className="customFont">{name}</p>
            <p
              className="mt-1"
              style={{ fontSize: "14px", fontWeight: "500", color: "#3C4048" }}
            >
              {tag}
            </p>
          </div>
          {/* title */}
        </div>
      </div>
    </div>
  );
};

export default Post;
