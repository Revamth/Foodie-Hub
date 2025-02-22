import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "../utils/constants";

const useRestaurant = () => {
  const [listofRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    const getRestaurants = async () => {
      try {
        const response = await fetch(SWIGGY_API_URL);
        const json = await response.json();
        const restaurants =
          json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
            ?.restaurants;
        setListofRestaurants(restaurants);
        setFilteredRestaurants(restaurants);
      } catch (error) {
        console.error("Error fetching restaurants:", error);
      }
    };

    getRestaurants();
  }, []);

  const searchRestaurants = (searchText) => {
    const filteredList = listofRestaurants.filter((restaurant) =>
      restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredRestaurants(filteredList);
  };

  const filterTopRatedRestaurants = () => {
    const filteredList = listofRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4.5
    );
    setFilteredRestaurants(filteredList);
  };

  return {
    filteredRestaurants,
    searchText,
    setSearchText,
    searchRestaurants,
    filterTopRatedRestaurants,
  };
};

export default useRestaurant;
