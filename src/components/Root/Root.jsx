import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

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
      <footer></footer>
    </div>
  );
};

export default Root;
