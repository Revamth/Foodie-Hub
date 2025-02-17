// components/Body.js
import Restrocard from "./Restocard";
import Shimmer from "./Shimmer";
import useRestaurant from "../utils/useRestaurant";

const Body = () => {
  const {
    filteredRestaurants,
    searchText,
    setSearchText,
    searchRestaurants,
    filterTopRatedRestaurants,
  } = useRestaurant();

  if (filteredRestaurants.length === 0) {
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
          <button onClick={() => searchRestaurants(searchText)}>Search</button>
        </div>
        <button className="filter-btn" onClick={filterTopRatedRestaurants}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restro-container">
        {filteredRestaurants.map((restaurant) => (
          <Restrocard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
