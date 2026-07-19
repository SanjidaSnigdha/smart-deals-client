import React from "react";

const Banner = () => {
  return (
    <div className="">
      <h1 className="text-[#001931]/90 text-5xl mt-15 font-bold text-center">
        Deal Your{" "}
        <span className="bg-gradient-to-r from-[#632EE3]/90 to-[#9F62F2]/90 bg-clip-text text-transparent">
          Products <br />
        </span>{" "}
        In A{" "}
        <span className="bg-gradient-to-r from-[#632EE3]/90 to-[#9F62F2]/90 bg-clip-text text-transparent">
          Smart
        </span>{" "}
        Way!
      </h1>
      <p className="font-inter font-normal text">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>
    </div>
  );
};

export default Banner;
