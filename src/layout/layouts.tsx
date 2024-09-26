import React from "react";
import { Outlet } from "react-router-dom";
import "../App.css";
import Navbar from "../pages/navbar/navbar";
const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};

export default Layout;
