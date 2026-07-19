import React from "react";

const Banner = () => {
  return (
    <div>
      <div>
        <h1 className="btn btn-ghost text-3xl text-[#001931]/90 text-5xl w-200 h-40 mx-auto">
          Deal Your
          <span className="bg-gradient-to-r from-[#632EE3]/90 to-[#9F62F2]/90 bg-clip-text text-transparent">
            Products <br />
          </span>{" "}
          In A{" "}
          <span className="bg-gradient-to-r from-[#632EE3]/90 to-[#9F62F2]/90 bg-clip-text text-transparent">
            Smart
          </span>{" "}
          Way!
        </h1>
      </div>
    </div>
  );
};

export default Banner;
