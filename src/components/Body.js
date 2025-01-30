import Restrocard from "./Restocard";
import resList from "../utils/resList";
import { useState } from "react";

const Body = () => {
  const [listofRestaurants, setlistofRestaurants] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listofRestaurants.filter(
              (restauant) => restauant.info.avgRating > 4
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
