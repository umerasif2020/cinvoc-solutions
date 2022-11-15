import React from "react";
import cinvoc from "./../images/cinvoc.svg";
import call from "./../images/call.png";
import search from "./../images/search.svg";

const NavBar = () => {
  return (
    <div className="mx-28 h-48 flex">
      <div className="flex flex-row items-center xl:space-x-11 2xl:space-x-72">
        <div>
          <img
            src={cinvoc}
            alt="cinvoc solutions"
            width={"123"}
            height={"110"}
          />
        </div>
        <div className="text-2xl flex flex-row space-x-2 font-black">
          <div className="px-12 rounded-full hover:bg-orange-200">Home</div>
          <div className="px-12 rounded-full hover:bg-orange-200">About</div>
          <div class="px-12 rounded-full dropdown hover:bg-orange-200">
            <button class="flex items-center justify-center">
              Services <pre> </pre>
              <span class="arrow down"></span>
            </button>
            <div class="dropdown-content">
              <a href="#">Link 1</a>
              <a href="#">Link 2</a>
              <a href="#">Link 3</a>
            </div>
          </div>
          <div className="px-12 rounded-full hover:bg-orange-200">
            Portfolio
          </div>
          <div className="px-12 rounded-full hover:bg-orange-200">Blog</div>
        </div>
        <div className="flex items-center space-x-16">
          <div>
            <img src={search} alt="search" width={"35"} height={"35"} />
          </div>
          <div>
            <img src={call} alt="call" width={"70"} height={"70"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
