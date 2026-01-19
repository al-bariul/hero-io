import React from "react";

const InstallationData = ({ app, handleUninstall }) => {
  const { image, title, ratingAvg, downloads, size, id } = app;
  return (
    <div>
      <div className="max-h-[300px] p-3 bg-white shadow-md rounded-xl flex items-center justify-between">
        <div className="flex items-center">
          <div className="img">
            <img
              className="max-w-32 bg-cover bg-center bg-red-400"
              src={image}
            ></img>
          </div>
          <div className="ml-6">
            <p className="font-semibold text-xl mt-3">{title}</p>
            <div className="flex justify-between mt-3 font-semibold">
              <p className="text-[#00D390] flex items-center bg-[#F1F5E8] px-2 py-1 mr-3">
                <i class="fa-classic fa-solid fa-arrow-down"></i>
                {downloads / 100000}M
              </p>
              <p className="text-[#FF8811] bg-[#FFF0E1] px-2 py-1">
                <i class="fa-solid fa-star mr-1"></i>
                {ratingAvg}
              </p>
              <p className="ml-4 text-xl text-gray-400">{size} MB</p>
            </div>
          </div>
        </div>
        <div className="uninstall">
          <button
            onClick={() => handleUninstall(id)}
            className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] mr-5 px-5 py-2 rounded-lg text-white font-bold"
          >
            Uninstall
          </button>
        </div>
      </div>
    </div>
  );
};

export default InstallationData;
