import React from "react";
import Navbar from "../components/Navbar/Navbar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet>
        <Ho
      </Outlet>
    </div>
  );
};

export default RootLayout;
