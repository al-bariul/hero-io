import React from "react";
import { Link } from "react-router";
import playStroe from "../../assets/play_store.png";
import appStore from "../../assets/app_store.png";

const ProductiveApps = () => {
  return (
    <div className="max-w-[1200px] mx-auto">
      <div className="header bg-red-500 pt-10">
        <h1 className="text-[#001931] text-center text-7xl font-bold">
          We Build <br /> <span>Productive</span> Apps
        </h1>
      </div>
      <div className="body">
        <p className="text-[#627382] text-center pt-5 text-xl">
          At HERO.IO , we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>
        <div className="store-button text-black font-semibold flex items-center justify-center mt-8">
          <Link to={""}>
            <div className="google-play flex border-1 px-3 py-1 rounded-sm">
              <img src={playStroe} alt="" />
              <p>Google Play</p>
            </div>
          </Link>
          <Link to={""}>
            <div className="app-store flex ml-10">
              <img src={appStore} alt="" />
              <p>App Store</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductiveApps;
