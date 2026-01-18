import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ProductiveApps from "../ProductiveApps/ProductiveApps";

const Root = () => {
  return (
    <div>
      {/* Header */}
      <header className="bg-white">
        <Navbar></Navbar>
      </header>
      {/* <main className="bg-[#f8f2f2]">
        <ProductiveApps></ProductiveApps>
      </main> */}

      {/* Children */}
      {/* <div className="max-w-[1200px] mx-auto"> */}
      <div className="">
        <Outlet></Outlet>
      </div>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
};

export default Root;
