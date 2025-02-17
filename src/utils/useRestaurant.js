// hooks/useRestaurant.js
import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./constants";

const useRestaurant = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    try {
      const response = await fetch(SWIGGY_API_URL);
      const json = await response.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setlistofRestaurants(restaurants);
      setfilteredRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching restaurants:", error);
    }
  };

  const searchRestaurants = (searchText) => {
    const filteredList = listofRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setfilteredRestaurants(filteredList);
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listofRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setfilteredRestaurants(filteredList);
  };

  return {
    listofRestaurants,
    filteredRestaurants,
    searchText,
    setSearchText,
    searchRestaurants,
    filterTopRatedRestaurants,
  };
};

export default useRestaurant;
