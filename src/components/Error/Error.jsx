import React from "react";
import ErrorImg from "../../assets/error-404.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Link } from "react-router";
const Error = () => {
  return (
    <div>
      <div className=" bg-white">
        <Navbar></Navbar>
      </div>
      <div className="bg-[#f8f2f2] text-black flex flex-col items-center justify-center">
        <img src={ErrorImg} alt="" />
        <div className="text-center mt-10">
          <h1 className="text-4xl font-bold mb-5">Oops, page not found!</h1>
          <p className="text-[#627382] text-[18px] mb-5">
            The page you are looking for is not available.
          </p>
          <div className="mb-20">
            <Link
              className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] mr-5 px-10 py-2 rounded-md text-white font-bold"
              to={"/"}
            >
              Go Back
            </Link>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
