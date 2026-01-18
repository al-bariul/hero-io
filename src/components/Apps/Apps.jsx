import React, { use } from "react";
import SingleAppsData from "../SingleAppsData/SingleAppsData";

const Apps = ({ appPromise }) => {
  const appsData = use(appPromise);
  //   console.log(appsData);
  return (
    <div>
      <h1>Apps</h1>
      <div className="grid grid-cols-4 gap-x-7 gap-y-3">
        {appsData.map((singleAppData) => (
          <SingleAppsData singleAppData={singleAppData}></SingleAppsData>
        ))}
      </div>
    </div>
  );
};

export default Apps;
