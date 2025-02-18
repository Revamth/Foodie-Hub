import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Restrocard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    resData?.info;

  return (
    <Link to={"/restaurant/" + id} className="w-full">
      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
        <div className="relative w-full">
          <div className="w-full aspect-[4/3] max-h-[300px] overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src={CDN_URL + cloudinaryImageId}
              alt={name}
            />
          </div>
          <div className="absolute top-4 right-4 bg-white px-2 py-1 rounded-lg shadow-md">
            <span className="text-green-500 font-medium">⭐ {avgRating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xl font-bold text-gray-800 mb-2 truncate">
            {name}
          </h3>
          <p className="text-gray-600 text-sm mb-2 h-12 line-clamp-2">
            {cuisines.join(", ")}
          </p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <span className="flex items-center">🕒 {sla.slaString}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Restrocard;
