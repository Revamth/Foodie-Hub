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

  if (filteredRestaurants?.length === 0) return <Shimmer />;

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
        <div className="flex w-full sm:w-auto items-center gap-2">
          <input
            type="text"
            className="w-full sm:w-80 p-3 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent shadow-sm transition-all"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            placeholder="Search restaurants..."
            aria-label="Search restaurants"
          />
          <button
            className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 active:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
            onClick={() => searchRestaurants(searchText)}
            aria-label="Search"
          >
            Search
          </button>
        </div>
        <button
          className="w-full sm:w-auto bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 active:bg-green-700 transition-all duration-200 shadow-md hover:shadow-lg cursor-pointer"
          onClick={filterTopRatedRestaurants}
          aria-label="Show top rated restaurants"
        >
          Top Rated
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
        {filteredRestaurants?.map((restaurant) => (
          <Restrocard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </main>
  );
};

export default Body;
