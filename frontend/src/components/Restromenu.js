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
    <div className="container mx-auto px-4 py-8">
      <div className="w-6/12 bg-white rounded-xl shadow-lg p-6 mb-8 mx-auto">
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
            ⭐ {avgRatingString} ({totalRatingsString})
          </span>
        </div>
      </div>

      {categories.map((category, index) => (
        <ResCategory
          key={category?.card?.card?.id}
          data={category?.card?.card}
          showlist={index === showlist}
          setShowlist={() => setShowlist(index === showlist ? null : index)}
        />
      ))}
    </div>
  );
};

export default Restromenu;
