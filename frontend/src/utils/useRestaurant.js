import { useState, useEffect } from "react";
import { SWIGGY_API_URL } from "./constants";

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

  const debounce = (func, delay) => {
    let timeoutId;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        func.apply(this, args);
      }, delay);
    };
  };

  const debouncedSearch = debounce(searchRestaurants, 300);

  return {
    filteredRestaurants,
    searchText,
    setSearchText,
    searchRestaurants: debouncedSearch,
    filterTopRatedRestaurants,
  };
};

export default useRestaurant;
