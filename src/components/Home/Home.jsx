import React, { use } from "react";
import HomePageUI from "../HomePageUI/HomePageUI";

const Home = ({ appPromise }) => {
  const appData = use(appPromise);
  const homePageEightData = appData.slice(0, 8);
  console.log(homePageEightData);
  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-4 gap-x-7 gap-y-3">
        {homePageEightData.map((homeData) => (
          <HomePageUI homeData={homeData}></HomePageUI>
        ))}
      </div>
      <div>
        <button>Show All</button>
      </div>
    </div>
  );
};

export default Home;
