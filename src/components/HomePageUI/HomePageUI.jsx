import React from "react";

const HomePageUI = ({ homeData }) => {
  console.log(homeData);
  const { image, title, ratingAvg, downloads } = homeData;
  return (
    <div>
      <img className="h-[315px] bg-red-400" src={image}></img>
      <p>{title}</p>
      <div className="flex justify-between">
        <p>{downloads / 100000}M</p>
        <p>{ratingAvg}</p>
      </div>
    </div>
  );
};

export default HomePageUI;
