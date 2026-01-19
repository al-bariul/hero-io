import React from "react";
import { Link } from "react-router";
import playStroe from "../../assets/play_store.png";
import appStore from "../../assets/app_store.png";
import HeroImg from "../../assets/hero.png";

const ProductiveApps = () => {
  return (
    <div>
      <div className="max-w-[1200px] mx-auto">
        <div className="header pt-10">
          <h1 className="text-[#001931] text-center text-7xl font-bold">
            We Build <br />{" "}
            <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              Productive
            </span>{" "}
            Apps
          </h1>
        </div>

        <div className="body">
          <p className="text-[#627382] text-center pt-5 text-xl">
            At HERO.IO , we craft innovative apps designed to make everyday life
            simpler, smarter, and more exciting.Our goal is to turn your ideas
            into digital experiences that truly make an impact.
          </p>
          <div className="store-button text-black font-semibold flex items-center justify-center mt-8">
            <Link to={"https://play.google.com/store/games?hl=en"}>
              <div
                className="google-play flex border-2
             border-[#84808029] px-3 py-1 rounded-sm items-center "
              >
                <img src={playStroe} alt="" />
                <p className="ml-3">Google Play</p>
              </div>
            </Link>
            <Link to={"https://www.apple.com/app-store/"}>
              <div
                className="app-store ml-10 flex  border-2
             border-[#84808029] px-3 py-1 rounded-sm items-center"
              >
                <img src={appStore} alt="" />
                <p className="ml-3">App Store</p>
              </div>
            </Link>
          </div>
        </div>

        <div className="mt-5 image flex items-center justify-center">
          <img src={HeroImg} alt="" />
        </div>
      </div>

      <div className="footer bg-linear-to-r from-[#632EE3] to-[#9F62F2]">
        <div className="w-[80vw] mx-auto pb-14">
          <h2
            className="text-5xl font-semibold
          mt-14 mb-10 w-full text-center"
          >
            Trusted by Millions, Built for You
          </h2>
          <div className="grid grid-cols-3 gap-x-10 text-center w-full">
            <div className="total-downloads">
              <p>Total Downloads</p>
              <p className="text-5xl mt-2 mb-2 font-bold">29.6M</p>
              <p>21% More Than Last Month</p>
            </div>
            <div className="total-reviews">
              <p>Total Reviews</p>
              <p className="text-5xl mt-2 mb-2 font-bold">906K</p>
              <p>46% more than last month</p>
            </div>
            <div className="active-apps">
              <p>Active Apps</p>
              <p className="text-5xl mt-2 mb-2 font-bold">132+</p>
              <p>31 more will Launch</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductiveApps;
