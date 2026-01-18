import { MoveDown } from "lucide-react";
import React from "react";
import { Link } from "react-router";

const HomePageUI = ({ homeData }) => {
  //   console.log(homeData);
  const { image, title, ratingAvg, downloads, id } = homeData;
  return (
    <Link to={`/appdetails/${id}`}>
      <div className="h-[300px] p-3 bg-white shadow-md rounded-xl">
        <img
          className="rounded-xl h-[70%] w-full bg-cover bg-center bg-red-400"
          src={image}
        ></img>
        <p className="font-semibold text-xl mt-3">{title}</p>
        <div className="flex justify-between mt-3 font-semibold">
          <p className="text-[#00D390] flex items-center bg-[#F1F5E8] px-2 py-1">
            <i class="fa-classic fa-solid fa-arrow-down"></i>
            {downloads / 100000}M
          </p>
          <p className="text-[#FF8811] bg-[#FFF0E1] px-2 py-1">
            <i class="fa-solid fa-star mr-1"></i>
            {ratingAvg}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default HomePageUI;
