import React, { use } from "react";
import HomePageUI from "../HomePageUI/HomePageUI";
import { Link } from "react-router";
import ProductiveApps from "../ProductiveApps/ProductiveApps";

const Home = ({ appPromise }) => {
  const appData = use(appPromise);
  const homePageEightData = appData.slice(0, 8);
  //   console.log(homePageEightData);
  return (
    <div className="bg-[#f8f2f2]">
      {/* <h1>Home</h1> */}
      <main className="bg-[#f8f2f2]">
        <ProductiveApps></ProductiveApps>
      </main>

      <div className=" text-black mt-10 mb-10 text-center">
        <h2 className="font-bold text-5xl mb-3">Trending Apps</h2>
        <p className="text-[#627382] text-xl">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div>
        <div className="grid grid-cols-4 gap-3 max-w-[1200px] mx-auto text-black">
          {homePageEightData.map((homeData) => (
            <HomePageUI key={homeData.id} homeData={homeData}></HomePageUI>
          ))}
        </div>
      </div>
      <div className="mt-20 pb-16 text-center">
        <Link
          to={"/apps"}
          className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-7 py-3 font-semibold rounded-md"
        >
          Show All
        </Link>
      </div>
    </div>
  );
};

export default Home;
