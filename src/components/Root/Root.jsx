import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

const Root = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      {/* Header */}
      <header>
        <Navbar></Navbar>
      </header>

      {/* Children */}
      <Outlet></Outlet>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
