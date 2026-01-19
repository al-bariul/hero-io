import React, { use, useState, useEffect } from "react";
import { getStoredApps, removeFromDB } from "../Utility/addToDB";
import InstallationData from "../InstallationData/InstallationData";

const Installation = ({ appPromise }) => {
  const data = use(appPromise);
  const [sortBy, setSortBy] = useState("");
  const [installedApps2, setInstalledApps2] = useState([]);

  useEffect(() => {
    const storedAppData = getStoredApps();
    const convertedStoredApps = storedAppData.map((app) => parseInt(app));
    const initialApps = data.filter((app) =>
      convertedStoredApps.includes(app.id),
    );
    setInstalledApps2(initialApps);
  }, [data]);

  let displayApps = [...installedApps2];
  if (sortBy === "Name") {
    displayApps.sort((a, b) => a.title.localeCompare(b.title));
  } else if (sortBy === "Size") {
    displayApps.sort((a, b) => b.size - a.size);
  }

  const handleUninstall = (id) => {
    removeFromDB(id);
    const remaining = installedApps2.filter((app) => app.id != id);
    setInstalledApps2(remaining);
  };

  return (
    <div className="bg-[#f8f2f2] text-black">
      <div className="text-center pt-16">
        <h2 className="text-4xl font-bold">Your Installed Apps</h2>
        <p className="mt-2 text-xl text-[#627382]">
          Explore All Trending Apps on the Market developed by us
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto p-10 min-h-screen mt-10">
        <div className="flex justify-between items-center mb-10">
          <h1 className="text-xl font-semibold">
            ({displayApps.length}) Apps Found
          </h1>

          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="select select-bordered bg-white max-w-40 font-semibold"
          >
            <option disabled selected value="">
              Sort By
            </option>
            <option value="Name">Sort by Name</option>
            <option value="Size">Sort by Size</option>
          </select>
        </div>

        {displayApps.length > 0 ? (
          <div className="grid grid-cols-1 gap-8">
            {displayApps.map((app) => (
              <InstallationData
                handleUninstall={handleUninstall}
                key={app.id}
                app={app}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
            <p className="text-xl text-gray-500">Installation list is empty.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Installation;
