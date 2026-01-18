import React from "react";
import { useLoaderData, useParams } from "react-router";
import downloadPng from "../../assets/icon-downloads.png";
import rating from "../../assets/icon-ratings.png";
import review from "../../assets/icon-review.png";

import {
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

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
    size,
  } = singleApp;

  return (
    <div className="bg-[#f8f2f2] text-black">
      <div className="appdetails-header flex max-w-[1200px] mx-auto pt-16">
        <div className="left mr-10">
          <img
            className="max-w-[350px] px-5 max-h-[250px] py-4 rounded-md bg-white"
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
          <div className="body flex justify-between gap-x-10 pt-3">
            <div className="downloads">
              <img src={downloadPng} alt="" />
              <p className="text-[#627382] pt-1">Downloads</p>
              <p className="text-2xl font-bold">{downloads / 1000000}M</p>
            </div>
            <div className="average-rating">
              <img src={rating} alt="" />
              <p className="text-[#627382] pt-1">Average Ratings</p>
              <p className="text-2xl font-bold">{ratingAvg}</p>
            </div>
            <div className="total-reviews">
              <img src={review} alt="" />
              <p className="text-[#627382] pt-1">Total Reviews</p>
              <p className="text-2xl font-bold">{reviews}</p>
            </div>
          </div>
          <div className="btn mt-2 bg-[#00D390] border-none text-[17px]">
            <button>Install Now {size}</button>
          </div>
        </div>
      </div>

      {/* Recharts */}
      <div className="appdetails-body">
        <div className="max-w-[1200px] mx-auto mt-10">
          <h2 className="text-2xl font-bold">Ratings</h2>

          <div
            style={{ width: "100%", height: 300 }}
            className="focus:outline-none"
          >
            <ResponsiveContainer>
              <ComposedChart layout="vertical" data={ratings}>
                <XAxis type="number" />

                <YAxis dataKey="name" type="category" reversed={true} />

                <Tooltip />
                <Bar dataKey="count" fill="#ff9100" barSize={20} />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <div className="appdetails-description">
        <div className="max-w-[1200px] mx-auto pt-10 pb-20">
          <h3 className="font-semibold text-2xl mb-3">Description</h3>
          <div>{description}</div>
        </div>
      </div>
    </div>
  );
};

export default AppsDetails;
