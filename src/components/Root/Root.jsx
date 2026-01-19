import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductiveApps from "../ProductiveApps/ProductiveApps";

const Root = () => {
  return (
    <div>

      <header className="bg-white">
        <Navbar></Navbar>
      </header>

      <div className="">
        <Outlet></Outlet>
      </div>


      <Footer></Footer>
    </div>
  );
};

export default Root;
