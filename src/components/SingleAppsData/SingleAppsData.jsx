import React from "react";
import { Link } from "react-router";

const SingleAppsData = ({ singleAppData }) => {
  //   console.log(singleAppData);
  const { image, title, ratingAvg, downloads, id } = singleAppData;
  return (
    <Link to={`/appdetails/${id}`}>
      <div>
        <img className="h-[315px] bg-red-400" src={image}></img>
        <p>{title}</p>
        <div className="flex justify-between">
          <p>{downloads / 100000}M</p>
          <p>{ratingAvg}</p>
        </div>
      </div>
    </Link>
  );
};

export default SingleAppsData;
