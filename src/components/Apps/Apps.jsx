import React, { use } from "react";
import SingleAppsData from "../SingleAppsData/SingleAppsData";

const Apps = ({ appPromise }) => {
  const appsData = use(appPromise);
  //   console.log(appsData);
  return (
    <div className="bg-[#f8f2f2] text-black">
      <div className="header pt-10 mb-16 text-center">
        <p className="text-5xl font-bold">Our All Applications</p>
        <p className="mt-3 text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div>
        <div className="flex items-center justify-between max-w-[1200px] mx-auto mb-5 font-bold text-xl">
          <div>
            ({appsData.length})<span className="ml-2">Apps Found</span>
          </div>
          <div className="border-1 border-gray-300 rounded-md w-[300px] ">
            <label className="input bg-white border-2">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </g>
              </svg>
              <input
                type="search"
                className="grow  w-full"
                placeholder="Search"
              />
            </label>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-7 gap-y-3 max-w-[1200px] mx-auto pb-16">
        {appsData.map((singleAppData) => (
          <SingleAppsData
            key={singleAppData.id}
            singleAppData={singleAppData}
          ></SingleAppsData>
        ))}
      </div>
    </div>
  );
};

export default Apps;
