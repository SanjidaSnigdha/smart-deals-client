import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";

const RootLayout = () => {
  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#632EE3]/40 to-[#9F62F2]/">
      <Navbar></Navbar>
      <Outlet>
        <Home></Home>
      </Outlet>
    </div>
  );
};

export default RootLayout;
