import React from "react";
import { Link, Outlet } from "react-router-dom";
import "../App.css";
import Navbar from "../pages/navbar/navbar";
const Layout = () => {
  const location = window.location;
  const logOut = () => {
    localStorage.clear();
    location.href = "/auth/login";
  };
  return (
    <>
      <Navbar />
      <h1>Dashboard</h1>
      <nav className="nav"></nav>
      <Outlet />
      <button onClick={logOut}>Logout</button>
    </>
  );
};

export default Layout;
