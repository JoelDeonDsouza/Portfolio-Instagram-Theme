import React from "react";

// image import
import NewProfileImg from "../../Assets/images/profile.png";

const NewProfile = () => {
  return (
    <div className="flex justify-between mt-8">
      <div className="flex items-center">
        <div className="w-16 h-16">
          <img src={NewProfileImg} alt="profile" className="rounded-full" />
        </div>
        <p className="pl-3 text-sm font-semibold">Joel Deon Dsouza</p>
      </div>
      <button style={{ color: "#0095f6", fontSize: "14px", fontWeight: "600" }}>
        Switch
      </button>
    </div>
  );
};

export default NewProfile;
