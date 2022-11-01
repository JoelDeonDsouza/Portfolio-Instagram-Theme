import React from "react";

// images
import Logo from "../../Assets/images/logo.png";
import Profile from "../../Assets/images/profile.png";

// pdf
import resume from "../../Assets/Data/resume.pdf";

const Nav = () => {
  return (
    <div
      className="border-b shadow-sm  sticky top-0 z-10"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="flex justify-between items-center h-16 px-2 max-w-5xl mx-auto">
        {/* Logo */}
        <div className="flex">
          <div className="w-28 h-full flex">
            <img src={Logo} alt="logo" />
          </div>
        </div>
        {/* Search */}
        <div className="hidden w-72 sm:flex relative mx-4">
          <div className="absolute flex item-center w-0.5 h-full mt-1.5 ml-2">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            type="text"
            placeholder="Search"
            className="h-9 width-full rounded-md pl-8 bg-[#EDEDED] outline-0"
          />
        </div>
        {/* icons */}
        <div className="flex space-x-5">
          <div className="btn hidden sm:flex">
            <a href="/">
              <span
                style={{ color: "#FF1E1E" }}
                className="material-symbols-outlined"
              >
                home
              </span>
            </a>
          </div>
          <div className="btn hidden sm:flex">
            <a href="https://github.com/JoelDeonDsouza?tab=repositories">
              <span className="material-symbols-outlined">dashboard</span>
            </a>
          </div>
          <div className="btn hidden sm:flex">
            <a href="https://github.com/JoelDeonDsouza">
              <span className="material-symbols-outlined">code</span>
            </a>
          </div>
          <div className="btn hidden sm:flex">
            <a href="mailto:jdeondsouza@gmail.com">
              <span className="material-symbols-outlined">alternate_email</span>
            </a>
          </div>
          <div className="btn">
            <a href={resume} download>
              <span class="material-symbols-outlined">download</span>
            </a>
          </div>
          {/* profile */}
          <div>
            <div className="btn">
              <img src={Profile} className="rounded-full" alt="profile" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;
