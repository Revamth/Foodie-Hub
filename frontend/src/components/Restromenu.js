import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestromenu from "../utils/useRestromenu";
import ResCategory from "./ResCategory";

const Restromenu = () => {
  const { resid } = useParams();
  const menu = useRestromenu(resid);
  const [showlist, setShowlist] = useState(null);

  if (!menu) return <Shimmer />;

  const resInfo = menu;
  const {
    name,
    cuisines,
    locality,
    avgRatingString,
    totalRatingsString,
    costForTwoMessage,
    areaName,
  } = resInfo?.cards?.[2]?.card?.card?.info || {};

  const categories =
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    ) || [];

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="w-full md:w-8/12 lg:w-6/12 bg-white rounded-xl shadow-lg p-6 mb-8 mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">{name}</h1>
        <p className="text-gray-600 mb-4">{cuisines?.join(", ")}</p>
        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
          <span className="bg-green-50 px-3 py-1 rounded-full">
            {costForTwoMessage}
          </span>
          <span className="bg-green-50 px-3 py-1 rounded-full">
            {areaName}, {locality}
          </span>
          <span className="bg-green-50 px-3 py-1 rounded-full flex items-center">
            <svg
              className="w-4 h-4 mr-1 text-yellow-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            {avgRatingString} ({totalRatingsString})
          </span>
        </div>
      </div>

      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card?.id || index}
          data={category?.card?.card}
          showlist={index === showlist}
          setShowlist={() => setShowlist(index === showlist ? null : index)}
        />
      ))}
    </main>
  );
};

export default Restromenu;
