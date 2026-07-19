import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";
import Banner from "../components/Banner/Banner";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home>
      </Home>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
