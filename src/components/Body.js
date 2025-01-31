import Restrocard from "./Restocard";
import { useState, useEffect } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.61610&lng=73.72860&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await response.json();
    console.log(json);
    setlistofRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (listofRestaurants.length === 0) {
    return <div>Loading...</div>;
  }
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setlistofRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {listofRestaurants.map((restauant) => (
          <Restrocard key={restauant.info.id} resData={restauant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
