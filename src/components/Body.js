import Restrocard from "./Restocard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  const [filteredRestaurants, setfilteredRestaurants] = useState([]);
  // Whenever there is an change in state variable, react triggers re-consiliation cycle(re-renders the component)
  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    getRestaurants();
  }, []);
  const getRestaurants = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();

    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            onClick={() => {
              const filteredList = listofRestaurants.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setfilteredRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurants.map((restauant) => (
          <Restrocard key={restauant.info.id} resData={restauant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
