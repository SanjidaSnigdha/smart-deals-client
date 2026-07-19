import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";
import Home from "../components/Home/Home";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Home>
        <Ba
      </Home>
      <Outlet></Outlet>
    </div>
  );
};

export default RootLayout;
