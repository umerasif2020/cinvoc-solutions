import React from "react";

const Test = () => {
  return (
    <div>
      <div className="lg:w-11/12 2xl:w-9/12 bg-[#F37024] h-[105rem] absolute rounded-tr-full rounded-br-full">
        <div className="ml-28 text-white mt-11">
          <div className="text-5xl font-extrabold">Our Services</div>
          <div className="mt-4 text-5xl max-w-2xl">
            Here Is Our Services We Boost Up Your Business!
          </div>
          <button className="bg-black text-white w-44 h-16 rounded mt-10 text-2xl font-extrabold">
            Explore More
          </button>
        </div>
      </div>
      <div className="relative">
        <div className="w-28 h-14 rounded-bl-full rounded-br-full bg-gray-200 absolute  right-48"></div>
        <div className="w-96 h-96 rounded-tr-full bg-black absolute  right-0 top-48"></div>
        Our Services
      </div>
    </div>
  );
};

export default Test;
