import React, { use } from "react";
import HomePageUI from "../HomePageUI/HomePageUI";
import { Link } from "react-router";

const Home = ({ appPromise }) => {
  const appData = use(appPromise);
  const homePageEightData = appData.slice(0, 8);
  //   console.log(homePageEightData);
  return (
    <div>
      <h1>Home</h1>
      <div className="grid grid-cols-4 gap-x-7 gap-y-3">
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
