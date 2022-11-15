import React, { Fragment } from "react";
import banner from "./../images/banner.png";

const Banner = () => {
  return (
    <Fragment>
      <img src={banner} className="max-w-full max-h-[59rem]" alt="Banner"></img>
    </Fragment>
  );
};

export default Banner;
