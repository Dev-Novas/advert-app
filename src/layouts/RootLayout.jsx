import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <div className="font-play-au">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default RootLayout;
