import React, { use, useState } from "react";
import SingleAppsData from "../SingleAppsData/SingleAppsData";
import ErrorImg from "../../assets/App-Error.png";

const Apps = ({ appPromise }) => {
  const appsData = use(appPromise);
  const [searchTerm, setSearchTerm] = useState("");

  // Search Logic
  const filterdApps = appsData.filter((app) =>
    app.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  return (
    <div className="bg-[#f8f2f2] text-black min-h-screen">
      {/* Header */}
      <div className="header pt-10 mb-16 text-center">
        <p className="text-5xl font-bold">Our All Applications</p>
        <p className="mt-3 text-xl text-[#627382]">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-center justify-between mb-8 font-bold text-xl">
          <div>
            ({filterdApps.length})<span className="ml-2">Apps Found</span>
          </div>

          {/* Controlled Search Input */}
          <div className="w-[300px]">
            <label className="input bg-white border-2 flex items-center gap-2 p-2 rounded-md">
              <svg
                className="h-5 w-5 opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input
                type="search"
                className="grow outline-none w-full"
                placeholder="Search app"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // টাইপ করার সাথে সাথে স্টেট আপডেট হবে
              />
            </label>
          </div>
        </div>

        {/* Displaying Filtered Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7 pb-16">
          {filterdApps.length > 0 ? (
            filterdApps.map((app) => (
              <SingleAppsData key={app.id} singleAppData={app} />
            ))
          ) : (
            <div className="col-span-4 text-center py-20 text-gray-500">
              <img src={ErrorImg} alt="" />
              <button
                onClick={() => setSearchTerm("")}
                className="mt-4 text-blue-500 underline"
              >
                Show all apps
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Apps;
