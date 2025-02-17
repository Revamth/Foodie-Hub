import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import { MENU_URL } from "../utils/constants";

const Restromenu = () => {
  const [menu, setMenu] = useState(null);
  const { resid } = useParams();

  useEffect(() => {
    fetchMenu();
  }, [resid]);

  const fetchMenu = async () => {
    try {
      const response = await fetch(
        MENU_URL + resid + "&catalog_qa=undefined&submitAction=ENTER"
      );
      const json = await response.json();

      setMenu(json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  if (!menu) return <Shimmer />;

  const resInfo = menu; // Assign resInfo to menu

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
    resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[4]?.card
      ?.card?.itemCards || [];

  return (
    <div className="menu">
      <h1>{name}</h1>
      <h2>Restaurant Menu</h2>
      <h3>
        {cuisines?.join(", ")} - {costForTwoMessage}
      </h3>
      <h3>{areaName}</h3>
      <h3>{locality}</h3>
      <h3>{avgRatingString}</h3>
      <h3>{totalRatingsString}</h3>
      <h2>Menu</h2>
      <ul>
        {itemCards.map((item) => (
          <li key={item.card.info.id}>
            {item.card.info.name} - Rs.{" "}
            {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restromenu;
