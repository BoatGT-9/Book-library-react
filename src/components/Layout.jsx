import React from "react";
import { Outlet, Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "./footer";
// import AuthProvider from "./service/auth.service.js";

const Layout = () => {
  return (
    <div
      className="content">
      <Navbar />
      <div className="App"></div>
      <Outlet />
      {/* <Footer /> */}
    </div>
  );
};

export default Layout;
