import { CDN_URL } from "../utils/constants";
import { Link } from "react-router-dom";

const Restrocard = ({ resData }) => {
  const { name, cuisines, avgRating, sla, cloudinaryImageId, id } =
    resData?.info;

  return (
    <Link
      to={`/restaurant/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="restro-card">
        <img className="res-img" src={CDN_URL + cloudinaryImageId} alt={name} />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>Rating: {avgRating}</h4>
        <h4>Delivery: {sla.slaString}</h4>
      </div>
    </Link>
  );
};

export default Restrocard;
