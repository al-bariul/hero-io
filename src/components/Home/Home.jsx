import React, { use } from "react";
import HomePageUI from "../HomePageUI/HomePageUI";
import { Link } from "react-router";
import ProductiveApps from "../ProductiveApps/ProductiveApps";

const Home = ({ appPromise }) => {
  const appData = use(appPromise);
  const homePageEightData = appData.slice(0, 8);
  //   console.log(homePageEightData);
  return (
    <div>
      {/* <h1>Home</h1> */}
      <main className="bg-[#f8f2f2]">
        <ProductiveApps></ProductiveApps>
      </main>

      <div className="grid grid-cols-4 gap-x-7 gap-y-3 max-w-[1200px] mx-auto">
        {homePageEightData.map((homeData) => (
          <HomePageUI key={homeData.id} homeData={homeData}></HomePageUI>
        ))}
      </div>
      <div>
        <Link to={"/apps"}>Show All</Link>
      </div>
    </div>
  );
};

export default Home;
