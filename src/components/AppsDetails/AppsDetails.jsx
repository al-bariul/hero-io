import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppsDetails = () => {
  const appDetail = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  // console.log(appId);

  const singleApp = appDetail.find((app) => app.id === appId);
  // console.log(singleApp);

  const {
    image,
    title,
    companyName,
    reviews,
    ratingAvg,
    downloads,
    ratings,
    description,
  } = singleApp;

  return (
    <div className="bg-[#f8f2f2] text-black">
      <div className="appdetails-header border-4 flex max-w-[1200px] mx-auto pt-16">
        <div className="left mr-10">
          <img
            className="w-[350px] h-[250px] py-4 rounded-md bg-white"
            src={image}
            alt=""
          />
        </div>
        <div className="right">
          <div className="header">
            <h3 className="text-4xl font-bold">{title}</h3>
            <p className="mt-2 font-semibold text-[#627382]">
              Developed by{" "}
              <span className="text-red-400 bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
                {companyName}
              </span>
            </p>
          </div>
          <div className="body">
            <div className="downloads">
              <p>Downloads</p>
              <p>{downloads / 1000000}M</p>
            </div>
            <div className="average-rating">
              <p>Average Ratings</p>
              <p>{ratingAvg}</p>
            </div>
            <div className="total-reviews">
              <p>Total Reviews</p>
              <p>{reviews}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Recharts */}
      <div className="appdetails-body"></div>

      <div className="appdetails-description">{description}</div>
    </div>
  );
};

export default AppsDetails;
