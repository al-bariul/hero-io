import React from "react";
import { useLoaderData, useParams } from "react-router";

const AppsDetails = () => {
  const appDetail = useLoaderData();
  const { id } = useParams();
  const appId = parseInt(id);
  console.log(appId);

  const singleApp = appDetail.find((app) => app.id === appId);
  console.log(singleApp);

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
    <div>
      <div className="appdetails-header">
        <div className="left">
          <img className="w-[200px] h-[300px] bg-red-300" src={image} alt="" />
        </div>
        <div className="right">
          <div className="header">
            <h3>{title}</h3>
            <p>Developed by {companyName}</p>
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
