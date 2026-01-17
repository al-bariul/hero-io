import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";

const Root = () => {
  return (
    <div>
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
