import React from "react";
import { CiSearch } from "react-icons/ci";
import bannerImg

const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-[#FFE6FD]/80 to-[#E0F8F5]/80 h-100">
      <h1 className="text-[#001931]/90 text-5xl font-bold text-center pt-15">
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
      <p className="font-inter font-normal text-xl text-[#627382] text-center mt-6">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>

      <div className="flex justify-center mt-8">
        <div className="join">
          <input
            type="text"
            placeholder="Search for your products..."
            className="input bg-white rounded-l-full w-96 border-0 outline-none join-item"
          />

          <button className="btn join-item rounded-r-full bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">
            <CiSearch className="text-xl" />
          </button>
        </div>
      </div>
      <div className="items-center flex justify-center">
        <div className="flex gap-2 mt-8">
          <button className="btn bg-gradient-to-r from-[#632EE3]/90 to-[#9F62F2]/90 text-[#FFFFFF]">
            Watch All Products
          </button>
          <button className="btn bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Post an Product
          </button>
        </div>
        {/* background image */}
        <div>

        </div>
      </div>
    </div>
  );
};

export default Banner;
