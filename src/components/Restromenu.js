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
    <div className="menu-container">
      <div className="restaurant-info">
        <h1>{name}</h1>
        <h3>{cuisines?.join(", ")}</h3>
        <p>{costForTwoMessage}</p>
        <p>
          {areaName}, {locality}
        </p>
        <p>
          ⭐ {avgRatingString} ({totalRatingsString})
        </p>
      </div>

      <h2>Menu</h2>
      <div className="menu-items">
        {itemCards.map((item) => {
          const { id, name, price, defaultPrice, imageId } = item.card.info;
          return (
            <div className="menu-item" key={id}>
              {imageId && (
                <img
                  src={`https://media-assets.swiggy.com/${imageId}`}
                  alt={name}
                  className="dish-image"
                />
              )}
              <div className="item-info">
                <h3>{name}</h3>
                <p>Rs. {price / 100 || defaultPrice / 100}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Restromenu;
