import React from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestromenu from "../utils/useRestromenu";

const Restromenu = () => {
  const { resid } = useParams();
  const menu = useRestromenu(resid);

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

  const itemCards =
    resInfo?.cards
      ?.find((card) => card.groupedCard?.cardGroupMap?.REGULAR)
      ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c.card?.card?.itemCards
      )?.card?.card?.itemCards || [];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
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

      <h2 className="text-2xl font-bold text-gray-800 mb-6">Menu</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {itemCards.map((item) => {
          const { id, name, price, defaultPrice, imageId } = item.card.info;
          return (
            <div
              key={id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              {imageId && (
                <div className="w-full aspect-[4/3] max-h-[320px] overflow-hidden">
                  <img
                    src={`https://media-assets.swiggy.com/${imageId}`}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-2 line-clamp-2">
                  {name}
                </h3>
                <p className="text-green-600 font-bold">
                  ₹{(price || defaultPrice) / 100}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restromenu;
